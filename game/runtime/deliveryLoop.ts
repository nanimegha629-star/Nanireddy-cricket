export interface DeliveryRequest {
  pace: number;
  line: number;
  type: "yorker" | "bouncer" | "slower" | "normal";
  timing?: number;
}

export interface MatchState {
  bowlingSkill?: number;
}

export interface DeliveryResult {
  timingShift: number;
  difficulty: number;
}

const clamp = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(max, value));

export function simulateDelivery(
  state: MatchState,
  d: DeliveryRequest
): DeliveryResult {
  const bowlingSkill = clamp(state.bowlingSkill ?? 0.5, 0, 1);
  const pace = clamp(d.pace, 0, 100);
  const line = clamp(d.line, -1, 1);
  const timing = clamp(d.timing ?? 0.5, 0, 1);

  const typeDifficulty =
    d.type === "yorker" ? 0.2 :
    d.type === "bouncer" ? 0.15 :
    d.type === "slower" ? 0.1 : 0;

  const difficulty = clamp(
    pace * 0.002 +
    Math.abs(line) * 0.1 +
    typeDifficulty +
    bowlingSkill * 0.15,
    0,
    1
  );

  const typeShift =
    d.type === "yorker" ? 0.05 :
    d.type === "bouncer" ? 0.08 :
    d.type === "slower" ? -0.04 : 0;

  const timingShift = typeShift + (0.5 - timing) * 0.1;

  return {
    timingShift,
    difficulty,
  };
}
