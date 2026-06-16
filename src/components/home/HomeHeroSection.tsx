import Image from "next/image";
import { forwardRef } from "react";
import LocationBox from "@/components/home/LocationBox";

const HomeHeroSection = forwardRef<HTMLElement>(
  function HomeHeroSection(_, ref) {
    return (
      <section
        ref={ref}
        className="relative isolate h-svh w-full overflow-hidden bg-[#171812] text-[#555247]"
        aria-label="پروژه منتخب آچین وود"
      >
        <div className="absolute inset-0">
          <Image
            alt="آشپزخانه روشن با کابینت‌های سبز روشن و جزیره مرکزی"
            className="object-cover"
            fill
            priority
            sizes="100vw"
            src="/images/e1866bd3-6644-4d79-a0d6-76eeed1c2985.jpg"
          />
        </div>

        <div
          className="absolute inset-0 z-1 bg-[linear-gradient(90deg,rgb(239_232_213/0.04),rgb(239_232_213/0.12)_49%,rgb(239_232_213/0.28)_72%,rgb(239_232_213/0.34)),linear-gradient(180deg,rgb(255_255_255/0)_58%,rgb(255_255_255/0.06))] max-[767px]:bg-[linear-gradient(180deg,rgb(239_232_213/0.03),rgb(239_232_213/0.22)_48%,rgb(239_232_213/0.34)),linear-gradient(90deg,rgb(255_255_255/0.02),rgb(255_255_255/0.06))]"
          aria-hidden="true"
        />

        <LocationBox data-hero-animate variant="hero">
          پروژه مسکونی آجودانیه
        </LocationBox>

          <div className="absolute inset-s-14 bottom-45 z-1 lg:inset-s-35 lg:top-[clamp(13rem,30vh,25rem)]">
          <p
            data-hero-animate
            className="m-0 text-[clamp(2.5rem,4.45vw,4rem)] font-extrabold leading-[1.18] tracking-[-0.055em] text-[#565449] max-[1024px]:text-[clamp(2.5rem,6.25vw,4rem)] max-[767px]:text-[32px]"
          >
            آچین‌وود
          </p>

          <h1
            data-hero-animate
            className="m-0 mt-[0.35rem] text-[clamp(2.5rem,4.45vw,4rem)] font-normal leading-[1.18] tracking-[-0.055em] text-[#565449] max-[1024px]:text-[clamp(2.5rem,6.25vw,4rem)] max-[767px]:text-[32px]"
          >
            زیبایی مهندسی‌شده!
          </h1>

          <a
            data-hero-animate
            className="mt-[clamp(2.2rem,4.5vh,3.2rem)] inline-flex min-h-[4.15rem] items-center justify-center bg-[#565449] px-8 text-[1.1rem] font-extrabold text-[#DAD1BE] no-underline transition-[background,transform,box-shadow] duration-260 hover:-translate-y-0.5 hover:bg-[#46443b] hover:shadow-[0_1rem_2rem_rgb(42_34_24/0.2)] focus-visible:-translate-y-0.5 focus-visible:bg-[#46443b] focus-visible:shadow-[0_1rem_2rem_rgb(42_34_24/0.2)] max-[767px]:mt-6 max-[767px]:min-h-11 max-[767px]:px-5 max-[767px]:text-[10px] max-[767px]:font-extrabold"
            href="#contact"
          >
            درخواست مشاوره رایگان
          </a>
        </div>

        <div className="absolute inset-s-0 bottom-10 z-2 font-sofia-pro text-[clamp(3.6rem,13vw,13rem)] font-extralight text-left uppercase text-[#FFFCF5]/90">
          <p
            data-hero-display="beauty"
            className="leading-[100%]"
            dir="ltr"
            aria-hidden="true"
          >
            BEAUTY,
          </p>

          <p
            data-hero-display="built"
            className="leading-[100%] text-nowrap lg:ms-24 ms-8"
            dir="ltr"
            aria-hidden="true"
          >
            BUILT TO LAST
          </p>
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-8 opacity-10 mix-blend-multiply bg-[radial-gradient(circle_at_25%_25%,rgb(0_0_0/0.22)_0_1px,transparent_1px),radial-gradient(circle_at_75%_75%,rgb(255_255_255/0.2)_0_1px,transparent_1px)] bg-size-[3px_3px,5px_5px]"
          aria-hidden="true"
        />
      </section>
    );
  },
);

export default HomeHeroSection;
