import { useState, useCallback } from "react";
import { GameState, GameResult } from "@/types/game";
import { scenarios } from "@/data/scenarios";
import { roles, systems } from "@/data/roles";

export const useGameState = () => {
  const [gameState, setGameState] = useState<GameState>({
    currentScenario: 0,
    totalScenarios: scenarios.length,
    score: 0,
    completedScenarios: [],
    mistakes: 0,
    startTime: 0,
    isCompleted: false,
  });

  const [currentAnswer, setCurrentAnswer] = useState<{
    selectedOptionId: number | null;
    isCorrect: boolean | null;
    showResult: boolean;
  }>({
    selectedOptionId: null,
    isCorrect: null,
    showResult: false,
  });

  const startGame = useCallback(() => {
    setGameState({
      currentScenario: 0,
      totalScenarios: scenarios.length,
      score: 0,
      completedScenarios: [],
      mistakes: 0,
      startTime: Date.now(),
      isCompleted: false,
    });
    setCurrentAnswer({
      selectedOptionId: null,
      isCorrect: null,
      showResult: false,
    });
  }, []);

  const answerScenario = useCallback((optionId: number) => {
    const currentScenarioData = scenarios[gameState.currentScenario];
    const isCorrect = optionId === currentScenarioData.correctOptionId;
    
    setCurrentAnswer({
      selectedOptionId: optionId,
      isCorrect,
      showResult: true,
    });

    setTimeout(() => {
      setGameState(prev => ({
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        mistakes: !isCorrect ? prev.mistakes + 1 : prev.mistakes,
        completedScenarios: [...prev.completedScenarios, prev.currentScenario],
      }));
    }, 2000);
  }, [gameState.currentScenario]);

  const nextScenario = useCallback(() => {
    if (gameState.currentScenario < gameState.totalScenarios - 1) {
      setGameState(prev => ({
        ...prev,
        currentScenario: prev.currentScenario + 1,
      }));
      setCurrentAnswer({
        selectedOptionId: null,
        isCorrect: null,
        showResult: false,
      });
    } else {
      setGameState(prev => ({
        ...prev,
        isCompleted: true,
      }));
    }
  }, [gameState.currentScenario, gameState.totalScenarios]);

  const getGameResult = useCallback((): GameResult => {
    const timeSpent = Math.floor((Date.now() - gameState.startTime) / 1000);
    const firstTryCorrect = gameState.score; // Simplified for this implementation
    
    // Determine which roles and systems were encountered
    const rolesUsed = new Set<string>();
    const systemsUsed = new Set<string>();
    
    scenarios.slice(0, gameState.completedScenarios.length + 1).forEach(scenario => {
      scenario.options.forEach(option => {
        if (option.type === 'role') {
          const role = roles.find(r => r.name.toLowerCase() === option.text.toLowerCase());
          if (role) rolesUsed.add(role.name);
        } else if (option.type === 'system') {
          const system = systems.find(s => option.text.toLowerCase().includes(s.name.toLowerCase()));
          if (system) systemsUsed.add(system.name);
        }
      });
    });

    return {
      score: gameState.score,
      totalQuestions: gameState.totalScenarios,
      timeSpent,
      firstTryCorrect,
      rolesUsed: Array.from(rolesUsed),
      systemsUsed: Array.from(systemsUsed),
      completionPercentage: (gameState.completedScenarios.length / gameState.totalScenarios) * 100,
    };
  }, [gameState]);

  const resetGame = useCallback(() => {
    setGameState({
      currentScenario: 0,
      totalScenarios: scenarios.length,
      score: 0,
      completedScenarios: [],
      mistakes: 0,
      startTime: 0,
      isCompleted: false,
    });
    setCurrentAnswer({
      selectedOptionId: null,
      isCorrect: null,
      showResult: false,
    });
  }, []);

  return {
    gameState,
    currentAnswer,
    startGame,
    answerScenario,
    nextScenario,
    getGameResult,
    resetGame,
    currentScenarioData: scenarios[gameState.currentScenario],
  };
};