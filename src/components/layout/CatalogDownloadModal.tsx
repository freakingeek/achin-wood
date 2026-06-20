"use client";

import { type FormEvent, useCallback, useEffect, useRef, useState } from "react";

type CatalogDownloadModalProps = {
  catalogHref: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function CatalogDownloadModal({ catalogHref, isOpen, onClose }: CatalogDownloadModalProps) {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    if (isSubmitting) {
      return;
    }

    setStatusMessage("");
    onClose();
  }, [isSubmitting, onClose]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeoutId = window.setTimeout(() => {
      phoneInputRef.current?.focus();
    }, 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timeoutId);
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose, isOpen]);

  if (!isOpen) {
    return null;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("/api/catalog-downloads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          phone: formData.get("phone"),
        }),
      });

      const data = (await response.json().catch(() => null)) as { message?: string } | null;

      if (!response.ok) {
        throw new Error(data?.message ?? "ثبت اطلاعات با خطا مواجه شد.");
      }

      const link = document.createElement("a");
      link.href = catalogHref;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      document.body.appendChild(link);
      link.click();
      link.remove();

      form.reset();
      setStatusMessage("");
      handleClose();
    } catch (error) {
      setStatusMessage(error instanceof Error ? error.message : "ثبت اطلاعات با خطا مواجه شد.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 px-5" dir="rtl">
      <button
        aria-label="بستن پنجره دانلود کاتالوگ"
        className="absolute inset-0 cursor-default"
        disabled={isSubmitting}
        onClick={handleClose}
        type="button"
      />

      <div
        aria-labelledby="catalog-download-title"
        aria-modal="true"
        className="relative z-10 w-full max-w-[31rem] border border-[#d0cec7] bg-[#fbfaf5] px-6 py-7 text-right shadow-[0_24px_80px_rgba(0,0,0,0.24)] md:px-8 md:py-9"
        role="dialog"
      >
        <button
          aria-label="بستن"
          className="absolute top-4 left-4 inline-flex size-9 items-center justify-center text-2xl leading-none text-[#565449] transition hover:text-[#11110D] focus-visible:outline-none"
          disabled={isSubmitting}
          onClick={handleClose}
          type="button"
        >
          ×
        </button>

        <h2 id="catalog-download-title" className="m-0 text-2xl font-bold leading-[1.5] text-[#565449] md:text-[28px]">
          دانلود کاتالوگ آچین وود
        </h2>

        <p className="mt-3 mb-0 text-sm leading-7 text-[#565449]/80 md:text-base">
          برای دریافت کاتالوگ، شماره همراه خود را وارد کنید. ثبت نام اختیاری است.
        </p>

        <form className="mt-8 grid gap-5" onSubmit={handleSubmit}>
          <div className="grid gap-3">
            <label className="text-sm font-medium text-[#565449] md:text-base" htmlFor="catalog-download-name">
              نام شما
            </label>
            <input
              id="catalog-download-name"
              name="name"
              className="h-12 border border-[#565449]/30 bg-transparent px-4 text-right text-base text-[#565449] outline-none transition placeholder:text-[#cfcbc2] focus:border-[#565449]"
              placeholder="اختیاری"
              type="text"
            />
          </div>

          <div className="grid gap-3">
            <label className="text-sm font-medium text-[#565449] md:text-base" htmlFor="catalog-download-phone">
              شماره همراه
            </label>
            <input
              ref={phoneInputRef}
              id="catalog-download-phone"
              name="phone"
              className="h-12 border border-[#565449]/30 bg-transparent px-4 text-right text-base text-[#565449] outline-none transition placeholder:text-[#cfcbc2] focus:border-[#565449]"
              inputMode="tel"
              placeholder="۰۹۱۲۳۴۵۶۷۸۹"
              required
              type="tel"
            />
          </div>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row-reverse sm:items-center sm:justify-start">
            <button
              className="inline-flex h-12 items-center justify-center bg-[#11110D] px-6 text-sm font-bold text-[#FFFCF5] transition hover:bg-[#25251f] disabled:cursor-not-allowed disabled:opacity-65"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "در حال ثبت..." : "ثبت و دانلود کاتالوگ"}
            </button>

            <button
              className="inline-flex h-12 items-center justify-center border border-[#565449]/25 px-6 text-sm font-medium text-[#565449] transition hover:border-[#565449] hover:text-[#11110D] disabled:cursor-not-allowed disabled:opacity-65"
              disabled={isSubmitting}
              onClick={handleClose}
              type="button"
            >
              انصراف
            </button>
          </div>

          {statusMessage ? (
            <p className="m-0 text-sm font-medium text-[#565449]" role="status">
              {statusMessage}
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
