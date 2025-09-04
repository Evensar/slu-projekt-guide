import { Scenario } from '@/types/game';

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Idé → Uppdrag (Intag)",
    description: "En institutionschef har en idé och behöver vägledning",
    npc: {
      name: "Institutionschef",
      message: "Vi behöver ett nytt system för studenternas laborationsdata – vad är rätt väg framåt?"
    },
    options: [
      { id: 1, text: "Kontakta projektkontoret", type: 'action', description: "För behovsanalys och vägledning" },
      { id: 2, text: "Börja direkt med utveckling", type: 'action', description: "Starta arbetet omedelbart" },
      { id: 3, text: "Vänta på nästa budget", type: 'action', description: "Skjut upp beslutet" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Rätt! Projektkontoret hjälper att välja form (projekt, uppdrag eller förstudie) och säkrar mål och nytta.",
      incorrect: "Nästan! Kontakta projektkontoret först för behovsanalys och vägledning om rätt approach."
    },
    learningPoint: "Projektkontoret hjälper att välja rätt form och säkra uppdragets mål och nytta."
  },
  {
    id: 2,
    title: "Planera forskningsdataprojektet",
    description: "Strukturera ett komplext datahanterings-projekt för forskningsavdelningen",
    npc: {
      name: "Forskningschef",
      message: "Vi ska digitalisera hantering av fältdata från våra försök - hur planerar vi detta projekt?"
    },
    options: [
      { id: 1, text: "Projektledare", type: 'role', description: "Leder projektarbetet enligt SLU:s metodik" },
      { id: 2, text: "Börja direkt med leverans", type: 'action', description: "Hoppa över planeringsfasen" },
      { id: 3, text: "IT-tekniker", type: 'role', description: "Fokusera på teknisk implementation" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Korrekt! Projektledaren strukturerar arbetet i faser, samordnar alla roller och säkerställer leverans enligt plan.",
      incorrect: "Nästan! En projektledare behövs för att koordinera alla aspekter - från krav till leverans."
    },
    learningPoint: "Projektledaren säkerställer att alla roller samarbetar mot gemensamt mål enligt SLU:s projektmodell."
  },
  {
    id: 3,
    title: "Krav för studentportalen",
    description: "Förstå vad studenter och lärare verkligen behöver i det nya systemet",
    npc: {
      name: "Utbildningsledare",
      message: "Studenter klagar på nuvarande portal - vad behöver vi veta innan vi bygger en ny?"
    },
    options: [
      { id: 1, text: "Kravanalytiker", type: 'role', description: "Samlar in och analyserar användarbehov" },
      { id: 2, text: "Utvecklare", type: 'role', description: "Börjar koda nya funktioner" },
      { id: 3, text: "Projektledare", type: 'role', description: "Sätter upp projektplan" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Rätt! Kravanalytikern intervjuar studenter och lärare för att förstå riktiga behov innan utveckling.",
      incorrect: "Nästan! Först behöver vi förstå vad användarna verkligen behöver - kravanalytikern gör detta."
    },
    learningPoint: "Utan tydliga krav bygger vi fel sak - kravanalytikern säkerställer användarfokus."
  },
  {
    id: 4,
    title: "Testa forskningsapplikationen",
    description: "Säkerställ att systemet fungerar för forskares kritiska arbete",
    npc: {
      name: "Forskningsledare",
      message: "Denna app hanterar åratal av forskning - hur säkerställer vi att allt fungerar perfekt?"
    },
    options: [
      { id: 1, text: "Testledare", type: 'role', description: "Planerar och koordinerar alla testaktiviteter" },
      { id: 2, text: "Lansera direkt", type: 'action', description: "Testa med riktiga forskare" },
      { id: 3, text: "Kravanalytiker", type: 'role', description: "Analysera kraven igen" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Korrekt! Testledaren planerar systematisk testning med forskare och säkerställer kvalitet.",
      incorrect: "Nästan! Forskningsdata är kritisk - testledaren säkerställer grundlig testning innan lansering."
    },
    learningPoint: "Testledaren involverar riktiga användare och planerar olika typer av tester."
  },
  {
    id: 5,
    title: "Överlämning till förvaltning",
    description: "Säkerställ att systemet tas om hand efter projektets slut",
    npc: {
      name: "Verksamhetschef",
      message: "Projektet närmar sig slutet - vem ska ta över ansvaret för systemet framöver?"
    },
    options: [
      { id: 1, text: "Förvaltningsledare", type: 'role', description: "Tar över långsiktigt ansvar" },
      { id: 2, text: "Projektledare fortsätter", type: 'action', description: "Behåll projektorganisation" },
      { id: 3, text: "Utvecklarna", type: 'role', description: "De som byggt systemet" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Rätt! Förvaltningsledaren säkerställer drift, support och vidareutveckling efter projektet.",
      incorrect: "Nästan! Efter projektet behövs en förvaltningsledare för långsiktig ansvar och utveckling."
    },
    learningPoint: "Förvaltningsledaren säkerställer att projektets resultat lever vidare och utvecklas."
  },
  {
    id: 6,
    title: "Sammarbete mellan roller",
    description: "Koordinera arbetet mellan olika projektroller",
    npc: {
      name: "Projektledare",
      message: "Kravanalytikern och testledaren behöver samarbeta - hur strukturerar vi detta bäst?"
    },
    options: [
      { id: 1, text: "Skapa gemensamma möten", type: 'action', description: "Regelbunden avstämning mellan rollerna" },
      { id: 2, text: "Låt dem jobba separat", type: 'action', description: "Minimal koordinering" },
      { id: 3, text: "Vänta till slutet", type: 'action', description: "Koordinera först vid leverans" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Rätt! Krav och test måste samarbeta kontinuerligt för att säkerställa kvalitet.",
      incorrect: "Nästan! Testledaren behöver förstå kraven tidigt för att planera rätt tester."
    },
    learningPoint: "Framgångsrika projekt kräver nära samarbete mellan alla roller."
  },
  {
    id: 7,
    title: "Användarinvolvering i projekt",
    description: "Säkerställ att slutanvändarna är engagerade genom hela projektet",
    npc: {
      name: "Avdelningschef",
      message: "Våra medarbetare ska använda det nya systemet - hur involverar vi dem i projektet?"
    },
    options: [
      { id: 1, text: "Kravanalytiker + Testledare", type: 'role', description: "Båda rollerna involverar användare" },
      { id: 2, text: "Bara projektledaren", type: 'role', description: "Håll det enkelt" },
      { id: 3, text: "Vänta till slutet", type: 'action', description: "Visa färdig produkt" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Perfekt! Kravanalytikern samlar behov från användare och testledaren låter dem testa.",
      incorrect: "Nästan! Användarna behöver vara med från början - både i krav och test."
    },
    learningPoint: "Lyckat projekt = aktiva slutanvändare genom hela processen."
  },
  {
    id: 8,
    title: "Hantera förändringar under projekt",
    description: "Verksamheten vill ändra krav mitt i projektet",
    npc: {
      name: "Verksamhetsrepresentant",
      message: "Vi insåg att vi behöver ytterligare funktionalitet - kan vi lägga till detta nu?"
    },
    options: [
      { id: 1, text: "Projektledare + Kravanalytiker", type: 'role', description: "Bedöm påverkan tillsammans" },
      { id: 2, text: "Säg ja direkt", type: 'action', description: "Lägg till utan analys" },
      { id: 3, text: "Vänta till nästa projekt", type: 'action', description: "Ingen förändring nu" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Rätt! Projektledaren och kravanalytikern bedömer tillsammans påverkan på tid, kostnad och kvalitet.",
      incorrect: "Nästan! Förändringar behöver analyseras - projektledare och kravanalytiker gör detta tillsammans."
    },
    learningPoint: "Alla förändringar måste analyseras för påverkan på projektets mål."
  }
];