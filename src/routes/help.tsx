import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ChevronRight, HelpCircle } from "lucide-react";
import { useState } from "react";
import { AppShell } from "@/components/AppShell";

export const Route = createFileRoute("/help")({ component: Help });

const faqs = [
  ["How to create a task?", "Tap the blue + button on the dashboard or tasks screen."],
  ["How to invite members?", "Go to Profile → Team Activity to manage members."],
  ["Reset my password", "Use the 'Forgot password?' link on the login screen."],
  ["Manage subscription", "Visit Settings → Account → Subscription."],
];

function Help() {
  const [open, setOpen] = useState<number | null>(null);
  const [msg, setMsg] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <AppShell>
      <div className="px-5 pt-8">
        <div className="flex items-center gap-3"><Link to="/settings"><ArrowLeft size={20} /></Link><HelpCircle size={20} className="text-primary" /><div className="text-xl font-bold">Help & Support</div></div>
        <div className="text-sm font-semibold mt-6">FAQ</div>
        <div className="space-y-2 mt-2">
          {faqs.map(([q, a], i) => (
            <div key={i} className="bg-secondary rounded-xl">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex justify-between items-center px-3 py-3">
                <span className="text-sm text-left">{q}</span><ChevronRight size={14} className={`transition ${open === i ? "rotate-90" : ""}`} />
              </button>
              {open === i && <div className="px-3 pb-3 text-xs text-muted-foreground">{a}</div>}
            </div>
          ))}
        </div>
        <div className="text-sm font-semibold mt-6">Contact us</div>
        <form onSubmit={(e) => { e.preventDefault(); setSent(true); setMsg(""); }} className="mt-2 space-y-2">
          <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4} placeholder="Your message..." className="w-full px-3 py-3 border border-border rounded-xl text-sm outline-none resize-none" />
          <button className="w-full bg-primary text-white py-2.5 rounded-xl text-sm font-semibold">Send</button>
          {sent && <div className="text-xs text-success text-center">Message sent!</div>}
        </form>
      </div>
    </AppShell>
  );
}
