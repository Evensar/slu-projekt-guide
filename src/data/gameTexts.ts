import { Scenario } from '@/types/game';
import { scenarios as defaultScenarios } from './scenarios';

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
  
  // About Game section (detailed)
  aboutGameTitle: string;
  aboutGameDescription: string;
  aboutGameContent: string;
  rolesTitle: string;
  rolesDescription: string;
  
  // Game Start page detailed texts
  gameMainTitle: string;
  gameMainDescription: string;
  startGameButtonText: string;
  
  // Learning goals section
  learningGoalsTitle: string;
  learningGoalsSubtitle: string;
  learningGoal1: string;
  learningGoal2: string;
  learningGoal3: string;
  learningGoal4: string;
  
  // How it works section
  howItWorksTitle: string;
  howItWorks1: string;
  howItWorks2: string;
  howItWorks3: string;
  howItWorks4: string;
  
  // Feature cards
  featureCard1Title: string;
  featureCard1Description: string;
  featureCard2Title: string;
  featureCard2Description: string;
  featureCard3Title: string;
  featureCard3Description: string;
  
  // Text Editor
  textEditorTitle: string;
  textEditorDescription: string;
  saveChangesButton: string;
  resetToDefaultButton: string;
  addOptionButton: string;
  addScenarioButton: string;
  removeOptionButton: string;
  removeScenarioButton: string;
  
  // FAQ
  faq1Question: string;
  faq1Answer: string;
  faq2Question: string;
  faq2Answer: string;
  faq3Question: string;
  faq3Answer: string;
  faq4Question: string;
  faq4Answer: string;
  faq5Question: string;
  faq5Answer: string;
  
  // Links
  readMoreAboutProjectOffice: string;
  
  // Common
  closeButton: string;
  backButton: string;
  
  // Scenarios
  scenarios: Scenario[];
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
  
  // About Game section (detailed)
  aboutGameTitle: "Om spelet",
  aboutGameDescription: "Lär dig om projektkontorets roller och arbetssätt",
  aboutGameContent: "Projektkontoret på SLU hjälper dig att genomföra framgångsrika projekt. Genom strukturerad metodik, tydliga roller och kontinuerlig uppföljning säkerställer vi att dina projekt når sina mål med rätt kvalitet och inom budget.",
  rolesTitle: "Så kan vi stötta dig",
  rolesDescription: "Projektkontoret har fyra nyckelroller som kan hjälpa dig genom hela projektlivscykeln",
  
  // Game Start page detailed texts
  gameMainTitle: "Så stöttar vi dina projekt",
  gameMainDescription: "Välkommen! Projektkontoret på SLU hjälper dig att nå mål med struktur, metodik och kvalitet. Klara scenarierna och upptäck vilket stöd du kan få.",
  startGameButtonText: "Starta spelet (5-10 min)",
  
  // Learning goals section
  learningGoalsTitle: "Om spelet",
  learningGoalsSubtitle: "Efter spelet kommer du att:",
  learningGoal1: "Känna till projektkontorets uppdrag och erbjudanden",
  learningGoal2: "Förstå när man kontaktar projektkontoret och vilken roll som hjälper",
  learningGoal3: "Se exempel på samarbete genom projektlivscykeln",
  learningGoal4: "Veta att SLU har etablerade arbetssätt och portföljhantering",
  
  // How it works section
  howItWorksTitle: "Så fungerar spelet:",
  howItWorks1: "8 korta scenarier från vardagliga situationer",
  howItWorks2: "Klicka på rätt stöd för varje scenario",
  howItWorks3: "Få omedelbar återkoppling och lärpunkter",
  howItWorks4: "Sammanfattning av vad du lärt dig",
  
  // Feature cards
  featureCard1Title: "Utbildning & Forskning",
  featureCard1Description: "Stöd för SLU:s uppdrag inom hållbar utveckling",
  featureCard2Title: "Projektledning",
  featureCard2Description: "Erfarna roller för alla projektfaser",
  featureCard3Title: "Förvaltning",
  featureCard3Description: "Långsiktig hantering efter leverans",
  
  // Text Editor
  textEditorTitle: "Redigera speltexter",
  textEditorDescription: "Här kan du anpassa alla texter som visas i spelet",
  saveChangesButton: "Spara ändringar",
  resetToDefaultButton: "Återställ till standard",
  addOptionButton: "Lägg till svarsalternativ",
  addScenarioButton: "Lägg till scenario",
  removeOptionButton: "Ta bort",
  removeScenarioButton: "Ta bort scenario",
  
  // FAQ
  faq1Question: "När kontaktar jag projektkontoret?",
  faq1Answer: "Kontakta oss tidigt när du har en projektidé eller behöver stöd med IT-relaterade förändringar. Vi hjälper dig att välja rätt form (projekt, uppdrag eller förstudie) och säkerställer att mål och nytta blir tydliga från start.",
  faq2Question: "Vilka roller kan ni bemanna?",
  faq2Answer: "Vi kan tillhandahålla projektledare, förvaltningsledare, testledare och kravanalytiker. Alla roller arbetar enligt SLU:s etablerade metoder och har erfarenhet av att arbeta nära verksamheten för att säkerställa bästa resultat.",
  faq3Question: "Vad händer efter projektet?",
  faq3Answer: "Vi säkerställer en kontrollerad överlämning till förvaltning. En förvaltningsledare tar ansvar för den långsiktiga hanteringen, upprätthåller systemet och följer upp att de avsedda effektmålen uppnås över tid.",
  faq4Question: "Vad är SLU:s projektmodell?",
  faq4Answer: "SLU:s projektmodell består av fyra huvudfaser: initiering, planering, genomförande och avslut. Varje fas har tydliga milstolpar och kvalitetskriterier som säkerställer strukturerat arbete mot uppsatta mål.",
  faq5Question: "Hur fungerar IT-portföljen?",
  faq5Answer: "Projektkontoret upprätthåller och följer upp SLU:s IT-portfölj som inkluderar pågående förvaltning, projekt, program, uppdrag och förstudier. Detta ger en helhetsbild och säkerställer rätt prioritering av resurser.",
  
  // Links
  readMoreAboutProjectOffice: "Läs mer om projektkontoret",
  
  // Common
  closeButton: "Stäng",
  backButton: "Tillbaka",
  
  // Scenarios
  scenarios: defaultScenarios,
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