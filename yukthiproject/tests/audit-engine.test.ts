import { describe, it, expect, vi } from 'vitest';
import { runAudit } from '@/lib/audit-engine/engine';
import * as pricingService from '@/lib/pricing/pricing-service';
import * as optimizer from '@/lib/optimizer/plan-optimizer';
import * as scoring from '@/lib/scoring/confidence-score';

vi.mock('@/lib/pricing/pricing-service', () => ({
  getPlanPricing: vi.fn()
}));
vi.mock('@/lib/optimizer/plan-optimizer', () => ({
  suggestBetterPlan: vi.fn()
}));
vi.mock('@/lib/scoring/confidence-score', () => ({
  calculateConfidenceScore: vi.fn(() => 85)
}));

describe('Audit Engine', () => {
  it('calculates total monthly spend correctly', async () => {
    vi.mocked(pricingService.getPlanPricing).mockReturnValue(null as any);
    const result = await runAudit({
      teamSize: 5,
      primaryUseCase: 'coding',
      tools: [
        { vendor: 'cursor', planId: 'business', monthlySpend: 100, seats: 5 },
        { vendor: 'claude', planId: 'pro', monthlySpend: 50, seats: 1 }
      ]
    } as any);
    expect(result.totalMonthlySpend).toBe(150);
  });

  it('identifies savings when a cheaper plan is available', async () => {
    vi.mocked(pricingService.getPlanPricing).mockReturnValue({ id: 'business', name: 'Business', monthlyPrice: 40 } as any);
    vi.mocked(optimizer.suggestBetterPlan).mockReturnValue({ id: 'pro', name: 'Pro', monthlyPrice: 20 } as any);

    const result = await runAudit({
      teamSize: 2,
      primaryUseCase: 'coding',
      tools: [{ vendor: 'cursor', planId: 'business', monthlySpend: 80, seats: 2 }]
    } as any);

    expect(result.totalMonthlySavings).toBe(40); // (40 - 20) * 2
    expect(result.totalAnnualSavings).toBe(480);
    expect(result.recommendations).toHaveLength(1);
    expect(result.recommendations[0].recommendedPlan).toBe('Pro');
  });

  it('marks as optimized when no savings are found', async () => {
    vi.mocked(pricingService.getPlanPricing).mockReturnValue({ id: 'pro', name: 'Pro', monthlyPrice: 20 } as any);
    vi.mocked(optimizer.suggestBetterPlan).mockReturnValue({ id: 'pro', name: 'Pro', monthlyPrice: 20 } as any);

    const result = await runAudit({
      teamSize: 2,
      primaryUseCase: 'coding',
      tools: [{ vendor: 'cursor', planId: 'pro', monthlySpend: 40, seats: 2 }]
    } as any);

    expect(result.optimized).toBe(true);
    expect(result.totalMonthlySavings).toBe(0);
  });

  it('handles unknown tools gracefully', async () => {
    vi.mocked(pricingService.getPlanPricing).mockReturnValue(undefined as any);
    const result = await runAudit({
      teamSize: 1,
      primaryUseCase: 'mixed',
      tools: [{ vendor: 'unknown', planId: 'pro', monthlySpend: 20, seats: 1 }]
    } as any);
    expect(result.recommendations).toHaveLength(0);
  });

  it('handles tools where no optimized plan can be suggested', async () => {
    vi.mocked(pricingService.getPlanPricing).mockReturnValue({ id: 'pro', name: 'Pro', monthlyPrice: 20 } as any);
    vi.mocked(optimizer.suggestBetterPlan).mockReturnValue(undefined as any);
    const result = await runAudit({
      teamSize: 1,
      primaryUseCase: 'coding',
      tools: [{ vendor: 'cursor', planId: 'pro', monthlySpend: 20, seats: 1 }]
    } as any);
    expect(result.recommendations).toHaveLength(0);
  });
});
