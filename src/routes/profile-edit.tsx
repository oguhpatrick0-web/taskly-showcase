import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowLeft, LogOut } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { useApp } from "@/store";

export const Route = createFileRoute("/profile-edit")({ component: ProfileEdit });

function ProfileEdit() {
  const navigate = useNavigate();
  const { user, updateUser } = useApp();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [showLogout, setShowLogout] = useState(false);

  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/profile"><ArrowLeft size={20} /></Link><div className="text-xl font-bold">Edit Profile</div></div>
        <div className="flex flex-col items-center mt-6">
          <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">{name[0]}</div>
        </div>
        <form onSubmit={(e) => { e.preventDefault(); updateUser({ name, email }); navigate({ to: "/profile" }); }} className="mt-6 space-y-3">
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none" />
          <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold">Save</button>
        </form>
        <button onClick={() => setShowLogout(true)} className="flex items-center gap-2 text-danger text-sm font-semibold mt-8 mx-auto">
          <LogOut size={16} /> Log out
        </button>
      </div>
      {showLogout && (
        <div className="fixed inset-0 bg-black/40 z-[100] flex items-center justify-center px-6">
          <div className="bg-white rounded-2xl p-6 text-center max-w-sm w-full">
            <div className="w-12 h-12 rounded-full bg-danger/15 mx-auto flex items-center justify-center"><LogOut size={20} className="text-danger" /></div>
            <div className="text-base font-bold mt-3">Log out?</div>
            <div className="text-sm text-muted-foreground mt-1">Are you sure you want to log out?</div>
            <div className="flex gap-2 mt-4">
              <button onClick={() => setShowLogout(false)} className="flex-1 py-2 border border-border rounded-lg text-sm">Cancel</button>
              <button onClick={() => navigate({ to: "/login" })} className="flex-1 py-2 bg-danger text-white rounded-lg text-sm font-semibold">Log out</button>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}
