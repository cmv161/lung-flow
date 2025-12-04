export type ScenarioId = 'healthy' | 'ards' | 'pneumonia' | 'emphysema';

export type LungScenario = {
  id: ScenarioId;
  label: string;
  defaultBreathsPerMinute: number;
  defaultAmplitude: number;
};

export const SCENARIOS: LungScenario[] = [
  {
    id: 'healthy',
    label: 'Healthy lung',
    defaultBreathsPerMinute: 20,
    defaultAmplitude: 0.02,
  },
  {
    id: 'ards',
    label: 'ARDS',
    defaultBreathsPerMinute: 38,
    defaultAmplitude: 0.05,
  },
  {
    id: 'pneumonia',
    label: 'Pneumonia',
    defaultBreathsPerMinute: 14,
    defaultAmplitude: 0.05,
  },
  {
    id: 'emphysema',
    label: 'Emphysema',
    defaultBreathsPerMinute: 30,
    defaultAmplitude: 0.02,
  },
];

export const DEFAULT_SCENARIO_ID: ScenarioId = 'healthy';
export const DEFAULT_SCENARIO =
  SCENARIOS.find((scenario) => scenario.id === DEFAULT_SCENARIO_ID) ?? SCENARIOS[0];

export const DEFAULT_BREATHS_PER_MINUTE = DEFAULT_SCENARIO.defaultBreathsPerMinute;
export const DEFAULT_AMPLITUDE = DEFAULT_SCENARIO.defaultAmplitude;
export const DEFAULT_AUTO_BREATHING = true;
