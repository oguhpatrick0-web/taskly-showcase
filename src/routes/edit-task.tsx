import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import { AppShell } from "@/components/AppShell";
import { useApp, type Priority } from "@/store";
import { z } from "zod";

export const Route = createFileRoute("/edit-task")({
  validateSearch: z.object({ id: z.string() }),
  component: Edit,
});

function Edit() {
  const { id } = Route.useSearch();
  const navigate = useNavigate();
  const { tasks, updateTask, categories } = useApp();
  const task = tasks.find((t) => t.id === id);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [category, setCategory] = useState("Work");

  useEffect(() => {
    if (task) {
      setTitle(task.title); setDesc(task.description || ""); setDate(task.date || "");
      setPriority(task.priority); setCategory(task.category);
    }
  }, [task]);

  if (!task) return <AppShell><div className="p-5">Not found</div></AppShell>;

  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/task-details" search={{ id }}><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Edit Task</div></div>
        <form onSubmit={(e) => { e.preventDefault(); updateTask(id, { title, description: desc, date, priority, category }); navigate({ to: "/task-details", search: { id } }); }} className="mt-6 space-y-3">
          <input value={title} onChange={(e) => setTitle(e.target.value)} className="w-full px-3 py-3 border border-primary rounded-xl text-sm outline-none" />
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} rows={4} className="w-full px-3 py-3 border border-primary rounded-xl text-sm outline-none resize-none" />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none" />
          <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)} className="w-full px-3 py-3 border border-border rounded-xl text-sm bg-background">
            <option>Low</option><option>Medium</option><option>High</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-3 border border-border rounded-xl text-sm bg-background">
            {categories.map((c) => <option key={c.name}>{c.name}</option>)}
          </select>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold mt-2">Update Task</button>
        </form>
      </div>
    </AppShell>
  );
}
