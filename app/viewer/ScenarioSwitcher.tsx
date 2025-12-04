import styles from './viewer.module.css';
import { LungScenario, SCENARIOS, type ScenarioId } from './scenarios';

type ScenarioSwitcherProps = {
  scenarioId: ScenarioId;
  breathsPerMinute: number;
  amplitude: number;
  onChange: (scenario: LungScenario) => void;
};

export default function ScenarioSwitcher({
  scenarioId,
  breathsPerMinute,
  amplitude,
  onChange,
}: ScenarioSwitcherProps) {
  return (
    <div className={styles.scenarios} role="group" aria-label="Lung scenarios">
      {SCENARIOS.map((scenario) => {
        const matchesDefaults =
          scenario.defaultBreathsPerMinute === breathsPerMinute &&
          scenario.defaultAmplitude === amplitude;
        const isSelected = scenario.id === scenarioId;
        const isCustomized = isSelected && !matchesDefaults;
        return (
          <button
            key={scenario.id}
            type="button"
            className={`${styles.scenarioButton} ${isSelected ? styles.scenarioButtonActive : ''}`}
            aria-pressed={isSelected}
            onClick={() => onChange(scenario)}
          >
            <span className={styles.scenarioButtonContent}>
              <span>{scenario.label}</span>
            </span>
            {isCustomized ? <span className={styles.customizedBadge}>Custom</span> : null}
          </button>
        );
      })}
    </div>
  );
}
