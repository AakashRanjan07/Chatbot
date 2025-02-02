import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

interface ChatMessageProps {
  message: {
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
  };
}

export function ChatMessage({ message }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "flex gap-4",
        message.role === "user" ? "flex-row-reverse" : "flex-row"
      )}
    >
      <Avatar>
        <AvatarFallback>
          {message.role === "user" ? "U" : "AI"}
        </AvatarFallback>
      </Avatar>
      <Card className={cn(
        "max-w-[80%]",
        message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
      )}>
        <CardContent className="p-4">
          <div className="mb-1 text-sm">
            {format(message.timestamp, "HH:mm")}
          </div>
          <div className="whitespace-pre-wrap">{message.content}</div>
        </CardContent>
      </Card>
    </div>
  );
}
