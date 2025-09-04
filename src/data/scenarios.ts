import { Scenario } from '@/types/game';

export const scenarios: Scenario[] = [
  {
    id: 1,
    title: "Idé → Uppdrag (Intag)",
    description: "En institutionschef har en idé och behöver vägledning",
    npc: {
      name: "Institutionschef",
      message: "Vi behöver ett nytt ärendeflöde för våra handläggare – vad är rätt väg framåt?"
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
    title: "Planera projektet enligt SLU:s arbetssätt",
    description: "Strukturera projektarbetet enligt etablerade metoder",
    npc: {
      name: "Verksamhetschef",
      message: "Vi har godkänt projektet - hur strukturerar vi arbetet enligt SLU:s projektmodell?"
    },
    options: [
      { id: 1, text: "Projektledare", type: 'role', description: "Leder projektarbetet enligt SLU:s metodik" },
      { id: 2, text: "Börja direkt med leverans", type: 'action', description: "Hoppa över planeringsfasen" },
      { id: 3, text: "Kravanalytiker", type: 'role', description: "Fokusera på kravhantering först" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Korrekt! Projektledaren strukturerar arbetet i faser (initiering, plan, genomförande, avslut) och rapporterar till styrgrupp.",
      incorrect: "Nästan! En projektledare behövs för att strukturera arbetet enligt SLU:s projektmodell med rätt milstolpar."
    },
    learningPoint: "Projektledaren leder mot tid, kostnad och resultat enligt SLU:s projektmetodik."
  },
  {
    id: 3,
    title: "Krav och användbarhet",
    description: "Säkerställ att lösningen möter verksamhetens behov",
    npc: {
      name: "Systemförvaltare",
      message: "Vi behöver förstå exakt vad användarna behöver för att bygga rätt lösning från början."
    },
    options: [
      { id: 1, text: "Kravanalytiker", type: 'role', description: "Samlar in och kvalitetssäkrar krav" },
      { id: 2, text: "Testledare", type: 'role', description: "Planerar testaktiviteter" },
      { id: 3, text: "Utveckla direkt", type: 'action', description: "Börja koda baserat på antaganden" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Rätt! Kravanalytikern säkerställer att verksamhetsbehov fångas upp och blir spårbara från behov till leverans.",
      incorrect: "Nästan! En kravanalytiker behövs för att samla in behov och säkerställa användbarhet och verksamhetsnytta."
    },
    learningPoint: "Fokus på verksamhetsbehov och spårbarhet från behov till leverans."
  },
  {
    id: 4,
    title: "Test och kvalitet",
    description: "Säkerställ kvalitet innan driftsättning",
    npc: {
      name: "IT-arkitekt",
      message: "Vi måste vara säkra på att systemet fungerar korrekt innan vi lanserar det till alla användare."
    },
    options: [
      { id: 1, text: "Testledare", type: 'role', description: "Planerar och koordinerar testaktiviteter" },
      { id: 2, text: "Lansera direkt", type: 'action', description: "Testa i produktion" },
      { id: 3, text: "Projektledare", type: 'role', description: "Hantera projektledning" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Korrekt! Testledaren planerar testfall, koordinerar testare och säkerställer kvalitet före driftsättning.",
      incorrect: "Nästan! En testledare behövs för att planera test och definiera acceptanskriterier med rätt användare."
    },
    learningPoint: "Testplan, kvalitetskriterier och involvering av rätta användare."
  },
  {
    id: 5,
    title: "Inköp & fakturor (Proceedo)",
    description: "Hantera inköp enligt SLU:s rutiner",
    npc: {
      name: "Ekonomiadministratör",
      message: "Vi behöver ny mjukvara till projektet - får jag beställa direkt eller ska det gå via Proceedo?"
    },
    options: [
      { id: 1, text: "Beställ i Proceedo", type: 'system', description: "Följ SLU:s inköpsrutiner" },
      { id: 2, text: "Köp direkt", type: 'action', description: "Gör direktköp utan system" },
      { id: 3, text: "Vänta på godkännande", type: 'action', description: "Skjut upp beslutet" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Rätt! Beställningar ska göras i Proceedo så vi följer avtal och får rätt attestflöde.",
      incorrect: "Nästan! För inköp använder vi Proceedo för att följa ramavtal och LOU-regler. Prova att klicka där först."
    },
    learningPoint: "Beställningar och leverantörsfakturor hanteras i Proceedo för att följa avtal."
  },
  {
    id: 6,
    title: "Tid & ekonomi (UBW)",
    description: "Registrera tid och följa upp ekonomi",
    npc: {
      name: "Projektmedarbetare",
      message: "Jag har arbetat med projektet hela veckan - var ska jag registrera mina arbetstimmar?"
    },
    options: [
      { id: 1, text: "Registrera tid i UBW", type: 'system', description: "SLU:s system för tidrapportering" },
      { id: 2, text: "Skicka mejl", type: 'action', description: "Informera projektledaren via mejl" },
      { id: 3, text: "Registrera i Primula", type: 'system', description: "Reseräkningssystemet" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Korrekt! UBW är master-ERP för tid och ekonomispårning på SLU.",
      incorrect: "Nästan! Arbetstid registreras i UBW som är SLU:s huvudsystem för tid och ekonomi."
    },
    learningPoint: "UBW är master-ERP för tid och ekonomispårning."
  },
  {
    id: 7,
    title: "Resor & kvitton (Primula)",
    description: "Hantera reseräkningar korrekt",
    npc: {
      name: "Forskningshandläggare",
      message: "Vi ska ha en workshop i Stockholm - hur gör vi med resor och kvitton efteråt?"
    },
    options: [
      { id: 1, text: "Reseräkning i Primula", type: 'system', description: "SLU:s system för reseräkningar" },
      { id: 2, text: "Registrera i UBW", type: 'system', description: "Tid- och ekonomisystemet" },
      { id: 3, text: "Skicka kvitton via mejl", type: 'action', description: "Mejla ekonomiavdelningen" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Korrekt! Reseräkningar hanteras i Primula. Spara kvitton digitalt och bifoga i ärendet.",
      incorrect: "Nästan! Primula används för reseräkningar och ersättningar. Där hanteras alla kvitton digitalt."
    },
    learningPoint: "Reseräkningar och ersättningar hanteras digitalt i Primula."
  },
  {
    id: 8,
    title: "Diarieföring & beslut (Public 360)",
    description: "Dokumentera viktiga beslut korrekt",
    npc: {
      name: "Styrgruppsledamot",
      message: "Vi har fattat viktiga beslut i styrgruppen - hur säkerställer vi att protokollet blir spårbart?"
    },
    options: [
      { id: 1, text: "Diarieför i Public 360", type: 'system', description: "SLU:s ärendehanteringssystem" },
      { id: 2, text: "Spara lokalt", type: 'action', description: "Förvara på projektområdet" },
      { id: 3, text: "Mejla till alla", type: 'action', description: "Skicka protokollet via mejl" }
    ],
    correctOptionId: 1,
    feedback: {
      correct: "Bra! Diarieför styrgruppsprotokoll i Public 360 så blir beslut spårbara och korrekt arkiverade.",
      incorrect: "Nästan! Public 360 används för diarieföring av protokoll och beslut för att säkerställa spårbarhet."
    },
    learningPoint: "Beslut och protokoll diarieförs i Public 360 för spårbarhet."
  }
];