import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Users } from "lucide-react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/team-activity")({ component: TeamActivity });

const activity = [
  ["John", "completed", "Design Review", "2h ago"],
  ["Sarah", "added", "New Task: Sprint Planning", "3h ago"],
  ["Mike", "commented on", "Sprint Plan", "5h ago"],
  ["Lisa", "assigned", "Bug Fix to you", "Yesterday"],
  ["Tom", "completed", "User Research", "Yesterday"],
];

function TeamActivity() {
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/profile"><ArrowLeft size={20} /></Link><Users size={20} className="text-primary" /><div className="text-xl font-bold">Team Activity</div></div>
        <div className="space-y-2 mt-6">
          {activity.map(([who, act, what, when], i) => (
            <div key={i} className="flex gap-3 px-3 py-3 bg-secondary rounded-xl">
              <div className="w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">{who[0]}</div>
              <div className="text-sm">
                <span className="font-semibold">{who}</span> {act} <span className="text-primary">{what}</span>
                <div className="text-xs text-muted-foreground mt-0.5">{when}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
