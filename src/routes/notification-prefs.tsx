import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";
import { Toggle } from "@/components/Toggle";

export const Route = createFileRoute("/notification-prefs")({ component: NotifPrefs });

function NotifPrefs() {
  const s = useApp();
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/settings"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Notifications</div></div>
        <div className="space-y-2 mt-6">
          <Row label="Email" on={s.emailNotif} onChange={(v) => s.set({ emailNotif: v })} />
          <Row label="In-app" on={s.inAppNotif} onChange={(v) => s.set({ inAppNotif: v })} />
          <Row label="Team updates" on={s.teamUpdates} onChange={(v) => s.set({ teamUpdates: v })} />
          <Row label="Task reminders" on={s.notifEnabled} onChange={(v) => s.set({ notifEnabled: v })} />
        </div>
      </div>
    </AppShell>
  );
}
function Row({ label, on, onChange }: { label: string; on: boolean; onChange: (v: boolean) => void }) {
  return <div className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl"><span className="text-sm font-medium">{label}</span><Toggle on={on} onChange={onChange} /></div>;
}
