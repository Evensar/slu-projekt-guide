import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Users, Target, Settings } from "lucide-react";
import { useGameTexts } from "@/data/gameTexts";

interface GameStartProps {
  onStartGame: () => void;
  onShowRoles: () => void;
  onShowFAQ: () => void;
  onShowTextEditor: () => void;
}

export const GameStart = ({ onStartGame, onShowRoles, onShowFAQ, onShowTextEditor }: GameStartProps) => {
  const { getTexts } = useGameTexts();
  const texts = getTexts();
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        {/* Hero Section */}
        <Card className="text-center shadow-card animate-fade-in">
          <CardHeader className="pb-4">
            <div className="mb-4 flex flex-col items-center space-y-4">
              <img 
                src="/lovable-uploads/aae14649-330e-491c-8e2b-f916101eaffa.png" 
                alt="SLU logotyp"
                className="h-40 w-auto"
              />
              <Badge variant="outline" className="animate-bounce-in">
                {texts.gameTitle}
              </Badge>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              {texts.gameMainTitle}
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto mt-4">
              {texts.gameMainDescription}
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center space-y-2">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">{texts.featureCard1Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {texts.featureCard1Description}
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-accent/10 rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium">{texts.featureCard2Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {texts.featureCard2Description}
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-success/10 rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-medium">{texts.featureCard3Title}</h3>
                <p className="text-sm text-muted-foreground">
                  {texts.featureCard3Description}
                </p>
              </div>
            </div>
            
            <Button 
              size="lg"
              variant="warm"
              onClick={onStartGame}
              className="text-lg px-8 py-3 animate-bounce-in"
            >
              <Play className="w-5 h-5 mr-2" />
              {texts.startGameButtonText}
            </Button>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" size="sm" onClick={onShowRoles}>
            <Users className="w-4 h-4 mr-2" />
            Roller & stöd
          </Button>
          <Button variant="outline" size="sm" onClick={onShowFAQ}>
            <BookOpen className="w-4 h-4 mr-2" />
            Frågor & svar
          </Button>
          <Button asChild variant="outline" size="sm">
            <a 
              href="https://internt.slu.se/stod-service/admin-stod/it/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              {texts.readMoreAboutProjectOffice}
            </a>
          </Button>
        </div>

        {/* Learning Goals */}
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              {texts.learningGoalsTitle}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-medium mb-3">{texts.learningGoalsSubtitle}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {texts.learningGoal1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {texts.learningGoal2}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {texts.learningGoal3}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    {texts.learningGoal4}
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">{texts.howItWorksTitle}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {texts.howItWorks1}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {texts.howItWorks2}
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    {texts.howItWorks3}
                  </li>
                   <li className="flex items-start gap-2">
                     <span className="text-accent mt-1">•</span>
                     {texts.howItWorks4}
                   </li>
                 </ul>
               </div>
             </div>
             
             {/* Action buttons within the card */}
             <div className="mt-6 pt-6 border-t border-border">
               <div className="flex justify-center">
                 <Button variant="ghost" size="sm" onClick={onShowTextEditor}>
                   <Settings className="w-4 h-4 mr-2" />
                   Redigera texter
                 </Button>
               </div>
             </div>
           </CardContent>
         </Card>

      </div>
    </div>
  );
};