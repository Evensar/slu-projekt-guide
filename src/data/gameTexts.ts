export interface GameTexts {
  // Header texts
  gameTitle: string;
  gameSubtitle: string;
  
  // Start screen
  welcomeTitle: string;
  welcomeDescription: string;
  startGameButton: string;
  aboutGameButton: string;
  faqButton: string;
  textEditorButton: string;
  
  // Game screen
  questionPrompt: string;
  nextButton: string;
  
  // Completion screen
  completionTitle: string;
  completionDescription: string;
  scoreLabel: string;
  playAgainButton: string;
  
  // Scenario selector
  scenarioSelectorTitle: string;
  scenarioSelectorDescription: string;
  selectAllButton: string;
  deselectAllButton: string;
  startSelectedButton: string;
  selectedCountLabel: string;
  
  // FAQ
  faqTitle: string;
  faqDescription: string;
  
  // Text Editor
  textEditorTitle: string;
  textEditorDescription: string;
  saveChangesButton: string;
  resetToDefaultButton: string;
  
  // Common
  closeButton: string;
  backButton: string;
}

export const defaultGameTexts: GameTexts = {
  // Header texts
  gameTitle: "Projektkontoret på SLU",
  gameSubtitle: "så stöttar vi dina projekt",
  
  // Start screen
  welcomeTitle: "Välkommen!",
  welcomeDescription: "Projektkontoret på SLU hjälper dig att nå mål med struktur, metodik och kvalitet. Klara scenarierna och upptäck vilket stöd du kan få.",
  startGameButton: "Starta spel",
  aboutGameButton: "Om spelet",
  faqButton: "Frågor & svar",
  textEditorButton: "Redigera texter",
  
  // Game screen
  questionPrompt: "Vad är bästa sättet att hjälpa till?",
  nextButton: "Nästa",
  
  // Completion screen
  completionTitle: "Grattis!",
  completionDescription: "Du har genomfört alla scenarier och lärt dig mer om projektkontorets stöd.",
  scoreLabel: "Din poäng:",
  playAgainButton: "Spela igen",
  
  // Scenario selector
  scenarioSelectorTitle: "Välj scenarier att spela",
  scenarioSelectorDescription: "Välj ett eller flera scenarier du vill träna på",
  selectAllButton: "Välj alla",
  deselectAllButton: "Avmarkera alla",
  startSelectedButton: "Starta spel",
  selectedCountLabel: "valda",
  
  // FAQ
  faqTitle: "Frågor & svar",
  faqDescription: "Vanliga frågor om projektkontoret och vårt stöd",
  
  // Text Editor
  textEditorTitle: "Redigera speltexter",
  textEditorDescription: "Här kan du anpassa alla texter som visas i spelet",
  saveChangesButton: "Spara ändringar",
  resetToDefaultButton: "Återställ till standard",
  
  // Common
  closeButton: "Stäng",
  backButton: "Tillbaka",
};

// Hook for managing game texts
export const useGameTexts = () => {
  const getTexts = (): GameTexts => {
    const saved = localStorage.getItem('gameTexts');
    if (saved) {
      try {
        return { ...defaultGameTexts, ...JSON.parse(saved) };
      } catch {
        return defaultGameTexts;
      }
    }
    return defaultGameTexts;
  };

  const saveTexts = (texts: GameTexts) => {
    localStorage.setItem('gameTexts', JSON.stringify(texts));
  };

  const resetTexts = () => {
    localStorage.removeItem('gameTexts');
  };

  return { getTexts, saveTexts, resetTexts };
};