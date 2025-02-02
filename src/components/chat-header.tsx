import { ModeToggle } from "@/components/mode-toggle";
import { UserNav } from "@/components/user-nav";
import { Separator } from "@/components/ui/separator";

export function ChatHeader() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center px-4">
        <h1 className="text-xl font-semibold">Landing Page Generator</h1>
        <Separator orientation="vertical" className="mx-4 h-6" />
        <span className="text-sm text-muted-foreground">
          Generate beautiful landing pages with AI
        </span>
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </header>
  );
}
