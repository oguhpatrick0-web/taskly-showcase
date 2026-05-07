import { Link, useRouterState } from "@tanstack/react-router";
import { Home, ListChecks, Calendar as CalIcon, User } from "lucide-react";

export function NavBar() {
  const { location } = useRouterState();
  const path = location.pathname;
  const items = [
    { id: "home", to: "/dashboard", icon: Home, label: "Home", match: ["/dashboard"] },
    { id: "tasks", to: "/tasks", icon: ListChecks, label: "Tasks", match: ["/tasks", "/add-task", "/task-details", "/edit-task", "/lists", "/filter"] },
    { id: "calendar", to: "/calendar", icon: CalIcon, label: "Calendar", match: ["/calendar"] },
    { id: "profile", to: "/profile", icon: User, label: "Profile", match: ["/profile", "/settings", "/notification-prefs", "/profile-edit", "/privacy", "/help"] },
  ];
  return (
    <div className="fixed bottom-0 inset-x-0 max-w-md mx-auto bg-white border-t border-border flex justify-around py-2 z-50">
      {items.map(({ id, to, icon: Icon, label, match }) => {
        const active = match.some((m) => path.startsWith(m));
        return (
          <Link
            key={id}
            to={to}
            className={`flex flex-col items-center gap-0.5 ${active ? "text-primary" : "text-muted-foreground"}`}
          >
            <Icon size={20} strokeWidth={2} />
            <span className="text-[10px] font-medium">{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
