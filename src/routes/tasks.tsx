import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Filter, Plus, Search } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";
import { useState } from "react";

export const Route = createFileRoute("/tasks")({ component: TasksList });

function TasksList() {
  const { tasks, toggleTask } = useApp();
  const [q, setQ] = useState("");
  const filtered = tasks.filter((t) => t.title.toLowerCase().includes(q.toLowerCase()));

  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Tasks</div>
          <div className="flex gap-3">
            <Link to="/filter"><Filter size={20} /></Link>
            <Link to="/search"><Search size={20} /></Link>
          </div>
        </div>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tasks..." className="w-full mt-4 px-3 py-2 bg-secondary rounded-lg text-sm outline-none" />
        <div className="space-y-2 mt-4">
          {filtered.map((t) => (
            <div key={t.id} className="flex items-center gap-3 bg-secondary rounded-xl px-3 py-3">
              <button onClick={() => toggleTask(t.id)} className={`w-5 h-5 rounded border-2 flex items-center justify-center ${t.completed ? "bg-primary border-primary" : "border-primary"}`}>
                {t.completed && <Check size={12} className="text-white" />}
              </button>
              <Link to="/task-details" search={{ id: t.id }} className={`text-sm flex-1 ${t.completed ? "line-through text-muted-foreground" : ""}`}>
                {t.title}
              </Link>
              <span className={`text-[10px] px-2 py-0.5 rounded-full ${t.priority === "High" ? "bg-danger/15 text-danger" : t.priority === "Medium" ? "bg-warning/15 text-warning" : "bg-success/15 text-success"}`}>{t.priority}</span>
            </div>
          ))}
        </div>
      </div>
      <Link to="/add-task" className="fixed bottom-24 right-1/2 translate-x-[180px] w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-xl">
        <Plus size={26} />
      </Link>
    </AppShell>
  );
}
