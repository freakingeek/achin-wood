import { MapPin } from "lucide-react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type LocationBoxVariant = "story" | "afterHero" | "hero" | "white";

type LocationBoxProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children: ReactNode;
  iconClassName?: string;
  textClassName?: string;
  variant?: LocationBoxVariant;
};

const variantClassNames: Record<LocationBoxVariant, string> = {
  story:
    "absolute top-10 inset-e-10 flex min-h-9 w-fit items-center gap-2 rounded-full border border-[#ffffff30] bg-white/30 px-4 py-2 text-[10px] font-medium text-white backdrop-blur-[18px] lg:top-32 lg:inset-e-32 lg:text-sm",
  afterHero: "achin-after-hero__pill",
  hero:
    "absolute top-28 inset-s-14 z-3 flex min-h-9 w-fit items-center gap-2.5 rounded-full border border-[#56544980] bg-white/30 px-4 py-2 text-[10px] font-semibold text-[#565449] backdrop-blur-2xl lg:top-50 lg:inset-s-35 lg:min-h-[2.9rem] lg:text-sm",
  white:
    "flex min-h-9 w-fit items-center gap-2 rounded-full border border-white/35 bg-white/30 px-4 py-2 text-[10px] font-semibold text-[#FFFCF5] backdrop-blur-[18px] lg:text-sm",
};

export default function LocationBox({
  children,
  className,
  iconClassName,
  textClassName,
  variant = "story",
  ...props
}: LocationBoxProps) {
  return (
    <div
      data-story-pill
      className={cn(variantClassNames[variant], className)}
      {...props}
    >
      <MapPin
        className={cn("size-4 shrink-0 stroke-1 lg:size-5", iconClassName)}
        strokeWidth={3}
        aria-hidden="true"
      />

      <span className={textClassName}>{children}</span>
    </div>
  );
}
