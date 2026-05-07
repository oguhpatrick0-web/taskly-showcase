import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";
import { Toggle } from "@/components/Toggle";

export const Route = createFileRoute("/settings")({ component: Settings });

function Settings() {
  const { theme, setTheme, notifEnabled, set } = useApp();
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="text-xl font-bold">Settings</div>
        <div className="space-y-2 mt-6">
          <div className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl">
            <span className="text-sm font-medium">Theme</span>
            <div className="flex gap-1 bg-background rounded-lg p-1">
              <button onClick={() => setTheme("light")} className={`px-2 py-1 text-xs rounded ${theme === "light" ? "bg-primary text-white" : ""}`}>Light</button>
              <button onClick={() => setTheme("dark")} className={`px-2 py-1 text-xs rounded ${theme === "dark" ? "bg-primary text-white" : ""}`}>Dark</button>
            </div>
          </div>
          <Row label="Notifications" right={<Toggle on={notifEnabled} onChange={(v) => set({ notifEnabled: v })} />} />
          <LinkRow label="Notification Preferences" to="/notification-prefs" />
          <LinkRow label="Account" to="/profile-edit" />
          <LinkRow label="Security" to="/privacy" />
          <LinkRow label="Help & Support" to="/help" />
        </div>
      </div>
    </AppShell>
  );
}

function Row({ label, right }: { label: string; right: React.ReactNode }) {
  return <div className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl"><span className="text-sm font-medium">{label}</span>{right}</div>;
}
function LinkRow({ label, to }: { label: string; to: string }) {
  return <Link to={to} className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl"><span className="text-sm font-medium">{label}</span><ChevronRight size={16} /></Link>;
}
