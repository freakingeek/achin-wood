import Image from "next/image";
import LocationBox from "@/components/home/LocationBox";

export default function WardrobesSection() {
  return (
    <section
      id="wardrobes"
      data-story-step
      className="relative isolate min-h-svh overflow-hidden bg-[#e5ded1] text-[#38342b]"
      dir="rtl"
      aria-label="کمدهای آچین وود"
    >
      <Image
        alt="اتاق خواب روشن با کمد آینه‌ای و پرده‌های بلند"
        className="absolute inset-0 -z-30 size-full object-cover object-center max-[767px]:object-[43%_center]"
        data-story-image
        fill
        sizes="100vw"
        src="/images/a6ff5284-d142-4a8b-89b9-b5c6d4d27b05.png"
      />

      <div
        data-story-shade
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(270deg,rgba(232,225,212,0.90)_0%,rgba(232,225,212,0.68)_28%,rgba(232,225,212,0.32)_48%,rgba(232,225,212,0)_72%),linear-gradient(180deg,rgba(232,225,212,0.08)_0%,rgba(232,225,212,0.14)_100%)] before:absolute before:inset-y-0 before:right-0 before:w-[min(46rem,49vw)] before:bg-[#e8e1d4]/24 before:backdrop-blur-[11px] before:[mask-image:linear-gradient(270deg,#000_0_68%,transparent_100%)] max-[767px]:bg-[linear-gradient(180deg,rgba(232,225,212,0.70)_0%,rgba(232,225,212,0.40)_31%,rgba(232,225,212,0.08)_57%,rgba(232,225,212,0)_100%)] max-[767px]:before:inset-x-0 max-[767px]:before:inset-y-0 max-[767px]:before:h-[42%] max-[767px]:before:w-full max-[767px]:before:bg-[#e8e1d4]/28 max-[767px]:before:[mask-image:linear-gradient(180deg,#000_0_72%,transparent_100%)]"
        aria-hidden="true"
      />

      <p
        data-story-display
        className="absolute top-[clamp(3.8rem,8.4vh,5.2rem)] right-[clamp(15rem,13.6vw,16.8rem)] z-20 m-0 font-sofia-pro text-[clamp(4.5rem,7.2vw,7.6rem)] font-extralight leading-[0.84] tracking-[0.055em] text-white/78 max-[1180px]:right-[8vw] max-[767px]:top-[4.7rem] max-[767px]:right-auto max-[767px]:left-[2.35rem] max-[767px]:whitespace-nowrap max-[767px]:text-[3.6rem] max-[767px]:leading-[0.78] max-[767px]:tracking-[0.035em]"
        dir="ltr"
        aria-hidden="true"
      >
        WARDROBES
      </p>

      <div
        data-story-copy
        className="absolute right-[clamp(7.8rem,8.1vw,9.8rem)] top-[clamp(8.2rem,16.8vh,9.8rem)] z-20 w-[min(27rem,31vw)] text-right max-[1180px]:right-[6vw] max-[1180px]:w-[min(26rem,36vw)] max-[767px]:top-[5.95rem] max-[767px]:right-[2.45rem] max-[767px]:w-[min(18.9rem,calc(100vw-4.8rem))]"
      >
        <h2 className="m-0 text-[clamp(1.35rem,1.75vw,1.85rem)] font-black leading-[1.32] tracking-[-0.035em] text-[#38342b] max-[767px]:text-[1.52rem]">
          نظم، به زیباترین شکل
        </h2>

        <p className="mt-5 mb-0 text-justify text-[clamp(0.78rem,0.93vw,0.96rem)] font-medium leading-[1.9] text-[#38342b] max-[767px]:mt-6 max-[767px]:text-[0.88rem] max-[767px]:leading-[1.58]">
          کمد دیواری زمانی ارزش واقعی خود را نشان می‌دهد که بخشی طبیعی از معماری خانه باشد. در طراحی‌های آچین‌وود، فرم، متریال و جزئیات اجرایی به‌گونه‌ای کنار هم قرار می‌گیرند که علاوه بر کارایی، یکپارچگی، آرامش و لوکس‌تر شدن فضا را ممکن می‌سازد؛ دقیق و متناسب با سبک زندگی مدرن.
        </p>
      </div>

      <LocationBox
        className="absolute right-[clamp(7.8rem,8.1vw,9.8rem)] top-[clamp(20.6rem,40vh,22.4rem)] z-20 min-h-[2.25rem] bg-[#7e786a]/26 px-4 text-[0.78rem] font-semibold text-[#38342b] shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] backdrop-blur-[18px] max-[1180px]:right-[6vw] max-[767px]:top-auto max-[767px]:right-[2.85rem] max-[767px]:bottom-[2.9rem] max-[767px]:min-h-9 max-[767px]:bg-[#9d978b]/72 max-[767px]:text-[10px] max-[767px]:text-[#fff8e9]"
        iconClassName="stroke-[#38342b] max-[767px]:stroke-[#fff8e9]"
        variant="white"
      >
        پروژه مسکونی گل آرا سعادت آباد
      </LocationBox>
    </section>
  );
}
