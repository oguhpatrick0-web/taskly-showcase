import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Bell } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";

export const Route = createFileRoute("/notifications")({ component: NotifScreen });

function NotifScreen() {
  const { notifications, clearNotifications } = useApp();
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3"><Link to="/dashboard"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Notifications</div></div>
          <button onClick={clearNotifications} className="text-xs text-primary">clear all</button>
        </div>
        <div className="space-y-2 mt-6">
          {notifications.length === 0 && <div className="text-sm text-muted-foreground text-center py-12">No notifications</div>}
          {notifications.map((n) => (
            <div key={n.id} className="flex gap-3 px-3 py-3 bg-secondary rounded-xl">
              <Bell size={18} className="text-primary mt-0.5" />
              <div>
                <div className="text-sm font-semibold">{n.title}</div>
                <div className="text-xs text-muted-foreground">{n.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
