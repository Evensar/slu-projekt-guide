import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GameStart } from "@/components/game/GameStart";
import { GameHeader } from "@/components/game/GameHeader";
import { ScenarioCard } from "@/components/game/ScenarioCard";
import { GameComplete } from "@/components/game/GameComplete";
import { RoleCard } from "@/components/game/RoleCard";
import { ScenarioSelector } from "@/components/game/ScenarioSelector";
import { GameFAQ } from "@/components/game/GameFAQ";
import { TextEditor } from "@/components/game/TextEditor";
import { Scenario } from "@/types/game";
import { useGameState } from "@/hooks/useGameState";
import { roles } from "@/data/roles";
import { useGameTexts } from "@/data/gameTexts";
import { Users, BookOpen, ChevronRight, Home, Settings, ArrowLeft } from "lucide-react";

type GameScreen = 'start' | 'select' | 'playing' | 'complete' | 'roles' | 'faq' | 'textEditor';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('start');
  const { getTexts } = useGameTexts();
  const texts = getTexts();
  const { 
    gameState, 
    currentAnswer, 
    startGame, 
    answerScenario, 
    nextScenario, 
    getGameResult, 
    resetGame,
    currentScenarioData 
  } = useGameState();

  const handleStartGame = () => {
    setCurrentScreen('select');
  };

  const handleScenariosSelected = (selectedScenarios: Scenario[]) => {
    startGame(selectedScenarios);
    setCurrentScreen('playing');
  };

  const handleAnswerScenario = (optionId: number) => {
    answerScenario(optionId);
  };

  const handleNextScenario = () => {
    if (gameState.currentScenario >= gameState.totalScenarios - 1) {
      setCurrentScreen('complete');
    } else {
      nextScenario();
    }
  };

  const handleRestart = () => {
    resetGame();
    setCurrentScreen('start');
  };

  const handleShowRoles = () => {
    setCurrentScreen('roles');
  };

  const handleShowFAQ = () => {
    setCurrentScreen('faq');
  };

  const handleShowTextEditor = () => {
    setCurrentScreen('textEditor');
  };

  const handleBackToStart = () => {
    setCurrentScreen('start');
  };

  if (currentScreen === 'start') {
    return (
      <div>
        <GameStart onStartGame={handleStartGame} />
        
        {/* Navigation Footer */}
        <div className="bg-background border-t border-border py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Text Editor */}
              <div className="space-y-4">
                <Button variant="ghost" size="sm" onClick={handleShowTextEditor} className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Redigera texter
                </Button>
              </div>
              
              {/* Right column - About section with links */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">{texts.learningGoalsTitle}</h3>
                <div className="space-y-2">
                  <a 
                    href="https://internt.slu.se/stod-service/admin-stod/it/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 underline block"
                  >
                    {texts.readMoreAboutProjectOffice}
                  </a>
                  <Button variant="outline" size="sm" onClick={handleShowRoles} className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Roller & stöd
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShowFAQ} className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Frågor & svar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'select') {
    return (
      <div className="min-h-screen bg-gradient-subtle p-4">
        <ScenarioSelector onScenariosSelected={handleScenariosSelected} />
      </div>
    );
  }

  if (currentScreen === 'complete') {
    return <GameComplete result={getGameResult()} onRestart={handleRestart} />;
  }

  if (currentScreen === 'roles') {
    return (
      <div className="min-h-screen bg-gradient-subtle p-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <Button variant="outline" onClick={handleBackToStart} className="mb-4">
              <Home className="w-4 h-4 mr-2" />
              Tillbaka till start
            </Button>
            <Card className="shadow-card">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Badge variant="outline" className="mb-4">
                    {texts.aboutGameTitle}
                  </Badge>
                  <h1 className="text-3xl font-bold mb-2">{texts.rolesTitle}</h1>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {texts.rolesDescription}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role) => (
              <RoleCard key={role.id} role={role} />
            ))}
          </div>

          <div className="mt-8">
            <GameFAQ />
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === 'faq') {
    return (
      <div className="min-h-screen bg-gradient-subtle p-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <Button variant="outline" onClick={handleBackToStart} className="mb-4">
              <Home className="w-4 h-4 mr-2" />
              Tillbaka till start
            </Button>
          </div>
          <GameFAQ />
        </div>
      </div>
    );
  }

  if (currentScreen === 'textEditor') {
    return <TextEditor onClose={handleBackToStart} />;
  }

  // Playing state
  return (
    <div className="min-h-screen bg-gradient-subtle p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <Button variant="outline" onClick={handleRestart} size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Tillbaka till start
          </Button>
        </div>
        <GameHeader gameState={gameState} />
        
        <div className="space-y-6">
          <ScenarioCard
            scenario={currentScenarioData}
            onOptionSelect={handleAnswerScenario}
            showResult={currentAnswer.showResult}
            selectedOptionId={currentAnswer.selectedOptionId || undefined}
            isCorrect={currentAnswer.isCorrect || undefined}
          />
          
          {currentAnswer.showResult && (
            <div className="text-center animate-fade-in">
              <Button 
                onClick={handleNextScenario}
                variant="warm"
                size="lg"
                className="min-w-[200px]"
              >
                {gameState.currentScenario >= gameState.totalScenarios - 1 ? (
                  <>Se resultat</>
                ) : (
                  <>
                    Nästa scenario
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
