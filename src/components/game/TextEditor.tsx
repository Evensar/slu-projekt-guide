import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { GameTexts, useGameTexts, defaultGameTexts } from "@/data/gameTexts";

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

  const renderTextInput = (key: keyof GameTexts, label: string, multiline = false) => (
    <div className="space-y-2">
      <Label htmlFor={key}>{label}</Label>
      {multiline ? (
        <Textarea
          id={key}
          value={texts[key]}
          onChange={(e) => handleInputChange(key, e.target.value)}
          className="min-h-[80px]"
        />
      ) : (
        <Input
          id={key}
          value={texts[key]}
          onChange={(e) => handleInputChange(key, e.target.value)}
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">Redigera speltexter</CardTitle>
            <p className="text-muted-foreground mt-2">
              Här kan du anpassa alla texter som visas i spelet
            </p>
          </div>
          <Button variant="outline" onClick={onClose}>
            Stäng
          </Button>
        </CardHeader>
        
        <CardContent className="space-y-6">
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
        </CardContent>
      </Card>
    </div>
  );
};