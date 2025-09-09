import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useGameTexts } from "@/data/gameTexts";

export const GameFAQ = () => {
  const { getTexts } = useGameTexts();
  const texts = getTexts();
  
  const faqs = [
    {
      id: "when-contact",
      question: texts.faq1Question,
      answer: texts.faq1Answer
    },
    {
      id: "which-roles",
      question: texts.faq2Question,
      answer: texts.faq2Answer
    },
    {
      id: "after-project",
      question: texts.faq3Question,
      answer: texts.faq3Answer
    },
    {
      id: "project-model",
      question: texts.faq4Question,
      answer: texts.faq4Answer
    },
    {
      id: "portfolio-management",
      question: texts.faq5Question,
      answer: texts.faq5Answer
    }
  ];

  return (
    <Card className="w-full shadow-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-primary" />
          {texts.faqTitle}
        </CardTitle>
        <CardDescription>
          {texts.faqDescription}
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