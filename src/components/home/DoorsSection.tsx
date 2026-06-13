import Image from "next/image";
import LocationBox from "@/components/home/LocationBox";

export default function DoorsSection() {
  return (
    <section
      id="doors"
      data-story-step
      className="relative isolate min-h-svh overflow-hidden bg-[#e8ddc8] text-[#38342b]"
      dir="rtl"
      aria-label="درب‌های آچین وود"
    >
      <Image
        alt="راهروی کلاسیک روشن با درب سفید و جزئیات دیواری"
        className="absolute inset-0 -z-30 size-full object-cover object-center max-[767px]:object-[45%_center]"
        data-story-image
        fill
        sizes="100vw"
        src="/images/4acf0e5b-2902-4dcb-925b-f2b144c36724.png"
      />

      <div
        data-story-shade
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(232,221,200,0.05)_0%,rgba(232,221,200,0)_36%,rgba(232,221,200,0.40)_70%,rgba(232,221,200,0.84)_100%),linear-gradient(180deg,rgba(232,221,200,0.08)_0%,rgba(232,221,200,0.16)_100%)] before:absolute before:inset-y-0 before:right-0 before:w-[min(38rem,42vw)] before:bg-[#e8ddc8]/20 before:backdrop-blur-[10px] before:[mask-image:linear-gradient(270deg,#000_0_58%,transparent_100%)] max-[767px]:bg-[linear-gradient(180deg,rgba(232,221,200,0)_0%,rgba(232,221,200,0.18)_42%,rgba(232,221,200,0.78)_100%)] max-[767px]:before:inset-x-0 max-[767px]:before:inset-y-auto max-[767px]:before:bottom-0 max-[767px]:before:h-[58%] max-[767px]:before:w-full max-[767px]:before:[mask-image:linear-gradient(180deg,transparent_0,#000_42%)]"
        aria-hidden="true"
      />

      <LocationBox
        className="absolute bottom-[clamp(6.9rem,13.8vh,8.2rem)] left-[clamp(5.8rem,8.4vw,8.2rem)] z-20 min-h-[2.25rem] bg-[#7e786a]/40 px-4 text-[0.78rem] font-semibold text-[#38342b] shadow-[inset_0_1px_0_rgb(255_255_255/0.24)] backdrop-blur-[18px] max-[767px]:bottom-8 max-[767px]:left-5 max-[767px]:min-h-9 max-[767px]:text-[10px]"
        iconClassName="stroke-[#38342b]"
        variant="white"
      >
        پروژه مسکونی میرداماد
      </LocationBox>

      <div
        data-story-copy
        className="absolute right-[clamp(7.4rem,9.4vw,11.4rem)] top-[clamp(36rem,69vh,39rem)] z-20 w-[min(31rem,34vw)] -translate-y-1/2 text-right max-[1180px]:right-[6vw] max-[1180px]:w-[min(29rem,38vw)] max-[767px]:right-5 max-[767px]:top-auto max-[767px]:bottom-[7.4rem] max-[767px]:w-[min(20rem,calc(100vw-5.5rem))] max-[767px]:translate-y-0"
      >
        <h2 className="m-0 text-[clamp(1.35rem,1.8vw,1.85rem)] font-black leading-[1.32] tracking-[-0.035em] text-[#38342b] max-[767px]:text-[clamp(1.3rem,6vw,1.75rem)]">
          نقطه آغاز شخصیت هر خانه
        </h2>

        <p className="mt-5 mb-0 text-justify text-[clamp(0.78rem,0.95vw,0.96rem)] font-medium leading-[1.9] text-[#38342b] max-[767px]:mt-4 max-[767px]:text-[0.78rem] max-[767px]:leading-[1.82]">
          درب، یکی از عناصر مهم در معماری داخلی است که علاوه بر زیبایی، نقشی مهمی در کیفیت، دوام و هویت فضا ایفا می‌کند. آچین‌وود با بهره‌گیری از متریال باکیفیت، رنگ‌های پایدار و اجرای دقیق توسط استادکاران ماهر و باتجربه، انواع درب‌های داخلی و ورودی را متناسب با هر سبک و سلیقه تولید می‌کند.
        </p>
      </div>

      <p
        data-story-display
        className="absolute bottom-[clamp(4.5rem,8vh,5.7rem)] right-[clamp(0.75rem,1.3vw,1.4rem)] z-20 m-0 font-sofia-pro text-[clamp(4.6rem,8.1vw,8rem)] font-extralight leading-[0.82] tracking-[0.02em] text-white/70 [writing-mode:vertical-rl] max-[767px]:bottom-6 max-[767px]:right-1 max-[767px]:text-[3.6rem]"
        dir="ltr"
        aria-hidden="true"
      >
        DOORS
      </p>
    </section>
  );
}
