export function getBreathFactor(time: number, breathsPerMinute: number, amplitude: number): number {
  const breathsPerSecond = breathsPerMinute / 60;
  const phase = time * breathsPerSecond * Math.PI * 2;
  const breathFactor = 1 + amplitude * Math.sin(phase);
  return breathFactor;
}
