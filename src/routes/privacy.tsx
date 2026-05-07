import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";
import { Toggle } from "@/components/Toggle";

export const Route = createFileRoute("/privacy")({ component: Privacy });

function Privacy() {
  const s = useApp();
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/settings"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Privacy & Security</div></div>
        <div className="space-y-2 mt-6">
          <div className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl"><span className="text-sm font-medium">Two-factor auth</span><Toggle on={s.twoFA} onChange={(v) => s.set({ twoFA: v })} /></div>
          <div className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl"><span className="text-sm font-medium">Biometric login</span><Toggle on={s.biometric} onChange={(v) => s.set({ biometric: v })} /></div>
          {["Change password", "Active sessions", "Export my data", "Delete account"].map((l) => (
            <button key={l} className="w-full flex justify-between items-center px-3 py-3 bg-secondary rounded-xl"><span className="text-sm font-medium">{l}</span><ChevronRight size={16} /></button>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
