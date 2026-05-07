import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Search } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";

export const Route = createFileRoute("/search")({ component: SearchScreen });

function SearchScreen() {
  const { tasks } = useApp();
  const [q, setQ] = useState("");
  const results = q ? tasks.filter((t) => t.title.toLowerCase().includes(q.toLowerCase())) : [];
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/tasks"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Search</div></div>
        <div className="flex items-center gap-2 mt-4 px-3 py-3 bg-secondary rounded-xl">
          <Search size={16} />
          <input autoFocus value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search tasks, people, projects..." className="flex-1 bg-transparent text-sm outline-none" />
        </div>
        {q && (
          <>
            <div className="text-xs text-muted-foreground mt-6">Tasks · {results.length}</div>
            <div className="space-y-2 mt-2">
              {results.map((t) => (
                <Link key={t.id} to="/task-details" search={{ id: t.id }} className="block px-3 py-2 bg-secondary rounded-lg text-sm">{t.title}</Link>
              ))}
            </div>
          </>
        )}
      </div>
    </AppShell>
  );
}
