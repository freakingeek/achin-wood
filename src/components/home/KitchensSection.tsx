import Image from "next/image";
import { forwardRef } from "react";
import LocationBox from "@/components/home/LocationBox";

const KitchensSection = forwardRef<HTMLElement>(
  function KitchensSection(_, ref) {
    return (
      <section
        ref={ref}
        id="about"
        data-story-step
        className="relative isolate min-h-svh overflow-hidden bg-[#2f2015] text-[#fff8e9]"
        aria-label="آشپزخانه‌های آچین وود"
      >
        <Image
          fill
          sizes="100vw"
          data-story-image
          alt="آشپزخانه کلاسیک چوبی با جزیره مرکزی"
          src="/images/596a77c9-3816-42ab-94d9-363410be1475.png"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />

        <div
          data-story-shade
          className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(28,13,4,0.88)_0%,rgba(47,25,10,0.62)_24%,rgba(53,30,14,0.16)_55%,rgba(53,30,14,0)_100%),linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(42,23,11,0.68)_100%)] before:absolute before:inset-y-0 before:left-0 before:w-[min(45rem,52vw)] before:bg-[rgba(25,13,6,0.22)] before:backdrop-blur-[10px] before:[mask-image:linear-gradient(90deg,#000_0_58%,transparent_100%)] max-md:bg-[linear-gradient(180deg,rgba(34,18,8,0)_0%,rgba(34,18,8,0.12)_48%,rgba(34,18,8,0.72)_78%,rgba(34,18,8,0.9)_100%)] max-md:before:inset-x-0 max-md:before:inset-y-auto max-md:before:bottom-0 max-md:before:h-[52%] max-md:before:w-full max-md:before:[mask-image:linear-gradient(180deg,transparent_0,#000_42%)]"
          aria-hidden="true"
        />

        <LocationBox>پروژه مسکونی میرداماد</LocationBox>

        <div
          data-story-copy
          className="max-w-120 max-md:max-w-full text-right absolute lg:inset-e-32 lg:bottom-60 inset-e-10 bottom-32"
        >
          <h2 className="m-0 text-[clamp(1.45rem,1.9vw,1.9rem)] font-black leading-[1.35] tracking-[-0.035em] text-[#FFFCF5]">
            آشپزخانه، قلب تپنده خانه
          </h2>

          <p className="mt-5 mb-0 text-[clamp(0.8rem,1.02vw,1.05rem)] font-light text-justify leading-[1.85] text-[#FFFCF5] max-md:leading-[1.85] max-lg:max-w-64">
            آشپزخانه، مهم‌ترین فضای هر خانه و نقطه تلاقی زیبایی و کارایی است.
            آچین‌وود با طراحی و اجرای کابینت‌های مدرن، نئوکلاسیک و کلاسیک، و با
            بهره‌گیری از متریال باکیفیت و جزئیات اجرایی دقیق، فضاهایی ماندگار و
            منحصربه‌فرد خلق می‌کند که کاملاً با نیازها و سبک زندگی کارفرما
            هماهنگ هستند.
          </p>
        </div>

        <p
          data-story-display
          className="absolute lg:inset-e-60 lg:bottom-20 inset-e-40 bottom-16 font-sofia-pro text-[clamp(3rem,8.1vw,6rem)] font-extralight leading-[0.86] tracking-[0.02em] text-[#DAD1BE]"
          aria-hidden="true"
        >
          KITCHENS
        </p>
      </section>
    );
  },
);

export default KitchensSection;
