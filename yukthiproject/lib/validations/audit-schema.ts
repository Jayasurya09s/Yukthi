import { z } from "zod";

export const auditToolSchema = z.object({
  vendor: z.string(),
  planId: z.string(),
  monthlySpend: z.number().min(0),
  seats: z.number().min(1),
});

export const auditSchema = z.object({
  tools: z.array(auditToolSchema),
  teamSize: z.number().min(1),
  primaryUseCase: z.enum([
    "coding",
    "writing",
    "research",
    "data",
    "mixed",
  ]),
});