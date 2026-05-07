import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { Check } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Splash,
});

function Splash() {
  const navigate = useNavigate();
  useEffect(() => {
    const t = setTimeout(() => navigate({ to: "/onboarding" }), 1800);
    return () => clearTimeout(t);
  }, [navigate]);
  return (
    <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-primary-foreground">
      <div className="w-20 h-20 rounded-3xl bg-white/15 flex items-center justify-center mb-4 backdrop-blur">
        <Check size={40} strokeWidth={3} />
      </div>
      <div className="text-4xl font-bold">Taskly</div>
      <div className="text-sm opacity-80 mt-2 tracking-widest">Organize · Plan · Achieve</div>
      <div className="absolute bottom-16 w-8 h-8 border-2 border-white/40 border-t-white rounded-full animate-spin" />
      <Link to="/onboarding" className="absolute bottom-4 text-xs text-white/60">Skip</Link>
    </div>
  );
}
