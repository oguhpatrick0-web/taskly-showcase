import { useState } from "react";
import {
  Home, ListChecks, Calendar as CalIcon, User, Plus, Search, Bell, Settings as SettingsIcon,
  ChevronRight, Check, Paperclip, MessageSquare, Edit3, LogOut, Shield, HelpCircle,
  Filter, Folder, ArrowLeft, Mail, Lock, Users,
} from "lucide-react";

const NavBar = ({ active = "home" }: { active?: string }) => {
  const items = [
    { id: "home", icon: Home, label: "Home" },
    { id: "tasks", icon: ListChecks, label: "Tasks" },
    { id: "calendar", icon: CalIcon, label: "Calendar" },
    { id: "profile", icon: User, label: "Profile" },
  ];
  return (
    <div className="absolute bottom-0 inset-x-0 bg-white border-t border-border flex justify-around py-2">
      {items.map(({ id, icon: Icon, label }) => (
        <div key={id} className={`flex flex-col items-center gap-0.5 ${active === id ? "text-primary" : "text-muted-foreground"}`}>
          <Icon size={14} strokeWidth={2} />
          <span className="text-[7px]">{label}</span>
        </div>
      ))}
    </div>
  );
};

const Screen = ({ children, pad = true }: { children: React.ReactNode; pad?: boolean }) => (
  <div className={`relative h-full bg-white ${pad ? "px-3 pt-2" : ""}`}>{children}</div>
);

// 1. Splash
export const Splash = () => (
  <div className="relative h-full bg-primary flex flex-col items-center justify-center text-primary-foreground">
    <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-3 backdrop-blur">
      <Check size={28} strokeWidth={3} />
    </div>
    <div className="text-2xl font-bold">Taskly</div>
    <div className="text-[9px] opacity-80 mt-1 tracking-wider">Organize · Plan · Achieve</div>
    <div className="absolute bottom-10 w-6 h-6 border-2 border-white/40 border-t-white rounded-full animate-spin" />
  </div>
);

// 2. Onboarding
export const Onboarding = () => (
  <Screen>
    <div className="text-center mt-4">
      <div className="text-lg font-bold">Welcome to <span className="text-primary">Taskly</span></div>
      <div className="text-[9px] text-muted-foreground mt-1 px-4">Organise your tasks, stay productive!</div>
    </div>
    <div className="flex justify-center mt-6">
      <div className="w-28 h-28 rounded-full bg-accent flex items-center justify-center text-4xl">🧑‍💼</div>
    </div>
    <div className="absolute bottom-6 inset-x-3">
      <div className="flex justify-center gap-1 mb-3">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
        <div className="w-1.5 h-1.5 rounded-full bg-border" />
        <div className="w-1.5 h-1.5 rounded-full bg-border" />
      </div>
      <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-semibold">Next</button>
    </div>
  </Screen>
);

// 3. Login
export const Login = () => (
  <Screen>
    <div className="mt-4">
      <div className="text-base font-bold">Welcome back</div>
      <div className="text-[9px] text-muted-foreground">Login to continue</div>
    </div>
    <div className="mt-5 space-y-2">
      <div className="flex items-center gap-2 px-2 py-2 border border-border rounded-lg">
        <Mail size={11} className="text-muted-foreground" /><span className="text-[9px] text-muted-foreground">Email</span>
      </div>
      <div className="flex items-center gap-2 px-2 py-2 border border-border rounded-lg">
        <Lock size={11} className="text-muted-foreground" /><span className="text-[9px] text-muted-foreground">Password</span>
      </div>
      <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-semibold mt-3">Login</button>
      <div className="text-center text-[8px] text-muted-foreground my-1">or</div>
      <button className="w-full border border-border py-2 rounded-lg text-xs font-semibold">Sign up</button>
      <div className="text-center text-[8px] text-primary mt-2">Forgot password?</div>
    </div>
  </Screen>
);

