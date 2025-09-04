import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scenario, ScenarioOption } from "@/types/game";
import { CheckCircle, XCircle, User, Settings, Activity } from "lucide-react";

interface ScenarioCardProps {
  scenario: Scenario;
  onOptionSelect: (optionId: number) => void;
  showResult?: boolean;
  selectedOptionId?: number;
  isCorrect?: boolean;
}

export const ScenarioCard = ({ 
  scenario, 
  onOptionSelect, 
  showResult = false,
  selectedOptionId,
  isCorrect
}: ScenarioCardProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleOptionClick = (optionId: number) => {
    if (showResult) return;
    setSelectedOption(optionId);
    onOptionSelect(optionId);
  };

  const getOptionIcon = (option: ScenarioOption) => {
    switch (option.type) {
      case 'role':
        return <User className="w-4 h-4" />;
      case 'system':
        return <Settings className="w-4 h-4" />;
      case 'action':
        return <Activity className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getOptionVariant = (option: ScenarioOption) => {
    if (option.type === 'role') return 'role';
    if (option.type === 'system') return 'outline';
    return 'game';
  };

  return (
    <Card className="w-full shadow-card animate-slide-up">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge variant="secondary">{scenario.title}</Badge>
        </div>
        <CardTitle className="text-xl">{scenario.description}</CardTitle>
        <CardDescription className="text-base">
          <div className="bg-muted/50 rounded-lg p-4 mt-4">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
                <User className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">{scenario.npc.name}:</p>
                <p className="italic mt-1">&quot;{scenario.npc.message}&quot;</p>
              </div>
            </div>
          </div>
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground mb-4">
            Vad är bästa sättet att hjälpa till?
          </p>
          
          {scenario.options.map((option) => {
            const isSelected = selectedOption === option.id || selectedOptionId === option.id;
            const isCorrectOption = option.id === scenario.correctOptionId;
            
            let buttonState: 'default' | 'correct' | 'incorrect' = 'default';
            if (showResult && isSelected) {
              buttonState = isCorrect ? 'correct' : 'incorrect';
            } else if (showResult && isCorrectOption && !isSelected) {
              buttonState = 'correct';
            }
            
            return (
              <div key={option.id} className="relative">
                <Button
                  variant={getOptionVariant(option)}
                  className={`w-full justify-start text-left h-auto p-4 relative transition-all ${
                    buttonState === 'correct' ? 'ring-2 ring-success bg-success/10' :
                    buttonState === 'incorrect' ? 'ring-2 ring-destructive bg-destructive/10' :
                    isSelected ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => handleOptionClick(option.id)}
                  disabled={showResult}
                >
                  <div className="flex items-center gap-3 w-full">
                    {getOptionIcon(option)}
                    <div className="flex-1 text-left">
                      <div className="font-medium">{option.text}</div>
                      {option.description && (
                        <div className="text-xs opacity-75 mt-1">{option.description}</div>
                      )}
                    </div>
                    {showResult && (
                      <div className="flex-shrink-0">
                        {buttonState === 'correct' && <CheckCircle className="w-5 h-5 text-success" />}
                        {buttonState === 'incorrect' && <XCircle className="w-5 h-5 text-destructive" />}
                      </div>
                    )}
                  </div>
                </Button>
              </div>
            );
          })}
        </div>
        
        {showResult && (
          <div className={`mt-6 p-4 rounded-lg animate-fade-in ${
            isCorrect ? 'bg-success/10 border border-success/20' : 'bg-warning/10 border border-warning/20'
          }`}>
            <div className="flex items-start gap-3">
              {isCorrect ? (
                <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
              )}
              <div>
                <p className="font-medium text-sm mb-2">
                  {isCorrect ? scenario.feedback.correct : scenario.feedback.incorrect}
                </p>
                <p className="text-xs text-muted-foreground">
                  <strong>Lärpunkt:</strong> {scenario.learningPoint}
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};