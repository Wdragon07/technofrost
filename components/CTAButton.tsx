import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "red" | "navy" | "ice" | "outline" | "white";
  className?: string;
  icon?: ReactNode;
  external?: boolean;
};

const variants = {
  red: "bg-brand-red-dark text-white shadow-lg shadow-brand-red/20",
  navy: "bg-brand-navy text-white shadow-lg shadow-brand-navy/20",
  ice: "bg-brand-ice text-brand-navy",
  outline:
    "border border-brand-border/25 bg-white text-brand-navy hover:border-brand-blue/40",
  white:
    "border border-white/20 bg-white text-brand-navy shadow-lg shadow-black/10",
};

const animatedFills = {
  red: "before:bg-brand-red-dark",
  navy: "before:bg-brand-deep",
  ice: "before:bg-brand-ice hover:text-white! focus-visible:text-white",
  outline: "before:bg-brand-ice hover:text-white focus-visible:text-white",
  white: "before:bg-brand-ice-light",
};

export default function CTAButton({
  href,
  children,
  variant = "navy",
  className,
  icon,
  external,
}: CTAButtonProps) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 grid size-5 place-items-center" aria-hidden="true">
        {icon ?? <ArrowRight className="size-4 transition-transform group-hover/button:translate-x-0.5" />}
      </span>
    </>
  );

  const classes = cn(
    "group/button relative isolate inline-flex min-h-11 items-center justify-center gap-2 overflow-hidden rounded-sm border-[3px] border-transparent px-4 py-2.5 text-center text-sm font-bold uppercase tracking-[2px] shadow-[0_2px_10px_rgba(0,0,0,0.16),0_3px_6px_rgba(0,0,0,0.1)] transition-[color,border-color,box-shadow,transform] duration-300 ease-in-out before:absolute before:inset-y-0 before:left-1/2 before:right-1/2 before:z-0 before:opacity-0 before:transition-all before:duration-500 before:ease-in-out before:content-[''] hover:before:left-0 hover:before:right-0 hover:before:opacity-100 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-brand-ice/50 focus-visible:before:left-0 focus-visible:before:right-0 focus-visible:before:opacity-100 active:scale-90",
    variants[variant],
    animatedFills[variant],
    className,
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
