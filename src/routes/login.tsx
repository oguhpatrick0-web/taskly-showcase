import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/login")({ component: Login });

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("oguh@email.com");
  const [pwd, setPwd] = useState("password");
  return (
    <div className="min-h-screen bg-background px-6 pt-12 max-w-md mx-auto">
      <div className="text-2xl font-bold">Welcome back</div>
      <div className="text-sm text-muted-foreground">Login to continue</div>
      <form
        onSubmit={(e) => { e.preventDefault(); navigate({ to: "/dashboard" }); }}
        className="mt-8 space-y-3"
      >
        <div className="flex items-center gap-2 px-3 py-3 border border-border rounded-xl">
          <Mail size={16} className="text-muted-foreground" />
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="flex-1 bg-transparent text-sm outline-none" />
        </div>
        <div className="flex items-center gap-2 px-3 py-3 border border-border rounded-xl">
          <Lock size={16} className="text-muted-foreground" />
          <input value={pwd} onChange={(e) => setPwd(e.target.value)} type="password" placeholder="Password" className="flex-1 bg-transparent text-sm outline-none" />
        </div>
        <button className="w-full bg-primary text-primary-foreground py-3 rounded-xl text-sm font-semibold mt-4">Login</button>
        <div className="text-center text-xs text-muted-foreground my-2">or</div>
        <button type="button" onClick={() => navigate({ to: "/dashboard" })} className="w-full border border-border py-3 rounded-xl text-sm font-semibold">Sign up</button>
        <div className="text-center text-xs text-primary mt-3 cursor-pointer">Forgot password?</div>
      </form>
    </div>
  );
}
