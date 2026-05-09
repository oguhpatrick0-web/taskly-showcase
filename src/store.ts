import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Priority = "Low" | "Medium" | "High";

export interface Task {
  id: string;
  title: string;
  description?: string;
  date?: string;
  priority: Priority;
  category: string;
  completed: boolean;
  createdAt: number;
}

export interface Notification {
  id: string;
  title: string;
  time: string;
}

interface State {
  user: { name: string; email: string; avatar?: string };
  tasks: Task[];
  categories: { name: string; color: string }[];
  notifications: Notification[];
  theme: "light" | "dark";
  notifEnabled: boolean;
  emailNotif: boolean;
  inAppNotif: boolean;
  teamUpdates: boolean;
  twoFA: boolean;
  biometric: boolean;
  addTask: (t: Omit<Task, "id" | "createdAt" | "completed">) => void;
  updateTask: (id: string, t: Partial<Task>) => void;
  toggleTask: (id: string) => void;
  removeTask: (id: string) => void;
  addNotification: (n: Omit<Notification, "id">) => void;
  clearNotifications: () => void;
  setTheme: (t: "light" | "dark") => void;
  set: (p: Partial<State>) => void;
  updateUser: (u: Partial<State["user"]>) => void;
}

export const useApp = create<State>()(
  persist(
    (set) => ({
      user: { name: "Oguh Akachukwu", email: "oguhpatrick0@gmail.com", avatar: undefined },
      tasks: [
        { id: "1", title: "Read your books", priority: "High", category: "Personal", completed: false, createdAt: Date.now() },
        { id: "2", title: "Scout", priority: "Medium", category: "Work", completed: false, createdAt: Date.now() },
        { id: "3", title: "Practice your skill", priority: "Medium", category: "Personal", completed: true, createdAt: Date.now() },
        { id: "4", title: "Go to office", priority: "High", category: "Work", completed: false, createdAt: Date.now() },
        { id: "5", title: "Team meeting", description: "Weekly sync with the team", date: "2026-05-08", priority: "High", category: "Work", completed: false, createdAt: Date.now() },
      ],
      categories: [
        { name: "Work", color: "bg-primary" },
        { name: "Personal", color: "bg-success" },
        { name: "Groceries", color: "bg-warning" },
        { name: "Health", color: "bg-danger" },
      ],
      notifications: [
        { id: "n1", title: "Team meeting reminder", time: "Tomorrow 9:00 AM" },
        { id: "n2", title: "New task assigned", time: "Today 10:30 AM" },
        { id: "n3", title: "Task priority changed", time: "Yesterday" },
      ],
      theme: "light",
      notifEnabled: true,
      emailNotif: true,
      inAppNotif: true,
      teamUpdates: false,
      twoFA: true,
      biometric: false,
      addTask: (t) =>
        set((s) => ({
          tasks: [{ ...t, id: crypto.randomUUID(), completed: false, createdAt: Date.now() }, ...s.tasks],
          notifications: [{ id: crypto.randomUUID(), title: `New task: ${t.title}`, time: "Just now" }, ...s.notifications],
        })),
      updateTask: (id, t) => set((s) => ({ tasks: s.tasks.map((x) => (x.id === id ? { ...x, ...t } : x)) })),
      toggleTask: (id) => set((s) => ({ tasks: s.tasks.map((x) => (x.id === id ? { ...x, completed: !x.completed } : x)) })),
      removeTask: (id) => set((s) => ({ tasks: s.tasks.filter((x) => x.id !== id) })),
      addNotification: (n) => set((s) => ({ notifications: [{ ...n, id: crypto.randomUUID() }, ...s.notifications] })),
      clearNotifications: () => set({ notifications: [] }),
      setTheme: (t) => {
        document.documentElement.classList.toggle("dark", t === "dark");
        set({ theme: t });
      },
      set: (p) => set(p),
      updateUser: (u) => set((s) => ({ user: { ...s.user, ...u } })),
    }),
    { name: "taskly-store", version: 2, migrate: (s: any, v) => {
      if (v < 2 && s?.user) s.user = { ...s.user, email: "oguhpatrick0@gmail.com" };
      return s;
    } }
  )
);
