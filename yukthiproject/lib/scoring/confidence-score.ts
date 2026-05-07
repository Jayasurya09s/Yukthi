export function calculateConfidenceScore(
  savings: number
) {
  if (savings >= 200) return 95;
  if (savings >= 100) return 85;
  if (savings >= 50) return 75;

  return 60;
}