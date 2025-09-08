import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Scenario } from "@/types/game";
import { useGameTexts } from "@/data/gameTexts";

interface ScenarioSelectorProps {
  onScenariosSelected: (selectedScenarios: Scenario[]) => void;
}

export const ScenarioSelector = ({ onScenariosSelected }: ScenarioSelectorProps) => {
  const { getTexts } = useGameTexts();
  const texts = getTexts();
  const scenarios = texts.scenarios;
  const [selectedScenarioIds, setSelectedScenarioIds] = useState<number[]>([]);

  const handleScenarioToggle = (scenarioId: number) => {
    setSelectedScenarioIds(prev => 
      prev.includes(scenarioId) 
        ? prev.filter(id => id !== scenarioId)
        : [...prev, scenarioId]
    );
  };

  const handleStartGame = () => {
    const selectedScenarios = scenarios.filter(scenario => 
      selectedScenarioIds.includes(scenario.id)
    );
    if (selectedScenarios.length > 0) {
      onScenariosSelected(selectedScenarios);
    }
  };

  const handleSelectAll = () => {
    if (selectedScenarioIds.length === scenarios.length) {
      setSelectedScenarioIds([]);
    } else {
      setSelectedScenarioIds(scenarios.map(s => s.id));
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-card">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">{texts.scenarioSelectorTitle}</CardTitle>
        <p className="text-muted-foreground">
          {texts.scenarioSelectorDescription}
        </p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <Button 
            variant="outline" 
            onClick={handleSelectAll}
            className="text-sm"
          >
            {selectedScenarioIds.length === scenarios.length ? texts.deselectAllButton : texts.selectAllButton}
          </Button>
          <span className="text-sm text-muted-foreground">
            {selectedScenarioIds.length} av {scenarios.length} {texts.selectedCountLabel}
          </span>
        </div>

        <div className="grid gap-3 max-h-96 overflow-y-auto">
          {scenarios.map((scenario) => (
            <div 
              key={scenario.id}
              className="flex items-start space-x-3 p-3 rounded-lg border hover:bg-muted/50 transition-colors"
            >
              <Checkbox
                id={`scenario-${scenario.id}`}
                checked={selectedScenarioIds.includes(scenario.id)}
                onCheckedChange={() => handleScenarioToggle(scenario.id)}
                className="mt-1"
              />
              <div className="flex-1 space-y-1">
                <label 
                  htmlFor={`scenario-${scenario.id}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                >
                  {scenario.title}
                </label>
                <p className="text-xs text-muted-foreground">
                  {scenario.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 pt-4">
          <Button 
            onClick={handleStartGame}
            disabled={selectedScenarioIds.length === 0}
            className="flex-1"
          >
            {texts.startSelectedButton} ({selectedScenarioIds.length} scenarier)
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};