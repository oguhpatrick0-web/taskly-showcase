import { useState } from "react";

export function Toggle({ on, onChange }: { on: boolean; onChange?: (v: boolean) => void }) {
  const [v, setV] = useState(on);
  const value = onChange ? on : v;
  const handle = () => { const nv = !value; if (onChange) onChange(nv); else setV(nv); };
  return (
    <button onClick={handle} type="button" className={`w-10 h-5 rounded-full p-0.5 transition ${value ? "bg-primary" : "bg-border"}`}>
      <div className={`w-4 h-4 bg-white rounded-full transition ${value ? "translate-x-5" : ""}`} />
    </button>
  );
}
