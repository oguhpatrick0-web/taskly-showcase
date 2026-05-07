import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Calendar as CalIcon, Check, Plus } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";

export const Route = createFileRoute("/dashboard")({ component: Dashboard });

function Dashboard() {
  const { user, tasks, toggleTask } = useApp();
  const today = tasks.slice(0, 5);
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">Hello, {user.name.split(" ")[0]}!</div>
          <Link to="/notifications"><Bell size={20} /></Link>
        </div>
        <div className="text-sm font-semibold mt-6 mb-2">Today's Tasks</div>
        <div className="space-y-2">
          {today.map((t) => (
            <div key={t.id} className="flex items-center gap-3 bg-secondary rounded-xl px-3 py-3">
              <button onClick={() => toggleTask(t.id)} className={`w-5 h-5 rounded border-2 flex items-center justify-center ${t.completed ? "bg-primary border-primary" : "border-primary"}`}>
                {t.completed && <Check size={12} className="text-white" />}
              </button>
              <Link to="/task-details" search={{ id: t.id }} className={`text-sm flex-1 ${t.completed ? "line-through text-muted-foreground" : ""}`}>{t.title}</Link>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-accent rounded-xl p-3 flex items-center gap-3">
          <CalIcon size={22} className="text-primary" />
          <div>
            <div className="text-sm font-semibold">Team meeting</div>
            <div className="text-xs text-muted-foreground">Tomorrow 9:00 PM</div>
          </div>
        </div>
      </div>
      <Link to="/add-task" className="fixed bottom-24 right-1/2 translate-x-[180px] w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl">
        <Plus size={26} />
      </Link>
    </AppShell>
  );
}
