import Image from "next/image";
import LocationBox from "@/components/home/LocationBox";

export default function WorkspacesSection() {
  return (
    <section
      id="workspaces"
      data-story-step
      className="grid min-h-svh overflow-hidden bg-[#56564b] text-[#fff8e9] md:grid-cols-2 md:grid-rows-2"
      dir="rtl"
      aria-label="فضاهای کاری آچین وود"
    >
      <div
        data-story-shade
        className="relative grid min-h-[50svh] content-center px-10 pt-14 pb-12 text-center md:col-start-2 md:row-span-2 md:min-h-svh md:content-center md:px-[clamp(3rem,10vw,11rem)] md:py-[clamp(5rem,9vw,9rem)] md:text-right"
      >
        <p
          data-story-display
          className="pointer-events-none absolute top-[5rem] left-1/2 m-0 -translate-x-1/2 font-sofia-pro text-[3.4rem] font-extralight leading-[0.9] tracking-[-0.05em] text-[#11120f]/90 md:top-[clamp(9rem,22vh,15rem)] md:left-[clamp(-11rem,-8vw,-5rem)] md:translate-x-0 md:text-[clamp(5.8rem,9.2vw,10.4rem)] md:tracking-[-0.04em] md:whitespace-nowrap"
          dir="ltr"
          aria-hidden="true"
        >
          WORKSPACES
        </p>

        <div
          data-story-copy
          className="relative z-10 mx-auto mt-[6.2rem] max-w-[22rem] md:mx-0 md:ms-auto md:mt-[clamp(8rem,20vh,15rem)] md:max-w-[39rem]"
        >
          <h2 className="m-0 text-[1.58rem] font-black leading-[1.28] tracking-[-0.035em] text-[#fff8e9] md:text-[clamp(1.65rem,2.45vw,2.55rem)]">
            فضاهایی برای تصمیم‌های بزرگ
          </h2>

          <p className="mt-7 mb-0 text-center text-[0.86rem] font-medium leading-[1.65] text-[#fff8e9]/90 md:mt-5 md:text-right md:text-[clamp(0.98rem,1.15vw,1.18rem)] md:leading-[1.9] md:text-[#fff8e9]/82">
            طراحی یک فضای کاری، فقط درباره‌ی چیدمان نیست؛ درباره‌ی خلق اتمسفری‌ست که تمرکز، اعتبار و هویت برند را همزمان منتقل کند. از اتاق جلسات و سالن‌های کنفرانس تا فضاهای مدیریتی، آچین‌وود محیط‌هایی طراحی می‌کند که در آن‌ها متریال، نور، فرم و جزئیات، تصویری دقیق و حرفه‌ای از کسب‌وکار شما می‌سازند؛ فضاهایی که عملکرد را ارتقا می‌دهند و در ذهن ماندگار می‌شوند.
          </p>
        </div>
      </div>

      <div className="relative min-h-[25svh] overflow-hidden md:col-start-1 md:row-start-1 md:min-h-0">
        <Image
          alt="سالن همایش با صندلی‌های ردیفی و جزئیات چوبی"
          className="absolute inset-0 size-full object-cover object-center"
          data-story-image
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          src="/images/1fed34e0-4251-4505-a2ad-dcaa1578697a.png"
        />

        <LocationBox
          className="absolute right-8 bottom-8 z-20 min-h-9 bg-[#9d978b]/74 px-4 text-[10px] font-semibold text-[#fff8e9] shadow-[inset_0_1px_0_rgb(255_255_255/0.20)] backdrop-blur-[18px] md:right-auto md:bottom-10 md:left-10 md:min-h-[2.85rem] md:bg-[#5c574e]/78 md:text-[0.95rem]"
          iconClassName="stroke-[#fff8e9]"
          variant="white"
        >
          پروژه آمفی‌تئاتر فرهنگستان علوم، باغ کتاب تهران
        </LocationBox>
      </div>

      <div className="relative min-h-[25svh] overflow-hidden md:col-start-1 md:row-start-2 md:min-h-0">
        <Image
          alt="اتاق جلسه اداری با میز چوبی و دیوار سفید"
          className="absolute inset-0 size-full object-cover object-center"
          data-story-image
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          src="/images/c007a114-5e86-4075-8362-8a9a7179a1d3.png"
        />

        <LocationBox
          className="absolute top-8 right-8 z-20 min-h-9 bg-[#d6d2c9]/70 px-4 text-[10px] font-semibold text-[#171812] shadow-[inset_0_1px_0_rgb(255_255_255/0.28)] backdrop-blur-[18px] md:top-auto md:right-auto md:bottom-10 md:left-10 md:min-h-[2.85rem] md:bg-[#5c574e]/78 md:text-[0.95rem] md:text-[#fff8e9]"
          iconClassName="stroke-[#171812] md:stroke-[#fff8e9]"
          variant="white"
        >
          پروژه اداری شرکت حالا فاند، نیاوران
        </LocationBox>
      </div>
    </section>
  );
}
