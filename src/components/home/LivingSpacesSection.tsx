import Image from "next/image";
import LocationBox from "@/components/home/LocationBox";

export default function LivingSpacesSection() {
  return (
    <section
      id="living-spaces"
      data-story-step
      data-story-timing="early"
      className="relative isolate min-h-svh overflow-hidden bg-[#142219] text-[#FFFCF5]"
      dir="rtl"
      aria-label="فضاهای زندگی آچین وود"
    >
      <Image
        alt="آشپزخانه سبز با کابینت‌های چوبی، پنجره مرکزی و ماشین لباسشویی"
        className="absolute inset-0 z-0 size-full object-cover object-center max-[767px]:object-[42%_center]"
        data-story-image
        fill
        loading="eager"
        sizes="100vw"
        src="/images/90e07d3a-8745-4941-8cd7-361047c78384.png"
      />

      <div
        data-story-shade
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[min(58rem,48vw)] bg-[#0d1812]/25 backdrop-blur-sm mask-[linear-gradient(270deg,#000_0_68%,transparent_100%)] max-[767px]:inset-x-0 max-[767px]:bottom-0 max-[767px]:top-auto max-[767px]:h-[72%] max-[767px]:w-full max-[767px]:bg-[#0d1812]/18 max-[767px]:backdrop-blur-[3px] max-[767px]:[mask-image:linear-gradient(180deg,transparent_0,#000_38%)]"
        aria-hidden="true"
      />

      <p
        data-story-display
        className="absolute -top-10 right-[clamp(5rem,9vw,20rem)] z-20 m-0 w-max max-w-none font-sofia-pro text-[100px] font-extralight leading-[0.9] tracking-[0.055em] text-[#DAD1BE] max-[767px]:top-auto max-[767px]:right-auto max-[767px]:bottom-8 max-[767px]:left-4 max-[767px]:origin-bottom-left max-[767px]:-translate-x-1 max-[767px]:-rotate-90 max-[767px]:whitespace-nowrap max-[767px]:text-[48px] max-[767px]:leading-none max-[767px]:tracking-[0.04em]"
        dir="ltr"
        aria-hidden="true"
      >
        LIVING SPACES
      </p>

      <div className="absolute top-[clamp(12rem,19vh,14.8rem)] right-[clamp(5rem,7.4vw,8.5rem)] z-20 grid w-[min(32.5rem,33vw)] justify-items-end text-right max-[767px]:top-auto max-[767px]:right-5 max-[767px]:bottom-[clamp(4.8rem,12vh,6.7rem)] max-[767px]:w-[min(20rem,calc(100vw-6.4rem))]">
        <div data-story-copy className="max-w-full">
          <h2 className="m-0 text-[clamp(1.75rem,2vw,2.35rem)] font-black leading-[1.3] tracking-[-0.035em] text-[#FFFCF5] max-[767px]:text-[clamp(1.4rem,6.4vw,1.9rem)]">
            خانه، با زبانِ جزئیات
          </h2>
          <p className="mt-6 mb-0 text-[clamp(0.98rem,1.04vw,1.14rem)] font-light leading-[1.88] text-[#FFFCF5] max-[767px]:mt-5 max-[767px]:text-[0.82rem] max-[767px]:leading-[1.85]">
            طراحی داخلی، هنر حذف اضافات و ساختن هماهنگی‌ست؛ از خطوط و حجم‌ها تا نور،
            متریال و بافت؛ هر جزئیات باید بخشی از یک تصویر کامل باشد. آچین‌وود
            فضاهایی خلق می‌کند که آرامش، لوکس بودن و هویت، در آن‌ها نه دیده می‌شود،
            بلکه احساس می‌شود.
          </p>
        </div>

        <LocationBox
          className="mt-[clamp(3.4rem,7vh,5.2rem)]"
          variant="white"
        >
          پروژه مسکونی گل آرا، سعادت آباد
        </LocationBox>
      </div>
    </section>
  );
}