// 4. Dashboard
export const Dashboard = () => (
  <Screen>
    <div className="flex items-center justify-between mt-1">
      <div className="text-sm font-bold">Hello, Oguh!</div>
      <Bell size={12} />
    </div>
    <div className="text-[10px] font-semibold mt-3 mb-1">Today's Tasks</div>
    <div className="space-y-1">
      {["Read your books", "Scout", "Practice your skill", "Go to office"].map((t, i) => (
        <div key={i} className="flex items-center gap-2 bg-secondary rounded-md px-2 py-1.5">
          <div className="w-3 h-3 rounded-sm border border-primary flex items-center justify-center bg-primary">
            <Check size={8} className="text-white" />
          </div>
          <span className="text-[9px]">{t}</span>
        </div>
      ))}
    </div>
    <div className="mt-2 bg-accent rounded-md p-2 flex items-center gap-2">
      <CalIcon size={14} className="text-primary" />
      <div>
        <div className="text-[9px] font-semibold">Team meeting</div>
        <div className="text-[7px] text-muted-foreground">Tomorrow 9:00 PM</div>
      </div>
    </div>
    <button className="absolute bottom-12 right-3 w-9 h-9 rounded-full bg-primary text-white flex items-center justify-center shadow-lg">
      <Plus size={16} />
    </button>
    <NavBar active="home" />
  </Screen>
);

// 5. Add Task
export const AddTask = () => (
  <Screen>
    <div className="flex items-center gap-2 mt-1">
      <ArrowLeft size={12} />
      <div className="text-sm font-bold">Add New Task</div>
    </div>
    <div className="mt-3 space-y-2">
      <div className="px-2 py-2 border border-border rounded-md text-[9px] text-muted-foreground">Task Title</div>
      <div className="px-2 py-6 border border-border rounded-md text-[9px] text-muted-foreground">Description</div>
      <div className="px-2 py-2 border border-border rounded-md text-[9px] text-muted-foreground flex justify-between">
        <span>dd/mm/yyyy</span><CalIcon size={10} />
      </div>
      <div className="px-2 py-2 border border-border rounded-md text-[9px] flex justify-between">
        <span>⭐ Medium</span><ChevronRight size={10} className="rotate-90" />
      </div>
      <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-semibold mt-2">Save Task</button>
    </div>
    <NavBar active="tasks" />
  </Screen>
);

// 6. Calendar
export const CalendarView = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const dotted = [4, 9, 15, 22, 27];
  return (
    <Screen>
      <div className="flex items-center justify-between mt-1">
        <ArrowLeft size={12} /><div className="text-sm font-bold">Calendar</div><div className="w-3" />
      </div>
      <div className="grid grid-cols-7 gap-0.5 mt-3 text-center text-[7px] text-muted-foreground">
        {["Su","Mo","Tu","We","Th","Fr","Sa"].map(d => <div key={d}>{d}</div>)}
      </div>
      <div className="grid grid-cols-7 gap-0.5 mt-1 text-center text-[8px]">
        {days.map(d => (
          <div key={d} className={`relative py-0.5 rounded ${d === 31 ? "bg-primary text-white" : ""}`}>
            {d}
            {dotted.includes(d) && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-0.5 rounded-full bg-primary" />}
          </div>
        ))}
      </div>
      <div className="mt-3 bg-secondary rounded-md p-2">
        <div className="text-[9px] font-semibold">Team meeting</div>
        <div className="text-[8px] mt-1">• Read your books</div>
        <div className="text-[8px]">• Scout</div>
        <div className="text-[8px]">• Practice your skill</div>
      </div>
      <NavBar active="calendar" />
    </Screen>
  );
};

