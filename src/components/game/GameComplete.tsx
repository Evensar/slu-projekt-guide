import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GameResult } from "@/types/game";
import { Trophy, Clock, Target, Users, CheckCircle, RotateCcw, Mail } from "lucide-react";

interface GameCompleteProps {
  result: GameResult;
  onRestart: () => void;
}

export const GameComplete = ({ result, onRestart }: GameCompleteProps) => {
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-success";
    if (percentage >= 60) return "text-warning";
    return "text-muted-foreground";
  };

  const scorePercentage = Math.round((result.score / result.totalQuestions) * 100);

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="max-w-4xl w-full space-y-6">
        {/* Results Header */}
        <Card className="text-center shadow-card animate-fade-in">
          <CardHeader className="pb-4">
            <div className="mb-4">
              <div className="bg-gradient-warm rounded-full p-4 w-16 h-16 mx-auto flex items-center justify-center mb-4 animate-bounce-in">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <Badge variant="outline" className="mb-2">
                Spel klart!
              </Badge>
            </div>
            <CardTitle className="text-3xl font-bold">
              Fantastiskt jobbat!
            </CardTitle>
            <CardDescription className="text-lg mt-2">
              Du har nu bättre koll på hur projektkontoret kan stötta dina projekt
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Score Summary */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="text-center animate-slide-up">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-1">
                {result.score}/{result.totalQuestions}
              </div>
              <p className="text-sm text-muted-foreground">Rätt svar</p>
            </CardContent>
          </Card>
          
          <Card className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardContent className="pt-6">
              <div className={`text-2xl font-bold mb-1 ${getScoreColor(scorePercentage)}`}>
                {scorePercentage}%
              </div>
              <p className="text-sm text-muted-foreground">Resultat</p>
            </CardContent>
          </Card>
          
          <Card className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-accent mb-1">
                {formatTime(result.timeSpent)}
              </div>
              <p className="text-sm text-muted-foreground">Total tid</p>
            </CardContent>
          </Card>
          
          <Card className="text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-success mb-1">
                {result.firstTryCorrect}
              </div>
              <p className="text-sm text-muted-foreground">Rätt första försöket</p>
            </CardContent>
          </Card>
        </div>

        {/* Learning Summary */}
        <Card className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              Vad du har lärt dig
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Roller du använde:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.rolesUsed.map((role, index) => (
                    <Badge key={index} variant="outline">
                      {role}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4 text-accent" />
                  System du lärde dig:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {result.systemsUsed.map((system, index) => (
                    <Badge key={index} variant="secondary">
                      {system}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
          <CardHeader>
            <CardTitle>Nästa steg</CardTitle>
            <CardDescription>
              Nu när du vet mer om projektkontorets stöd, här är hur du går vidare:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Kontakta projektkontoret
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Har du en projektidé eller behöver stöd? Ta kontakt för en första diskussion.
                </p>
                <Button variant="outline" size="sm">
                  Kontaktinformation
                </Button>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">Projektledning</h4>
                  <p className="text-sm text-muted-foreground">
                    Vi hjälper till med projektledare, planering och genomförande enligt SLU:s projektmodell.
                  </p>
                </div>
                
                <div className="p-4 bg-muted/50 rounded-lg">
                  <h4 className="font-medium mb-2">IT-förvaltning</h4>
                  <p className="text-sm text-muted-foreground">
                    Vi säkerställer långsiktig hantering och utveckling av IT-lösningar efter leverans.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button onClick={onRestart} variant="outline" className="flex items-center gap-2">
                <RotateCcw className="w-4 h-4" />
                Spela igen
              </Button>
              <Button variant="default" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Läs mer om projektkontoret
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};