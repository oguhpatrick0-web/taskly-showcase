import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/onboarding")({ component: Onboarding });

function Onboarding() {
  return (
    <div className="min-h-screen bg-background flex flex-col px-6 pt-16 max-w-md mx-auto">
      <div className="text-center">
        <div className="text-3xl font-bold">Welcome to <span className="text-primary">Taskly</span></div>
        <div className="text-sm text-muted-foreground mt-2">Organise your tasks, stay productive!</div>
      </div>
      <div className="flex justify-center mt-12">
        <div className="w-56 h-56 rounded-full bg-accent flex items-center justify-center text-8xl">🧑‍💼</div>
      </div>
      <div className="mt-auto pb-10">
        <Link to="/login" className="block w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold text-center">Next</Link>
      </div>
    </div>
  );
}
