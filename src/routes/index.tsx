import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import * as S from "@/components/screens";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Taskly — UI/UX Showcase" },
      { name: "description", content: "Twenty-screen mockup showcase for the Taskly task management app." },
    ],
  }),
  component: Index,
});

const screens = [
  ["Splash", S.Splash],
  ["Onboarding", S.Onboarding],
  ["Login", S.Login],
  ["Dashboard", S.Dashboard],
  ["Add Task", S.AddTask],
  ["Calendar", S.CalendarView],
  ["Task Details", S.TaskDetails],
  ["Filter / Sort", S.FilterSort],
  ["Notifications", S.Notifications],
  ["Settings", S.SettingsMain],
  ["Profile", S.ProfileDashboard],
  ["Notification Prefs", S.NotifPrefs],
  ["Profile Edit", S.ProfileEdit],
  ["Privacy & Security", S.Privacy],
  ["Lists & Categories", S.Lists],
  ["Edit Task", S.EditTask],
  ["Search", S.SearchScreen],
  ["Team Activity", S.TeamActivity],
  ["Logout Dialog", S.LogoutDialog],
  ["Help & Support", S.Help],
] as const;

function Index() {
  return (
    <main className="min-h-screen bg-showcase-bg py-10 px-6">
      <header className="text-center mb-10 text-white">
        <h1 className="text-3xl font-bold tracking-tight">Taskly</h1>
        <p className="text-sm text-white/60 mt-1">UI/UX Showcase · 20 Screens · iPhone 16 & 17 Pro Max</p>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-6 max-w-[2400px] mx-auto">
        {screens.map(([label, Comp], i) => (
          <PhoneFrame key={i} label={`${i + 1}. ${label}`}>
            <Comp />
          </PhoneFrame>
        ))}
      </div>
    </main>
  );
}
