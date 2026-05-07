import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, Edit3, MessageSquare, Paperclip, Trash2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";
import { useState } from "react";
import { z } from "zod";

export const Route = createFileRoute("/task-details")({
  validateSearch: z.object({ id: z.string() }),
  component: Details,
});

function Details() {
  const { id } = Route.useSearch();
  const navigate = useNavigate();
  const { tasks, removeTask } = useApp();
  const task = tasks.find((t) => t.id === id);
  const [comments, setComments] = useState<string[]>([]);
  const [text, setText] = useState("");

  if (!task) return <AppShell><div className="p-5">Task not found</div></AppShell>;

  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center justify-between">
          <Link to="/tasks"><ArrowLeft size={20} /></Link>
          <div className="flex gap-3">
            <Link to="/edit-task" search={{ id: task.id }}><Edit3 size={18} className="text-primary" /></Link>
            <button onClick={() => { removeTask(task.id); navigate({ to: "/tasks" }); }}><Trash2 size={18} className="text-danger" /></button>
          </div>
        </div>
        <div className="text-2xl font-bold mt-4">{task.title}</div>
        <div className="flex gap-2 mt-2">
          <span className="text-xs px-2 py-0.5 bg-accent text-primary rounded-full">{task.category}</span>
          <span className="text-xs px-2 py-0.5 bg-warning/15 text-warning rounded-full">{task.priority}</span>
        </div>
        <div className="text-sm text-muted-foreground mt-4 leading-relaxed">{task.description || "No description."}</div>
        <div className="text-sm font-semibold mt-6">Attachments</div>
        <div className="flex gap-2 mt-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center"><Paperclip size={16} className="text-primary" /></div>
          ))}
        </div>
        <div className="text-sm font-semibold mt-6">Comments</div>
        <div className="space-y-2 mt-2">
          {comments.map((c, i) => (
            <div key={i} className="bg-secondary rounded-lg p-2 text-sm">{c}</div>
          ))}
        </div>
        <form onSubmit={(e) => { e.preventDefault(); if (!text) return; setComments([...comments, text]); setText(""); }} className="flex items-center gap-2 mt-3 px-3 py-2 border border-border rounded-xl">
          <MessageSquare size={16} />
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a comment..." className="flex-1 bg-transparent text-sm outline-none" />
        </form>
      </div>
    </AppShell>
  );
}
