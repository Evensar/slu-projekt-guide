import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, Users, Target } from "lucide-react";

interface GameStartProps {
  onStartGame: () => void;
}

export const GameStart = ({ onStartGame }: GameStartProps) => {
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        {/* Hero Section */}
        <Card className="text-center shadow-card animate-fade-in">
          <CardHeader className="pb-4">
            <div className="mb-4">
              <Badge variant="outline" className="mb-4 animate-bounce-in">
                SLU Projektkontor
              </Badge>
            </div>
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Så stöttar vi dina projekt
            </CardTitle>
            <CardDescription className="text-lg max-w-2xl mx-auto mt-4">
              Välkommen! Projektkontoret på SLU hjälper dig att nå mål med struktur, metodik och kvalitet. 
              Klara scenarierna och upptäck vilket stöd du kan få.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center space-y-2">
                <div className="bg-primary/10 rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium">Utbildning & Forskning</h3>
                <p className="text-sm text-muted-foreground">
                  Stöd för SLU:s uppdrag inom hållbar utveckling
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-accent/10 rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-medium">Projektledning</h3>
                <p className="text-sm text-muted-foreground">
                  Erfarna roller för alla projektfaser
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="bg-success/10 rounded-full p-3 w-12 h-12 mx-auto flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-success" />
                </div>
                <h3 className="font-medium">Förvaltning</h3>
                <p className="text-sm text-muted-foreground">
                  Långsiktig hantering efter leverans
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
              Starta spelet (5-10 min)
            </Button>
          </CardContent>
        </Card>

        {/* Learning Goals */}
        <Card className="animate-slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Om spelet
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3">Efter spelet kommer du att:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Känna till projektkontorets uppdrag och erbjudanden
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Förstå när man kontaktar projektkontoret och vilken roll som hjälper
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Se exempel på samarbete genom projektlivscykeln
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    Veta att SLU har etablerade arbetssätt och portföljhantering
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium mb-3">Så fungerar spelet:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    8 korta scenarier från vardagliga situationer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Klicka på rätt stöd för varje scenario
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Få omedelbar återkoppling och lärpunkter
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    Sammanfattning av vad du lärt dig
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};