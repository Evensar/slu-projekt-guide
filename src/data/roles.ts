import { Role, SystemInfo } from '@/types/game';

export const roles: Role[] = [
  {
    id: 'projektledare',
    name: 'Projektledare',
    description: 'Planerar och leder projekt enligt SLU:s arbetssätt. Håller ihop tid, kostnad och resultat och rapporterar till styrgrupp.',
    responsibilities: [
      'Planerar projektets genomförande',
      'Koordinerar team och resurser', 
      'Rapporterar till styrgrupp',
      'Ansvarar för tid, kostnad och resultat',
      'Hanterar risker och milstolpar'
    ],
    tooltip: 'Projektledaren använder plan, riskanalys, milstolpar och uppföljning. Kvalitetssäkrande certifieringar som IPMA/PMI kan förekomma.'
  },
  {
    id: 'forvaltningsledare',
    name: 'Förvaltningsledare', 
    description: 'Säkerställer förvaltning och nytta efter leverans. Tar emot, prioriterar och planerar förändringar.',
    responsibilities: [
      'Leder IT-förvaltning',
      'Säkerställer systemlivscykel',
      'Hanterar budget och ändringar',
      'Tar emot levererat resultat',
      'Följer upp effektmål'
    ],
    tooltip: 'Ansvarar för att levererat resultat tas om hand och att förvaltning bedrivs effektivt enligt SLU:s förvaltningsmodell.'
  },
  {
    id: 'testledare',
    name: 'Testledare',
    description: 'Planerar test, samordnar testare och följer upp kvalitet före driftsättning.',
    responsibilities: [
      'Planerar testaktiviteter',
      'Definierar testfall',
      'Koordinerar testare',
      'Följer upp kvalitet',
      'Säkerställer acceptanskriterier'
    ],
    tooltip: 'Skapar testplan, definierar acceptanskriterier och involverar rätt användare för kvalitetssäkring.'
  },
  {
    id: 'kravanalytiker',
    name: 'Kravanalytiker',
    description: 'Fångar behov, formulerar krav och ser till att lösningen blir användbar.',
    responsibilities: [
      'Samlar in verksamhetsbehov',
      'Prioriterar och kvalitetssäkrar krav',
      'Säkerställer användbarhet',
      'Formulerar user stories',
      'Säkerställer spårbarhet'
    ],
    tooltip: 'Fokuserar på verksamhetsbehov och säkerställer spårbarhet från behov till leverans samt användbarhetsdesign.'
  }
];

export const systems: SystemInfo[] = [
  {
    id: 'primula',
    name: 'Primula',
    description: 'SLU:s system för reseräkningar och ersättningar',
    purpose: 'Digital hantering av resor, kvitton och utlägg'
  },
  {
    id: 'proceedo', 
    name: 'Proceedo',
    description: 'SLU:s system för beställningar och leverantörsfakturor',
    purpose: 'Säkerställer att inköp följer avtal och LOU-regler'
  },
  {
    id: 'ubw',
    name: 'UBW (Unit4 ERP)',
    description: 'SLU:s huvudsystem för ekonomi och tidrapportering', 
    purpose: 'Master-ERP för tid- och ekonomispårning'
  },
  {
    id: 'public360',
    name: 'Public 360',
    description: 'SLU:s system för ärende- och informationshantering',
    purpose: 'Diarieföring av protokoll, beslut och ärendehantering'
  },
  {
    id: 'ladok',
    name: 'Ladok',
    description: 'Nationellt system för studieadministration',
    purpose: 'Hanterar studentuppgifter och kan vara intressent i projekt'
  }
];