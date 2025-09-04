import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export const GameFAQ = () => {
  const faqs = [
    {
      id: "when-contact",
      question: "När kontaktar jag projektkontoret?",
      answer: "Kontakta oss tidigt när du har en projektidé eller behöver stöd med IT-relaterade förändringar. Vi hjälper dig att välja rätt form (projekt, uppdrag eller förstudie) och säkerställer att mål och nytta blir tydliga från start."
    },
    {
      id: "which-roles",
      question: "Vilka roller kan ni bemanna?",
      answer: "Vi kan tillhandahålla projektledare, förvaltningsledare, testledare och kravanalytiker. Alla roller arbetar enligt SLU:s etablerade metoder och har erfarenhet av att arbeta nära verksamheten för att säkerställa bästa resultat."
    },
    {
      id: "after-project",
      question: "Vad händer efter projektet?",
      answer: "Vi säkerställer en kontrollerad överlämning till förvaltning. En förvaltningsledare tar ansvar för den långsiktiga hanteringen, upprätthåller systemet och följer upp att de avsedda effektmålen uppnås över tid."
    },
    {
      id: "project-model",
      question: "Vad är SLU:s projektmodell?",
      answer: "SLU:s projektmodell består av fyra huvudfaser: initiering, planering, genomförande och avslut. Varje fas har tydliga milstolpar och kvalitetskriterier som säkerställer strukturerat arbete mot uppsatta mål."
    },
    {
      id: "portfolio-management",
      question: "Hur fungerar IT-portföljen?",
      answer: "Projektkontoret upprätthåller och följer upp SLU:s IT-portfölj som inkluderar pågående förvaltning, projekt, program, uppdrag och förstudier. Detta ger en helhetsbild och säkerställer rätt prioritering av resurser."
    }
  ];

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          Frågor & svar
        </CardTitle>
        <CardDescription>
          Vanliga frågor om projektkontorets stöd och arbetssätt
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};