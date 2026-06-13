import Image from "next/image";
import LocationBox from "@/components/home/LocationBox";

export default function SignatureDetailsSection() {
  return (
    <section
      id="signature-details"
      data-story-step
      className="grid min-h-svh overflow-hidden bg-[#d9d1bd] text-[#565347] md:grid-cols-2 md:grid-rows-2"
      dir="ltr"
      aria-label="جزئیات شاخص آچین وود"
    >
      <div className="relative order-3 min-h-[11.2rem] overflow-hidden md:order-none md:col-start-1 md:row-start-1 md:min-h-[50svh]">
        <Image
          alt="کنسول مشکی و طلایی در فضای اداری لوکس"
          className="absolute inset-0 size-full object-cover object-center max-[767px]:object-[52%_center]"
          data-story-image
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          src="/images/e358686a-1e47-419b-b9dc-8aa1848fd535.png"
        />

        <LocationBox
          className="absolute top-[clamp(1.6rem,6vh,4rem)] left-[clamp(1.4rem,6vw,5rem)] z-20 min-h-[2.25rem] bg-[#dad5c9]/82 px-4 text-[0.78rem] font-semibold text-[#38342b] shadow-[inset_0_1px_0_rgb(255_255_255/0.25)] backdrop-blur-[18px] max-[767px]:top-7 max-[767px]:left-7 max-[767px]:min-h-8 max-[767px]:px-3 max-[767px]:text-[9px] md:min-h-[2.85rem] md:text-[0.95rem]"
          dir="rtl"
          iconClassName="stroke-[#38342b]"
          variant="white"
        >
          پروژه اداری دفتر معماری، برج نیاوران پارک
        </LocationBox>
      </div>

      <div
        data-story-shade
        className="order-1 grid min-h-[28.5rem] content-start justify-items-center px-9 pt-[3.35rem] pb-7 text-right md:order-none md:col-start-2 md:row-start-1 md:min-h-[50svh] md:content-center md:px-[clamp(3rem,8vw,7rem)] md:py-14"
        dir="rtl"
      >
        <div data-story-copy className="max-w-[20rem] md:max-w-[34rem]">
          <h2 className="m-0 text-[1.32rem] font-black leading-[1.32] tracking-[-0.035em] text-[#565347] md:text-[clamp(1.45rem,2vw,2rem)]">
            جزئیاتی که خانه را کامل می‌کنند
          </h2>

          <p className="mt-5 mb-0 text-justify text-[0.73rem] font-medium leading-[1.62] text-[#565347] md:text-[clamp(0.82rem,1vw,1.02rem)] md:leading-[1.9]">
            هویت یک خانه، در جزئیاتی شکل می‌گیرد که شاید در نگاه اول دیده نشوند، اما حضورشان همه‌چیز را متفاوت می‌کند. از کنسول و میز تا آینه، اکسسوری‌ها و المان‌های دکوراتیو؛ هر قطعه در آچین‌وود، بخشی از معماری فضا طراحی می‌شود؛ با همان دقت، همان کیفیت و همان نگاه هنرمندانه که در تمام پروژه جریان دارد. نتیجه، هماهنگی‌ای‌ست که در تمام خانه احساس می‌شود.
          </p>
        </div>
      </div>

      <div
        data-story-shade
        className="order-2 -mt-[9.4rem] grid place-items-center px-8 pb-8 pt-0 md:order-none md:col-start-1 md:row-start-2 md:mt-0 md:min-h-[50svh] md:px-[clamp(2rem,6vw,5rem)] md:py-12"
      >
        <p
          data-story-display
          className="m-0 text-center font-sofia-pro text-[3.35rem] font-extralight leading-[0.92] tracking-[0.015em] text-white/82 md:text-[clamp(4.3rem,8.4vw,9rem)] md:leading-[1]"
          dir="ltr"
          aria-hidden="true"
        >
          SIGNATURE
          <br />
          DETAILS
        </p>
      </div>

      <div className="relative order-4 min-h-[11.5rem] overflow-hidden md:order-none md:col-start-2 md:row-start-2 md:min-h-[50svh]">
        <Image
          alt="راه‌پله کلاسیک سفید با نرده‌های تزئینی"
          className="absolute inset-0 size-full object-cover object-center max-[767px]:object-[50%_center]"
          data-story-image
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          src="/images/15e90abc-2a00-4eea-b6fd-ac233666b0d1.png"
        />

        <LocationBox
          className="absolute top-[clamp(1.6rem,6vh,4rem)] right-[clamp(1.4rem,5vw,4.5rem)] z-20 min-h-[2.25rem] bg-[#857d6f]/72 px-4 text-[0.78rem] font-semibold text-[#fff8e9] shadow-[inset_0_1px_0_rgb(255_255_255/0.18)] backdrop-blur-[18px] max-[767px]:top-7 max-[767px]:right-7 max-[767px]:min-h-8 max-[767px]:px-3 max-[767px]:text-[9px] md:min-h-[2.85rem] md:text-[0.95rem]"
          dir="rtl"
          iconClassName="stroke-[#fff8e9]"
          variant="white"
        >
          پروژه ویلایی لواسان
        </LocationBox>
      </div>
    </section>
  );
}
