import { ModeToggle } from "@/components/mode-toggle";
// import { ThemeToggle } from "@/components/theme-toggle";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>

      <div className="hidden md:flex flex-col bg-muted p-8">
        <div className="flex justify-end">
          {/* <ThemeToggle />
       */}
       <ModeToggle/>
        </div>
        <div className="flex-1 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Landing Page Generator
          </h1>
          <p className="text-muted-foreground text-lg">
            Generate beautiful, responsive landing pages in seconds using AI.
            Perfect for MVPs, startups, and quick prototypes.
          </p>
        </div>
      </div>
    </div>
  );
}
