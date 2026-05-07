import { ReactNode } from "react";
import { NavBar } from "./NavBar";

export function AppShell({ children, hideNav = false }: { children: ReactNode; hideNav?: boolean }) {
  return (
    <div className="min-h-screen bg-secondary/40">
      <div className="max-w-md mx-auto min-h-screen bg-background relative pb-20">
        {children}
      </div>
      {!hideNav && <NavBar />}
    </div>
  );
}
