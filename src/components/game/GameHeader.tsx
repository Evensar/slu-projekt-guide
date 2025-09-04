import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { GameState } from "@/types/game";

interface GameHeaderProps {
  gameState: GameState;
}

export const GameHeader = ({ gameState }: GameHeaderProps) => {
  const progressPercentage = (gameState.completedScenarios.length / gameState.totalScenarios) * 100;
  
  return (
    <div className="w-full bg-card shadow-card rounded-lg p-6 mb-6 animate-fade-in">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Projektkontoret på SLU
          </h1>
          <p className="text-muted-foreground">
            Upptäck hur vi stöttar dina projekt
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex gap-2">
            <Badge variant="outline" className="animate-bounce-in">
              Scenario {gameState.currentScenario + 1} av {gameState.totalScenarios}
            </Badge>
            <Badge variant="outline" className="animate-bounce-in">
              Poäng: {gameState.score}
            </Badge>
          </div>
          
          <div className="w-full sm:w-40">
            <div className="flex justify-between text-xs text-muted-foreground mb-1">
              <span>Framsteg</span>
              <span>{Math.round(progressPercentage)}%</span>
            </div>
            <Progress 
              value={progressPercentage} 
              className="h-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};