import { ReactNode } from "react";

interface PhoneFrameProps {
  label?: string;
  children: ReactNode;
}

export function PhoneFrame({ label, children }: PhoneFrameProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {label && (
        <span className="text-[10px] font-medium tracking-wide text-white/60">
          {label}
        </span>
      )}
      <div className="relative w-[220px] h-[460px] rounded-[40px] bg-phone-frame p-[6px] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] ring-1 ring-black/10">
        <div className="relative w-full h-full overflow-hidden rounded-[34px] bg-white">
          {/* status bar */}
          <div className="flex items-center justify-center px-4 pt-2 pb-1 text-[10px] font-semibold text-foreground">
            9:41
          </div>
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
          <div className="h-[calc(100%-22px)] overflow-hidden">{children}</div>
        </div>
      </div>
    </div>
  );
}
