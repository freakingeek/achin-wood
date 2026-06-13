import Image from "next/image";

export default function FactorySection() {
  return (
    <section
      id="factory"
      data-story-step
      className="relative isolate min-h-svh overflow-hidden bg-[#56564b] px-5 pt-10 pb-14 text-[#fff8e9] md:grid md:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] md:grid-rows-[auto_1fr] md:gap-x-[clamp(1rem,2.4vw,2.4rem)] md:gap-y-[clamp(1rem,2.6vh,2.2rem)] md:px-[clamp(1rem,1.8vw,1.6rem)] md:pt-[clamp(0.8rem,2vh,1.4rem)] md:pb-[clamp(2.6rem,5.5vh,4rem)]"
      dir="ltr"
      aria-label="کارخانه آچین وود"
    >
      <div className="relative z-10 h-[223px] w-[250px] overflow-hidden md:col-start-1 md:row-span-2 md:h-auto md:min-h-[72svh] md:w-full md:self-center">
        <Image
          alt="درب سفید و روشویی سنگی با گل‌های ارکیده سفید"
          className="object-cover object-center"
          data-story-image
          fill
          sizes="(min-width: 768px) 54vw, 250px"
          src="/images/9f07392e-53bd-485b-a9af-ced76d978bea.png"
        />
      </div>

      <Image
        alt="Achin Wood"
        className="pointer-events-none absolute top-5 right-5 z-20 h-auto w-37 md:hidden"
        height={190}
        src="/images/logo-vertical.png"
        width={390}
        aria-hidden="true"
      />

      <div className="relative z-20 hidden self-start pt-[clamp(4rem,8vh,6rem)] md:col-start-2 md:row-start-1 md:block" dir="ltr" aria-hidden="true">
        <Image
          alt="Achin Wood"
          className="h-auto w-[min(1009px,70vw)] max-w-none -translate-x-[clamp(4rem,10vw,12rem)]"
          data-story-copy
          height={128}
          priority={false}
          src="/images/logo.png"
          width={1009}
        />
        <p className="mt-4 mb-0 font-sofia-pro text-[clamp(3.3rem,5.2vw,5.2rem)] font-extralight leading-none tracking-[0.015em] text-[#171812]">
          THE FACTORY
        </p>
      </div>

      <p
        data-story-display
        className="relative z-10 mt-8 mb-0 text-left font-sofia-pro text-[3.25rem] font-extralight leading-none tracking-[0.015em] text-[#171812] md:hidden"
        dir="ltr"
        aria-hidden="true"
      >
        THE FACTORY
      </p>

      <div
        data-story-copy
        className="relative z-10 mt-12 max-w-[19rem] justify-self-end text-right md:col-start-2 md:row-start-2 md:mt-0 md:max-w-[33rem] md:self-center md:pb-[clamp(2rem,8vh,7rem)] md:pe-[clamp(2rem,7vw,7rem)]"
      >
        <h2 className="m-0 text-[1.38rem] font-black leading-[1.35] tracking-[-0.035em] text-[#fff8e9] md:text-[clamp(1.5rem,1.9vw,2rem)]">
          ساخت، با تکیه بر جزئیات
        </h2>

        <p className="mt-5 mb-0 text-justify text-[0.72rem] font-medium leading-[1.72] text-[#fff8e9]/78 md:text-[clamp(0.82rem,0.98vw,1rem)] md:leading-[1.9]">
          آچین‌وود با بیش از ۲۵ سال سابقه در طراحی، تولید و اجرای محصولات چوبی از جمله درب، کابینت، کمد و دکوراسیون لوکس چوبی و انواع المان‌های چوبی، تکیه بر کیفیت ساخت، انتخاب متریال مرغوب و دقت در جزئیات اجرایی، آچین‌وود را به انتخابی مطمئن برای پروژه‌های مسکونی، اداری، تجاری و فضاهای لوکس تبدیل کرده است. ما در آچین‌وود باور داریم که کیفیت واقعی در جزئیات شکل می‌گیرد. به همین دلیل تمامی محصولات با گارانتی ارائه می‌شوند و تمامی مراحل از طراحی تا تولید و نصب، تحت نظارت دقیق متخصصان و مهندسان متعهد آچین‌وود انجام می‌شود.
        </p>
      </div>
    </section>
  );
}
