import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, Folder, Search } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";
import { useState } from "react";

export const Route = createFileRoute("/filter")({ component: FilterScreen });

function FilterScreen() {
  const { categories, tasks } = useApp();
  const [sort, setSort] = useState<"date" | "priority" | "category">("date");
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/tasks"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Filter & Sort</div></div>
        <div className="flex items-center gap-2 mt-4 px-3 py-2 bg-secondary rounded-lg"><Search size={14} /><span className="text-sm text-muted-foreground">Search</span></div>
        <div className="flex gap-2 mt-3">
          {(["date", "priority", "category"] as const).map((s) => (
            <button key={s} onClick={() => setSort(s)} className={`px-3 py-1 rounded-lg text-xs capitalize ${sort === s ? "bg-primary text-white" : "bg-secondary"}`}>By {s}</button>
          ))}
        </div>
        <div className="text-sm font-semibold mt-6">Categories</div>
        <div className="space-y-2 mt-2">
          {categories.map((c) => {
            const count = tasks.filter((t) => t.category === c.name).length;
            return (
              <div key={c.name} className="flex justify-between items-center px-3 py-3 bg-secondary rounded-xl">
                <div className="flex items-center gap-2"><Folder size={16} className="text-primary" /><span className="text-sm">{c.name}</span></div>
                <div className="flex items-center gap-2"><span className="text-xs text-muted-foreground">{count}</span><ChevronRight size={14} /></div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
