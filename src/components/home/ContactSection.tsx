export default function ContactSection() {
  return (
    <section
      id="contact"
      data-story-step
      className="relative isolate min-h-svh overflow-hidden bg-[#fbfaf5] px-5 pt-24 pb-8 text-[#565449] md:grid md:min-h-[70svh] md:grid-cols-[2fr_0.58fr] md:items-center md:gap-[clamp(2rem,5vw,6rem)] md:px-[clamp(4rem,8vw,8.5rem)] md:py-[clamp(4rem,10vh,7rem)]"
      dir="ltr"
      aria-label="فرم تماس آچین وود"
    >
      <div className="mx-auto max-w-124 text-center md:absolute md:top-[clamp(4rem,10vh,7rem)] md:right-35 md:mx-0 md:max-w-[24rem] md:text-right">
        <h2 className="achin-contact__heading m-0 text-2xl font-bold leading-[1.42] tracking-[-0.04em] text-[#565449] md:text-[32px] md:leading-[1.28]">
          مشاوره اختصاصی رایگان برای پروژه شما
        </h2>

        <p className="mt-6 mb-0 text-base font-normal leading-[1.75] text-[#565449] md:text-2xl md:leading-[1.65]">
          با ثبت درخواست، در همان روز از مشاوره رایگان کارشناسان ما بهره‌مند
          شوید.
        </p>
      </div>

      <div
        className="achin-contact__panel mx-auto mt-11 w-full max-w-[32.2rem] border border-[#d0cec7] bg-white/40 px-[clamp(2.45rem,8vw,3.2rem)] py-[clamp(2.4rem,6vh,3.8rem)] md:col-start-1 md:row-start-1 md:mx-0 md:mt-0 md:w-[89rem] md:max-w-none md:px-[clamp(2.6rem,3.4vw,3.6rem)] md:py-[clamp(2.4rem,4.7vh,3.4rem)]"
        dir="rtl"
      >
        <form className="grid gap-8 md:gap-7">
          <div className="achin-contact__field grid gap-4 text-right md:gap-3">
            <label
              className="flex w-full justify-start gap-0.5 text-right text-xs font-normal text-[#565449] md:text-base"
              dir="rtl"
              htmlFor="contact-name"
            >
              <span>نام کامل شما</span>
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              className="h-9 border border-[#565449]/30 bg-transparent px-6 text-right text-[1rem] text-[#565449] outline-none transition placeholder:text-[#cfcbc2] focus:border-[#565449] md:h-14 md:px-5 md:text-[0.85rem]"
              placeholder="نام شما"
              type="text"
            />
          </div>

          <div className="achin-contact__field grid gap-4 text-right md:gap-3">
            <label
              className="flex w-full justify-start gap-0.5 text-right text-xs font-normal text-[#565449] md:text-base"
              dir="rtl"
              htmlFor="contact-phone"
            >
              <span>شماره همراه</span>
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-phone"
              name="phone"
              className="h-9 border border-[#565449]/30 bg-transparent px-6 text-right text-[1rem] text-[#565449] outline-none transition placeholder:text-[#cfcbc2] focus:border-[#565449] md:h-14 md:px-5 md:text-[0.85rem]"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              type="tel"
            />
          </div>

          <div className="achin-contact__field grid gap-4 text-right md:gap-3">
            <label
              className="flex w-full justify-start gap-0.5 text-right text-xs font-normal text-[#565449] md:text-base"
              dir="rtl"
              htmlFor="contact-city"
            >
              <span>شهر</span>
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="contact-city"
              name="city"
              className="h-9 border border-[#565449]/30 bg-transparent px-6 text-right text-[1rem] text-[#565449] outline-none transition placeholder:text-[#cfcbc2] focus:border-[#565449] md:h-14 md:px-5 md:text-[0.85rem]"
              placeholder="تهران"
              type="text"
            />
          </div>

          <button
            className="achin-contact__submit mt-2 h-12 bg-[#0d0f0b] px-6 text-center text-sm font-extrabold text-[#FFFCF5] transition hover:bg-[#25251f] md:mt-3 md:h-[72px] md:text-2xl"
            type="button"
          >
            درخواست مشاوره رایگان
          </button>
        </form>
      </div>

      <p
        className="achin-contact__display pointer-events-none mt-9 mb-0 translate-x-16 text-left font-sofia-pro text-5xl font-[250] leading-none tracking-[0.035em] text-[#DAD1BE] md:absolute md:right-[clamp(4rem,8vw,8.5rem)] md:bottom-[clamp(4.8rem,10vh,7.4rem)] md:m-0 md:translate-x-0 md:text-[100px]"
        dir="ltr"
        aria-hidden="true"
      >
        CONTACT US
      </p>
    </section>
  );
}
