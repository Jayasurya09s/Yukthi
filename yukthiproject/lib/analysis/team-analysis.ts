export function isTeamPlanOverkill(
  seats: number,
  recommendedMin: number
) {
  return seats < recommendedMin;
}