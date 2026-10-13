export interface DeliveryRequest {
  pace: number;
  line: number;
  type: 'yorker' | 'bouncer' | 'slower' | 'normal';
  timing?: number;
}

export interface MatchState {
  bowlingSkill?: number;
}

export interface DeliveryResult {
  timingShift: number;
  difficulty: number;
}

export function simulateDelivery(state: MatchState, d: DeliveryRequest): DeliveryResult {
  const bowlingSkill = state.bowlingSkill ?? 0.5;
  const difficulty = Math.max(0, Math.min(1, (d.pace / 100) * 0.2 + Math.abs(d.line) * 0.1));

  const timingShift = 
    d.type === 'yorker' ? 0.05 : 
    d.type === 'bouncer' ? 0.08 : 
    d.type === 'slower' ? -0.04 : 0;

  return {
    timingShift,
    difficulty,
  };
}
