import { ReactNode, useEffect } from "react";
import { NavBar } from "./NavBar";
import { useApp } from "@/store";

export function AppShell({ children, hideNav = false }: { children: ReactNode; hideNav?: boolean }) {
  const theme = useApp((s) => s.theme);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return (
    <div className="min-h-screen bg-secondary/40">
      <div className="max-w-md mx-auto min-h-screen bg-background text-foreground relative pb-20">
        {children}
      </div>
      {!hideNav && <NavBar />}
    </div>
  );
}
