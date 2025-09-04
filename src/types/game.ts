export interface GameState {
  currentScenario: number;
  totalScenarios: number;
  score: number;
  completedScenarios: number[];
  mistakes: number;
  startTime: number;
  isCompleted: boolean;
}

export interface Scenario {
  id: number;
  title: string;
  description: string;
  npc: {
    name: string;
    message: string;
  };
  options: ScenarioOption[];
  correctOptionId: number;
  feedback: {
    correct: string;
    incorrect: string;
  };
  learningPoint: string;
}

export interface ScenarioOption {
  id: number;
  text: string;
  type: 'role' | 'system' | 'action';
  description?: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  responsibilities: string[];
  tooltip: string;
}

export interface SystemInfo {
  id: string;
  name: string;
  description: string;
  purpose: string;
}

export interface GameProgress {
  percentage: number;
  currentStep: string;
  nextStep?: string;
}

export interface GameResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  firstTryCorrect: number;
  rolesUsed: string[];
  systemsUsed: string[];
  completionPercentage: number;
}