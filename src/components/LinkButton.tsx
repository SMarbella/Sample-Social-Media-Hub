import type { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  label: string;
  icon: ReactNode;
  ariaLabel?: string;
}

export function LinkButton({ href, label, icon, ariaLabel }: LinkButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel ?? label}
      className="group relative flex w-full items-center justify-center gap-3 rounded-md border border-primary/40 bg-card/40 px-6 py-4 text-base font-medium tracking-wide text-primary backdrop-blur-sm glow-on-hover hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      <span className="flex h-5 w-5 items-center justify-center" aria-hidden="true">
        {icon}
      </span>
      <span className="font-display text-sm uppercase tracking-[0.18em]">{label}</span>
    </a>
  );
}