// 7. Task Details
export const TaskDetails = () => (
  <Screen>
    <div className="flex justify-between items-center mt-1">
      <ArrowLeft size={12} />
      <Edit3 size={12} className="text-primary" />
    </div>
    <div className="text-sm font-bold mt-2">Task Details</div>
    <div className="text-[8px] text-muted-foreground mt-2 leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod. Description, attachments and comments.
    </div>
    <div className="text-[9px] font-semibold mt-3">Attachments</div>
    <div className="flex gap-1 mt-1">
      {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded bg-accent flex items-center justify-center"><Paperclip size={8} className="text-primary" /></div>)}
    </div>
    <div className="text-[9px] font-semibold mt-3">Comments</div>
    <div className="flex items-center gap-1 mt-1 px-2 py-1 border border-border rounded-md">
      <MessageSquare size={9} /><span className="text-[8px] text-muted-foreground">Add a comment...</span>
    </div>
    <NavBar active="tasks" />
  </Screen>
);

// 8. Filter/Sort
export const FilterSort = () => (
  <Screen>
    <div className="text-sm font-bold mt-1">Tasks</div>
    <div className="flex items-center gap-1 mt-2 px-2 py-1 bg-secondary rounded-md">
      <Search size={10} /><span className="text-[8px] text-muted-foreground">Search</span>
    </div>
    <div className="flex gap-1 mt-2">
      <div className="px-2 py-0.5 bg-primary text-white rounded text-[8px]">By date</div>
      <div className="px-2 py-0.5 bg-secondary rounded text-[8px]">Priority</div>
      <div className="px-2 py-0.5 bg-secondary rounded text-[8px]">Category</div>
    </div>
    <div className="text-[9px] font-semibold mt-3">Category</div>
    <div className="space-y-1 mt-1">
      {["Date","Priority","Category","Color"].map(c => (
        <div key={c} className="flex justify-between items-center px-2 py-1.5 bg-secondary rounded-md">
          <div className="flex items-center gap-1.5"><Folder size={10} className="text-primary" /><span className="text-[9px]">{c}</span></div>
          <ChevronRight size={10} />
        </div>
      ))}
    </div>
    <NavBar active="tasks" />
  </Screen>
);

// 9. Notifications
export const Notifications = () => (
  <Screen>
    <div className="flex justify-between items-center mt-1">
      <div className="text-sm font-bold">Notifications</div>
      <span className="text-[8px] text-primary">clear all</span>
    </div>
    <div className="space-y-1.5 mt-3">
      {[
        ["Team meeting reminder", "Tomorrow 9:00 AM"],
        ["New task assigned", "Today 10:30 AM"],
        ["Task priority changed", "Yesterday"],
        ["Task due soon", "Today 2:00 PM"],
      ].map(([t, ts], i) => (
        <div key={i} className="flex gap-2 px-2 py-1.5 bg-secondary rounded-md">
          <Bell size={10} className="text-primary mt-0.5" />
          <div>
            <div className="text-[9px] font-semibold">{t}</div>
            <div className="text-[7px] text-muted-foreground">{ts}</div>
          </div>
        </div>
      ))}
    </div>
    <NavBar />
  </Screen>
);

// 10. Settings Main
export const SettingsMain = () => (
  <Screen>
    <div className="text-sm font-bold mt-1">Settings</div>
    <div className="space-y-1 mt-3">
      <Row label="Theme" right={<div className="text-[8px] px-2 py-0.5 bg-secondary rounded">Light/Dark</div>} />
      <Row label="Notifications" right={<Toggle on />} />
      <Row label="Account" right={<ChevronRight size={10} />} />
      <Row label="Security" right={<ChevronRight size={10} />} />
      <Row label="Help & Support" right={<ChevronRight size={10} />} />
    </div>
    <NavBar active="profile" />
  </Screen>
);

// 11. Profile Dashboard
export const ProfileDashboard = () => (
  <Screen>
    <div className="text-sm font-bold mt-1 text-center">Profile</div>
    <div className="bg-primary rounded-lg p-2 mt-2 flex items-center gap-2 text-white">
      <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-xs">O</div>
      <div>
        <div className="text-[10px] font-bold">Oguh Akachukwu</div>
        <div className="text-[7px] opacity-80">oguh@email.com</div>
      </div>
    </div>
    <div className="text-[9px] font-semibold mt-2">Stats</div>
    <div className="grid grid-cols-2 gap-2 mt-1">
      <div className="bg-secondary rounded p-1.5 text-center">
        <div className="text-[7px] text-muted-foreground">Tasks Completed</div>
        <div className="relative w-10 h-10 mx-auto mt-1">
          <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
            <circle cx="18" cy="18" r="14" fill="none" stroke="hsl(0 0% 90%)" strokeWidth="4" />
            <circle cx="18" cy="18" r="14" fill="none" stroke="oklch(0.55 0.24 264)" strokeWidth="4" strokeDasharray="88" strokeDashoffset="22" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-[8px] font-bold">75%</div>
        </div>
      </div>
      <div className="bg-secondary rounded p-1.5">
        <div className="text-[7px] text-muted-foreground text-center">Days Active</div>
        <div className="flex items-end justify-around h-10 mt-1 gap-0.5">
          {[40,70,55,85,30,60,75].map((h,i) => <div key={i} className="w-1.5 bg-primary rounded-t" style={{height: `${h}%`}} />)}
        </div>
      </div>
    </div>
    <NavBar active="profile" />
  </Screen>
);

// 12. Notification Preferences
export const NotifPrefs = () => (
  <Screen>
    <div className="text-sm font-bold mt-1">Notifications</div>
    <div className="space-y-1 mt-3">
      <Row label="Email" right={<Toggle on />} />
      <Row label="In-app" right={<Toggle on />} />
      <Row label="Team updates" right={<Toggle />} />
      <Row label="Task reminders" right={<Toggle on />} />
      <Row label="Weekly digest" right={<Toggle />} />
    </div>
    <NavBar active="profile" />
  </Screen>
);

// 13. Profile Edit
export const ProfileEdit = () => (
  <Screen>
    <div className="text-sm font-bold mt-1">Profile</div>
    <div className="flex flex-col items-center mt-2">
      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">O</div>
      <div className="text-[10px] font-semibold mt-1">Oguh Akachukwu</div>
      <div className="text-[8px] text-muted-foreground">oguh@email.com</div>
    </div>
    <div className="space-y-1 mt-3">
      <Row label="My Account" right={<ChevronRight size={10} />} />
      <Row label="Security" right={<ChevronRight size={10} />} />
      <Row label="Privacy policy" right={<ChevronRight size={10} />} />
      <Row label="Help & Support" right={<ChevronRight size={10} />} />
      <Row label="Settings" right={<ChevronRight size={10} />} />
    </div>
    <div className="absolute bottom-12 inset-x-3 flex items-center gap-1 text-danger text-[10px] font-semibold">
      <LogOut size={10} /> Log out
    </div>
    <NavBar active="profile" />
  </Screen>
);

// 14. Privacy & Security
export const Privacy = () => (
  <Screen>
    <div className="flex items-center gap-1 mt-1"><ArrowLeft size={12} /><div className="text-sm font-bold">Security</div></div>
    <div className="space-y-1 mt-3">
      <Row label="Two-factor auth" right={<Toggle on />} />
      <Row label="Biometric login" right={<Toggle />} />
      <Row label="Change password" right={<ChevronRight size={10} />} />
      <Row label="Active sessions" right={<ChevronRight size={10} />} />
      <Row label="Export my data" right={<ChevronRight size={10} />} />
      <Row label="Delete account" right={<ChevronRight size={10} />} />
    </div>
    <NavBar active="profile" />
  </Screen>
);

// 15. Lists & Categories
export const Lists = () => (
  <Screen>
    <div className="text-sm font-bold mt-1">My Lists</div>
    <div className="space-y-1.5 mt-3">
      {[["Work", 12, "bg-primary"],["Personal", 8, "bg-success"],["Groceries", 5, "bg-warning"],["Health", 3, "bg-danger"]].map(([n,c,col],i) => (
        <div key={i} className="flex justify-between items-center px-2 py-2 bg-secondary rounded-md">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${col}`} />
            <span className="text-[10px] font-medium">{n}</span>
          </div>
          <span className="text-[9px] text-muted-foreground">{c} tasks</span>
        </div>
      ))}
    </div>
    <NavBar active="tasks" />
  </Screen>
);

// 16. Edit Mode
export const EditTask = () => (
  <Screen>
    <div className="flex items-center gap-2 mt-1"><ArrowLeft size={12} /><div className="text-sm font-bold">Edit Task</div></div>
    <div className="mt-3 space-y-2">
      <input className="w-full px-2 py-1.5 border border-primary rounded-md text-[9px]" defaultValue="Read your books" />
      <textarea className="w-full px-2 py-1.5 border border-primary rounded-md text-[9px] h-12" defaultValue="Finish chapter 5 of design book" />
      <div className="px-2 py-1.5 border border-border rounded-md text-[9px]">12/05/2026</div>
      <div className="px-2 py-1.5 border border-border rounded-md text-[9px]">⭐ High</div>
      <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg text-xs font-semibold mt-2">Update Task</button>
    </div>
    <NavBar active="tasks" />
  </Screen>
);

// 17. Search
export const SearchScreen = () => (
  <Screen>
    <div className="flex items-center gap-1 mt-1 px-2 py-1.5 bg-secondary rounded-md">
      <Search size={10} /><span className="text-[9px]">team meeting</span>
    </div>
    <div className="text-[8px] text-muted-foreground mt-3">Tasks · 3</div>
    <div className="space-y-1 mt-1">
      {["Team meeting prep","Team sync notes","Team retro"].map(t => (
        <div key={t} className="px-2 py-1.5 bg-secondary rounded text-[9px]">{t}</div>
      ))}
    </div>
    <div className="text-[8px] text-muted-foreground mt-3">People · 1</div>
    <div className="px-2 py-1.5 bg-secondary rounded text-[9px] flex items-center gap-1.5 mt-1">
      <div className="w-4 h-4 rounded-full bg-primary text-white flex items-center justify-center text-[7px]">J</div>
      John Doe
    </div>
    <NavBar />
  </Screen>
);

// 18. Team Activity
export const TeamActivity = () => (
  <Screen>
    <div className="flex items-center gap-1 mt-1"><Users size={12} className="text-primary" /><div className="text-sm font-bold">Team Activity</div></div>
    <div className="space-y-1.5 mt-3">
      {[
        ["John", "completed", "Design Review"],
        ["Sarah", "added", "New Task"],
        ["Mike", "commented on", "Sprint Plan"],
        ["Lisa", "assigned", "Bug Fix"],
        ["Tom", "completed", "User Research"],
      ].map(([who,act,what], i) => (
        <div key={i} className="flex gap-2 px-2 py-1.5 bg-secondary rounded">
          <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[8px] font-bold">{who[0]}</div>
          <div className="text-[8px]">
            <span className="font-semibold">{who}</span> {act} <span className="text-primary">{what}</span>
            <div className="text-[7px] text-muted-foreground">2h ago</div>
          </div>
        </div>
      ))}
    </div>
    <NavBar />
  </Screen>
);

// 19. Logout Dialog
export const LogoutDialog = () => (
  <div className="relative h-full bg-black/40">
    <div className="absolute inset-0 px-3 pt-2 opacity-30">
      <div className="text-sm font-bold">Settings</div>
    </div>
    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 bg-white rounded-2xl p-4 text-center shadow-xl">
      <div className="w-10 h-10 rounded-full bg-danger/15 mx-auto flex items-center justify-center">
        <LogOut size={16} className="text-danger" />
      </div>
      <div className="text-[11px] font-bold mt-2">Log out?</div>
      <div className="text-[8px] text-muted-foreground mt-1">Are you sure you want to log out?</div>
      <div className="flex gap-2 mt-3">
        <button className="flex-1 py-1.5 border border-border rounded-md text-[9px]">Cancel</button>
        <button className="flex-1 py-1.5 bg-danger text-white rounded-md text-[9px] font-semibold">Log out</button>
      </div>
    </div>
  </div>
);

// 20. Help & Support
export const Help = () => (
  <Screen>
    <div className="flex items-center gap-1 mt-1"><HelpCircle size={12} className="text-primary" /><div className="text-sm font-bold">Help & Support</div></div>
    <div className="text-[9px] font-semibold mt-3">FAQ</div>
    <div className="space-y-1 mt-1">
      {["How to create a task?","How to invite members?","Reset my password","Manage subscription"].map(q => (
        <div key={q} className="flex justify-between items-center px-2 py-1.5 bg-secondary rounded">
          <span className="text-[9px]">{q}</span><ChevronRight size={10} />
        </div>
      ))}
    </div>
    <div className="text-[9px] font-semibold mt-3">Contact us</div>
    <div className="px-2 py-1.5 border border-border rounded mt-1 text-[8px] text-muted-foreground">Your message...</div>
    <button className="w-full bg-primary text-white py-1.5 rounded-md text-[9px] font-semibold mt-2">Send</button>
    <NavBar active="profile" />
  </Screen>
);

// helpers
const Row = ({ label, right }: { label: string; right: React.ReactNode }) => (
  <div className="flex justify-between items-center px-2 py-2 bg-secondary rounded-md">
    <span className="text-[9px] font-medium">{label}</span>
    {right}
  </div>
);

function Toggle({ on = false }: { on?: boolean }) {
  const [v, setV] = useState(on);
  return (
    <div onClick={() => setV(!v)} className={`w-7 h-3.5 rounded-full p-0.5 cursor-pointer transition ${v ? "bg-primary" : "bg-border"}`}>
      <div className={`w-2.5 h-2.5 bg-white rounded-full transition ${v ? "translate-x-3.5" : ""}`} />
    </div>
  );
}
