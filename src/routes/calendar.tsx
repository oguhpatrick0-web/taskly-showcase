import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";

export const Route = createFileRoute("/calendar")({ component: CalendarView });

function CalendarView() {
  const { tasks } = useApp();
  const [date, setDate] = useState(new Date());
  const year = date.getFullYear();
  const month = date.getMonth();
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const [selected, setSelected] = useState(new Date().getDate());

  const dotted = new Set(
    tasks.filter((t) => t.date && new Date(t.date).getMonth() === month).map((t) => new Date(t.date!).getDate())
  );

  const monthName = date.toLocaleString("default", { month: "long" });
  const selectedTasks = tasks.filter((t) => t.date && new Date(t.date).getDate() === selected && new Date(t.date).getMonth() === month);

  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center justify-between">
          <button onClick={() => setDate(new Date(year, month - 1, 1))}><ArrowLeft size={20} /></button>
          <div className="text-lg font-bold">{monthName} {year}</div>
          <button onClick={() => setDate(new Date(year, month + 1, 1))}><ArrowRight size={20} /></button>
        </div>
        <div className="grid grid-cols-7 gap-1 mt-6 text-center text-xs text-muted-foreground">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 mt-2 text-center text-sm">
          {Array.from({ length: first }).map((_, i) => <div key={`e${i}`} />)}
          {Array.from({ length: days }, (_, i) => i + 1).map((d) => (
            <button
              key={d}
              onClick={() => setSelected(d)}
              className={`relative py-2 rounded-lg ${selected === d ? "bg-primary text-white" : "hover:bg-secondary"}`}
            >
              {d}
              {dotted.has(d) && <div className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${selected === d ? "bg-white" : "bg-primary"}`} />}
            </button>
          ))}
        </div>
        <div className="mt-6 bg-secondary rounded-xl p-4">
          <div className="text-sm font-semibold mb-2">Tasks for {monthName} {selected}</div>
          {selectedTasks.length === 0 && <div className="text-xs text-muted-foreground">No tasks scheduled</div>}
          {selectedTasks.map((t) => <div key={t.id} className="text-sm py-1">• {t.title}</div>)}
        </div>
      </div>
    </AppShell>
  );
}
