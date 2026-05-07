import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { useApp, type Priority } from "@/store";

export const Route = createFileRoute("/add-task")({ component: AddTask });

function AddTask() {
  const navigate = useNavigate();
  const { addTask, categories } = useApp();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState<Priority>("Medium");
  const [category, setCategory] = useState(categories[0].name);

  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/dashboard"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Add New Task</div></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!title) return;
            addTask({ title, description: desc, date, priority, category });
            navigate({ to: "/tasks" });
          }}
          className="mt-6 space-y-3"
        >
          <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Task Title" className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none" />
          <textarea value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description" rows={4} className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none resize-none" />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none" />
          <select value={priority} onChange={(e) => setPriority(e.target.value as Priority)} className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none bg-background">
            <option>Low</option><option>Medium</option><option>High</option>
          </select>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none bg-background">
            {categories.map((c) => <option key={c.name}>{c.name}</option>)}
          </select>
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold mt-2">Save Task</button>
        </form>
      </div>
    </AppShell>
  );
}
