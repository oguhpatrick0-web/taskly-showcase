import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";

export const Route = createFileRoute("/lists")({ component: Lists });

function Lists() {
  const { categories, tasks } = useApp();
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/profile"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">My Lists</div></div>
        <div className="space-y-2 mt-6">
          {categories.map((c) => {
            const count = tasks.filter((t) => t.category === c.name).length;
            return (
              <div key={c.name} className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl">
                <div className="flex items-center gap-3"><div className={`w-3 h-3 rounded-full ${c.color}`} /><span className="text-sm font-medium">{c.name}</span></div>
                <span className="text-xs text-muted-foreground">{count} tasks</span>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
