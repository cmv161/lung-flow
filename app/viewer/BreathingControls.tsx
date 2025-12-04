import { useId } from 'react';
import styles from './viewer.module.css';

export const BREATHS_PER_MINUTE_MIN = 12;
export const BREATHS_PER_MINUTE_MAX = 60;
export const AMPLITUDE_MIN = 0.01;
export const AMPLITUDE_MAX = 0.06;
export const AMPLITUDE_STEP = 0.01;

type BreathingControlsProps = {
  breathsPerMinute: number;
  amplitude: number;
  autoBreathing: boolean;
  onBreathsPerMinuteChange: (value: number) => void;
  onAmplitudeChange: (value: number) => void;
  onAutoBreathingChange: (value: boolean) => void;
};

export default function BreathingControls({
  breathsPerMinute,
  amplitude,
  autoBreathing,
  onBreathsPerMinuteChange,
  onAmplitudeChange,
  onAutoBreathingChange,
}: BreathingControlsProps) {
  const breathsPerMinuteId = useId();
  const amplitudeId = useId();
  const autoBreathingId = useId();

  return (
    <div className={styles.controls}>
      <label className={styles.control} htmlFor={breathsPerMinuteId}>
        <span>Breaths/min: {breathsPerMinute}</span>
        <input
          id={breathsPerMinuteId}
          type="range"
          min={BREATHS_PER_MINUTE_MIN}
          max={BREATHS_PER_MINUTE_MAX}
          value={breathsPerMinute}
          aria-valuetext={`${breathsPerMinute} breaths per minute`}
          onChange={(e) => onBreathsPerMinuteChange(Number(e.target.value))}
        />
      </label>

      <label className={styles.control} htmlFor={amplitudeId}>
        <span>Amplitude: {amplitude.toFixed(2)}</span>
        <input
          id={amplitudeId}
          type="range"
          min={AMPLITUDE_MIN}
          max={AMPLITUDE_MAX}
          step={AMPLITUDE_STEP}
          value={amplitude}
          aria-valuetext={`Amplitude ${amplitude.toFixed(2)}`}
          onChange={(e) => onAmplitudeChange(Number(e.target.value))}
        />
      </label>

      <label className={styles.controlRow} htmlFor={autoBreathingId}>
        <input
          id={autoBreathingId}
          type="checkbox"
          checked={autoBreathing}
          onChange={(e) => onAutoBreathingChange(e.target.checked)}
        />
        <span>Auto breathing</span>
      </label>
    </div>
  );
}
