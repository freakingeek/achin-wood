"use client";

import { type FormEvent, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

const successMessage = "درخواست مشاوره شما ثبت شد،کارشناسان ما همین امروز با شما ارتباط خواهند گرفت!";

export default function ContactSection() {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/consultations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          city: formData.get("city"),
          name: formData.get("name"),
          phone: formData.get("phone"),
        }),
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(data?.message ?? "ثبت درخواست با خطا مواجه شد.");
      }

      form.reset();
      setStatusMessage(data?.message ?? successMessage);
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "ثبت درخواست با خطا مواجه شد.");
    } finally {
      setIsSubmitting(false);
    }
  }
  return (
    <section
      id="contact"
      data-story-step
      className="relative isolate min-h-svh overflow-hidden bg-[#fbfaf5] px-5 pt-24 pb-8 text-[#565449] md:grid md:min-h-[70svh] md:grid-cols-[minmax(0,1fr)_minmax(20rem,24rem)] md:grid-rows-[1fr_auto] md:items-end md:gap-x-[clamp(2rem,5vw,6rem)] md:gap-y-8 md:px-[clamp(4rem,8vw,8.5rem)] md:py-[clamp(4rem,8vh,5.5rem)]"
      dir="ltr"
      aria-label="فرم تماس آچین وود"
    >
      <div className="mx-auto max-w-124 text-center md:col-start-2 md:row-start-1 md:self-start md:justify-self-end md:mx-0 md:max-w-[24rem] md:text-right" data-story-copy>
        <h2 className="achin-contact__heading m-0 text-2xl font-bold leading-[1.42] tracking-[-0.04em] text-[#565449] md:text-[32px] md:leading-[1.28]">
          مشاوره اختصاصی رایگان برای پروژه شما
        </h2>

        <p className="mt-6 mb-0 text-base font-normal leading-[1.75] text-[#565449] md:text-2xl md:leading-[1.65]">
          با ثبت درخواست، در همان روز از مشاوره رایگان کارشناسان ما بهره‌مند
          شوید.
        </p>
      </div>

      <div
        className="achin-contact__panel relative z-10 mx-auto mt-11 w-full max-w-[32.2rem] border border-[#d0cec7] bg-white/40 px-[clamp(2.45rem,8vw,3.2rem)] py-[clamp(2.4rem,6vh,3.8rem)] md:col-start-1 md:row-start-1 md:mx-0 md:mt-0 md:w-full md:max-w-[min(100%,56rem)] md:self-end md:justify-self-start md:px-[clamp(2rem,3vw,3.2rem)] md:py-[clamp(2rem,3.8vh,3rem)]"
        dir="rtl"
      >
        <form className="grid gap-8 md:gap-7" data-contact-form onSubmit={handleSubmit}>
          <div className="achin-contact__field grid gap-4 text-right md:gap-3" data-contact-field>
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
              required
              type="text"
            />
          </div>

          <div className="achin-contact__field grid gap-4 text-right md:gap-3" data-contact-field>
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
              required
              type="tel"
            />
          </div>

          <div className="achin-contact__field grid gap-4 text-right md:gap-3" data-contact-field>
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
              required
              type="text"
            />
          </div>

          <button
            className="achin-contact__submit mt-2 inline-flex h-12 items-center justify-center gap-3 bg-[#0d0f0b] px-6 text-center text-sm font-extrabold text-[#FFFCF5] transition hover:bg-[#25251f] disabled:cursor-not-allowed disabled:opacity-65 md:mt-3 md:h-[72px] md:text-2xl"
            data-contact-submit
            disabled={isSubmitting}
            type="submit"
          >
            <FaPhoneAlt className="size-4 md:size-6" aria-hidden="true" />
            <span>{isSubmitting ? "در حال ثبت..." : "درخواست مشاوره رایگان"}</span>
          </button>

          {statusMessage ? (
            <p className="m-0 text-center text-sm font-medium text-[#565449]" role="status">
              {statusMessage}
            </p>
          ) : null}
        </form>
      </div>

      <p
        className="achin-contact__display pointer-events-none mt-9 mb-0 translate-x-16 text-left font-sofia-pro text-5xl font-[250] leading-none tracking-[0.035em] text-[#DAD1BE] md:col-span-2 md:col-start-1 md:row-start-2 md:m-0 md:translate-x-0 md:self-end md:justify-self-end md:text-[clamp(76px,7vw,100px)]"
        dir="ltr"
        aria-hidden="true"
      >
        CONTACT US
      </p>
    </section>
  );
}
