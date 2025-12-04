import { getBreathFactor } from './breathing';

describe('getBreathFactor', () => {
  test('returns 1 when amplitude is 0', () => {
    const times = [0, 0.25, 1, 2.5, 10];
    times.forEach((time) => {
      expect(getBreathFactor(time, 12, 0)).toBe(1);
    });
  });

  test('stays within [1 - amplitude, 1 + amplitude]', () => {
    const amplitude = 0.2;
    const breathsPerMinute = 12;
    const times = [0, 0.5, 1, 2, 5];
    const epsilon = 1e-6;

    times.forEach((time) => {
      const result = getBreathFactor(time, breathsPerMinute, amplitude);
      expect(result).toBeGreaterThanOrEqual(1 - amplitude - epsilon);
      expect(result).toBeLessThanOrEqual(1 + amplitude + epsilon);
    });
  });

  test('has correct values for a simple 60 bpm cycle', () => {
    const amp = 0.5;

    expect(getBreathFactor(0, 60, amp)).toBeCloseTo(1, 5);
    expect(getBreathFactor(0.25, 60, amp)).toBeCloseTo(1 + amp, 5);
    expect(getBreathFactor(0.5, 60, amp)).toBeCloseTo(1, 5);
    expect(getBreathFactor(0.75, 60, amp)).toBeCloseTo(1 - amp, 5);
  });

  test('returns 1 when breathsPerMinute is 0', () => {
    const amp = 0.3;
    const times = [0, 1, 2.5, 10];

    times.forEach((time) => {
      expect(getBreathFactor(time, 0, amp)).toBe(1);
    });
  });
});
