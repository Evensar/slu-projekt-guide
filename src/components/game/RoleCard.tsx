import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Role } from "@/types/game";
import { User } from "lucide-react";

interface RoleCardProps {
  role: Role;
}

export const RoleCard = ({ role }: RoleCardProps) => {
  return (
    <Card className="h-full shadow-card hover:shadow-glow transition-smooth">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <div className="bg-primary/10 rounded-full p-2">
            <User className="w-4 h-4 text-primary" />
          </div>
          <Badge variant="outline">Roll</Badge>
        </div>
        <CardTitle className="text-lg">{role.name}</CardTitle>
        <CardDescription>{role.description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-foreground">Ansvarsområden:</h4>
          <ul className="space-y-1">
            {role.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                {responsibility}
              </li>
            ))}
          </ul>
          
          <div className="mt-4 p-3 bg-muted/50 rounded-lg">
            <p className="text-xs text-muted-foreground">
              <strong>Tips:</strong> {role.tooltip}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};