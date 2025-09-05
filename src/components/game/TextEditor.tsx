import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { GameTexts, useGameTexts, defaultGameTexts } from "@/data/gameTexts";
import { Scenario, ScenarioOption } from "@/types/game";

interface TextEditorProps {
  onClose: () => void;
}

export const TextEditor = ({ onClose }: TextEditorProps) => {
  const { getTexts, saveTexts, resetTexts } = useGameTexts();
  const [texts, setTexts] = useState<GameTexts>(getTexts());
  const { toast } = useToast();

  const handleInputChange = (key: keyof GameTexts, value: string) => {
    setTexts(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    saveTexts(texts);
    toast({
      title: "Texter sparade!",
      description: "Alla ändringar har sparats och kommer att användas i spelet.",
    });
  };

  const handleReset = () => {
    setTexts(defaultGameTexts);
    resetTexts();
    toast({
      title: "Återställt!",
      description: "Alla texter har återställts till standardvärden.",
    });
  };

  const updateScenario = (scenarioIndex: number, updates: Partial<Scenario>) => {
    setTexts(prev => ({
      ...prev,
      scenarios: prev.scenarios.map((scenario, index) => 
        index === scenarioIndex ? { ...scenario, ...updates } : scenario
      )
    }));
  };

  const updateScenarioOption = (scenarioIndex: number, optionIndex: number, updates: Partial<ScenarioOption>) => {
    setTexts(prev => ({
      ...prev,
      scenarios: prev.scenarios.map((scenario, index) => 
        index === scenarioIndex ? {
          ...scenario,
          options: scenario.options.map((option, oIndex) => 
            oIndex === optionIndex ? { ...option, ...updates } : option
          )
        } : scenario
      )
    }));
  };

  const renderTextInput = (key: keyof GameTexts, label: string, multiline = false) => (
    <div className="space-y-2">
      <Label htmlFor={key}>{label}</Label>
      {multiline ? (
        <Textarea
          id={key}
          value={texts[key] as string}
          onChange={(e) => handleInputChange(key, e.target.value)}
          className="min-h-[80px]"
        />
      ) : (
        <Input
          id={key}
          value={texts[key] as string}
          onChange={(e) => handleInputChange(key, e.target.value)}
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Redigera speltexter</CardTitle>
            <p className="text-muted-foreground mt-2">
              Här kan du anpassa alla texter som visas i spelet, inklusive scenarier
            </p>
          </div>
          <Button variant="outline" onClick={onClose}>
            Stäng
          </Button>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="ui" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ui">Gränssnittstexter</TabsTrigger>
              <TabsTrigger value="scenarios">Scenarier</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ui" className="space-y-6 mt-6">
              {/* Header texts */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Huvudtitel</h3>
                <div className="grid gap-4">
                  {renderTextInput("gameTitle", "Speltitel")}
                  {renderTextInput("gameSubtitle", "Underrubrik")}
                </div>
              </div>

              <Separator />

              {/* Start screen */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Startskärm</h3>
                <div className="grid gap-4">
                  {renderTextInput("welcomeTitle", "Välkomstrubrik")}
                  {renderTextInput("welcomeDescription", "Välkomstbeskrivning", true)}
                  {renderTextInput("startGameButton", "Starta spel-knapp")}
                  {renderTextInput("aboutGameButton", "Om spelet-knapp")}
                  {renderTextInput("faqButton", "FAQ-knapp")}
                  {renderTextInput("textEditorButton", "Texteditor-knapp")}
                </div>
              </div>

              <Separator />

              {/* Game screen */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Spelskärm</h3>
                <div className="grid gap-4">
                  {renderTextInput("questionPrompt", "Frågeprompt")}
                  {renderTextInput("nextButton", "Nästa-knapp")}
                </div>
              </div>

              <Separator />

              {/* Scenario selector */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Scenariovalare</h3>
                <div className="grid gap-4">
                  {renderTextInput("scenarioSelectorTitle", "Titel")}
                  {renderTextInput("scenarioSelectorDescription", "Beskrivning", true)}
                  {renderTextInput("selectAllButton", "Välj alla-knapp")}
                  {renderTextInput("deselectAllButton", "Avmarkera alla-knapp")}
                  {renderTextInput("startSelectedButton", "Starta valda-knapp")}
                  {renderTextInput("selectedCountLabel", "Antal valda-text")}
                </div>
              </div>

              <Separator />

              {/* Completion screen */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Slutskärm</h3>
                <div className="grid gap-4">
                  {renderTextInput("completionTitle", "Slutrubrik")}
                  {renderTextInput("completionDescription", "Slutbeskrivning", true)}
                  {renderTextInput("scoreLabel", "Poängetikett")}
                  {renderTextInput("playAgainButton", "Spela igen-knapp")}
                </div>
              </div>

              <Separator />

              {/* FAQ */}
              <div>
                <h3 className="text-lg font-semibold mb-4">FAQ</h3>
                <div className="grid gap-4">
                  {renderTextInput("faqTitle", "FAQ-titel")}
                  {renderTextInput("faqDescription", "FAQ-beskrivning", true)}
                </div>
              </div>

              <Separator />

              {/* Common */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Gemensamma texter</h3>
                <div className="grid gap-4">
                  {renderTextInput("closeButton", "Stäng-knapp")}
                  {renderTextInput("backButton", "Tillbaka-knapp")}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-6">
                <Button onClick={handleSave} className="flex-1">
                  Spara ändringar
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  Återställ till standard
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="scenarios" className="space-y-6 mt-6">
              <div className="space-y-8">
                {texts.scenarios.map((scenario, scenarioIndex) => (
                  <Card key={scenario.id} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">Scenario {scenario.id}</Badge>
                        <CardTitle className="text-lg">{scenario.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Basic scenario info */}
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label>Titel</Label>
                          <Input
                            value={scenario.title}
                            onChange={(e) => updateScenario(scenarioIndex, { title: e.target.value })}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Beskrivning</Label>
                          <Textarea
                            value={scenario.description}
                            onChange={(e) => updateScenario(scenarioIndex, { description: e.target.value })}
                          />
                        </div>
                      </div>

                      <Separator />

                      {/* NPC */}
                      <div className="space-y-4">
                        <h4 className="font-medium">NPC (Rollperson)</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Namn</Label>
                            <Input
                              value={scenario.npc.name}
                              onChange={(e) => updateScenario(scenarioIndex, { 
                                npc: { ...scenario.npc, name: e.target.value } 
                              })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Meddelande</Label>
                            <Textarea
                              value={scenario.npc.message}
                              onChange={(e) => updateScenario(scenarioIndex, { 
                                npc: { ...scenario.npc, message: e.target.value } 
                              })}
                              className="min-h-[80px]"
                            />
                          </div>
                        </div>
                      </div>

                      <Separator />

                      {/* Options */}
                      <div className="space-y-4">
                        <h4 className="font-medium">Svarsalternativ</h4>
                        {scenario.options.map((option, optionIndex) => (
                          <div key={option.id} className="border rounded-lg p-4 space-y-3">
                            <div className="flex items-center gap-2">
                              <Badge variant={option.id === scenario.correctOptionId ? "default" : "secondary"}>
                                Alternativ {option.id} {option.id === scenario.correctOptionId && "(Rätt svar)"}
                              </Badge>
                            </div>
                            <div className="grid gap-3">
                              <div className="space-y-2">
                                <Label>Text</Label>
                                <Input
                                  value={option.text}
                                  onChange={(e) => updateScenarioOption(scenarioIndex, optionIndex, { text: e.target.value })}
                                />
                              </div>
                              {option.description && (
                                <div className="space-y-2">
                                  <Label>Beskrivning</Label>
                                  <Input
                                    value={option.description}
                                    onChange={(e) => updateScenarioOption(scenarioIndex, optionIndex, { description: e.target.value })}
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                      <Separator />

                      {/* Feedback */}
                      <div className="space-y-4">
                        <h4 className="font-medium">Återkoppling</h4>
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <Label>Rätt svar</Label>
                            <Textarea
                              value={scenario.feedback.correct}
                              onChange={(e) => updateScenario(scenarioIndex, { 
                                feedback: { ...scenario.feedback, correct: e.target.value } 
                              })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Fel svar</Label>
                            <Textarea
                              value={scenario.feedback.incorrect}
                              onChange={(e) => updateScenario(scenarioIndex, { 
                                feedback: { ...scenario.feedback, incorrect: e.target.value } 
                              })}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Lärpunkt</Label>
                            <Textarea
                              value={scenario.learningPoint}
                              onChange={(e) => updateScenario(scenarioIndex, { learningPoint: e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 pt-6">
                <Button onClick={handleSave} className="flex-1">
                  Spara ändringar
                </Button>
                <Button variant="outline" onClick={handleReset}>
                  Återställ till standard
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};