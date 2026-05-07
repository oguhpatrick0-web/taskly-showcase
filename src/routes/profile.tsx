import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight, Settings as SettingsIcon } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";

export const Route = createFileRoute("/profile")({ component: Profile });

function Profile() {
  const { user, tasks } = useApp();
  const completed = tasks.filter((t) => t.completed).length;
  const pct = Math.round((completed / Math.max(tasks.length, 1)) * 100);
  const days = [40, 70, 55, 85, 30, 60, 75];
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Profile</div>
          <Link to="/settings"><SettingsIcon size={20} /></Link>
        </div>
        <div className="bg-primary rounded-2xl p-4 mt-4 flex items-center gap-3 text-white">
          <div className="w-14 h-14 rounded-full bg-white/30 flex items-center justify-center text-xl font-bold">{user.name[0]}</div>
          <div>
            <div className="text-base font-bold">{user.name}</div>
            <div className="text-xs opacity-80">{user.email}</div>
          </div>
        </div>
        <div className="text-sm font-semibold mt-6">Stats</div>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="bg-secondary rounded-xl p-3 text-center">
            <div className="text-xs text-muted-foreground">Tasks Completed</div>
            <div className="relative w-20 h-20 mx-auto mt-2">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(0 0% 90%)" strokeWidth="4" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="oklch(0.55 0.24 264)" strokeWidth="4" strokeDasharray="88" strokeDashoffset={88 - (88 * pct) / 100} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-sm font-bold">{pct}%</div>
            </div>
          </div>
          <div className="bg-secondary rounded-xl p-3">
            <div className="text-xs text-muted-foreground text-center">Days Active</div>
            <div className="flex items-end justify-around h-20 mt-2 gap-1">
              {days.map((h, i) => <div key={i} className="w-3 bg-primary rounded-t" style={{ height: `${h}%` }} />)}
            </div>
          </div>
        </div>
        <div className="space-y-2 mt-6">
          <LinkRow to="/lists" label="My Lists" />
          <LinkRow to="/team-activity" label="Team Activity" />
          <LinkRow to="/profile-edit" label="Edit Profile" />
          <LinkRow to="/privacy" label="Privacy & Security" />
          <LinkRow to="/help" label="Help & Support" />
        </div>
      </div>
    </AppShell>
  );
}

function LinkRow({ to, label }: { to: string; label: string }) {
  return <Link to={to} className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl"><span className="text-sm font-medium">{label}</span><ChevronRight size={16} /></Link>;
}
