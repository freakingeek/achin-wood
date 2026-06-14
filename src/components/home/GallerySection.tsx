"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const galleryItems = [
  {
    id: "mirror-console",
    alt: "آینه قدی قوسی با کنسول سفید و گیاهان خانگی",
    src: "/images/81c314ab-78b2-443e-ac63-9018b16ed211.png",
    sizes: "(min-width: 768px) 590px, 396px",
  },
  {
    id: "salon",
    alt: "فضای آرایشگاهی لوکس با آینه‌های طلایی و صندلی آبی",
    src: "/images/6ec53ece-779c-431d-b35a-14824a233375.png",
    sizes: "(min-width: 768px) 590px, 396px",
  },
  {
    id: "kids-room",
    alt: "اتاق کودک صورتی با تخت خانه‌ای و قفسه اسباب‌بازی",
    src: "/images/0b8b70ab-44f8-47b4-838a-b716c8f9cf3c.png",
    sizes: "(min-width: 768px) 590px, 396px",
  },
  {
    id: "door-orchid",
    alt: "درب سفید و روشویی سنگی با گل‌های ارکیده سفید",
    src: "/images/9f07392e-53bd-485b-a9af-ced76d978bea.png",
    sizes: "(min-width: 768px) 590px, 396px",
  },
  {
    id: "green-kitchen",
    alt: "آشپزخانه سبز با کابینت‌های چوبی و پنجره مرکزی",
    src: "/images/90e07d3a-8745-4941-8cd7-361047c78384.png",
    sizes: "(min-width: 768px) 590px, 396px",
  },
];

export default function GallerySection() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [canScrollBackward, setCanScrollBackward] = useState(false);
  const [canScrollForward, setCanScrollForward] = useState(true);

  const updateNavigationState = () => {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    setCanScrollBackward(track.scrollLeft > 2);
    setCanScrollForward(track.scrollLeft < track.scrollWidth - track.clientWidth - 2);
  };

  useEffect(() => {
    updateNavigationState();

    const track = trackRef.current;

    if (!track) {
      return;
    }

    track.addEventListener("scroll", updateNavigationState, { passive: true });
    window.addEventListener("resize", updateNavigationState);

    return () => {
      track.removeEventListener("scroll", updateNavigationState);
      window.removeEventListener("resize", updateNavigationState);
    };
  }, []);

  const slideGallery = (direction: 1 | -1) => {
    const track = trackRef.current;
    const firstSlide = track?.querySelector<HTMLElement>("[data-gallery-slide]");

    if (!track || !firstSlide) {
      return;
    }

    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap || "0");
    const slideDistance = firstSlide.offsetWidth + gap;

    track.scrollBy({
      left: direction * slideDistance,
      behavior: "smooth",
    });
  };

  const showPrevious = () => {
    slideGallery(-1);
  };

  const showNext = () => {
    slideGallery(1);
  };

  return (
    <section
      className="min-h-[70vh] overflow-hidden bg-[#fbfaf5] px-8 pt-20 pb-16 text-[#11120e] md:px-[clamp(1.4rem,7vw,7rem)] md:pt-[clamp(6rem,14vh,9rem)] md:pb-[clamp(4rem,10vh,7rem)]"
      data-story-step
      dir="rtl"
      aria-label="گالری آچین وود"
    >
      <div className="mb-11 flex items-center justify-end md:mb-[clamp(2.8rem,8vh,5rem)]" dir="ltr">
        <h2 className="m-0 text-right text-2xl leading-none font-medium tracking-[-0.045em] text-[#11110D] md:text-5xl" dir="rtl">
          گالری
        </h2>
      </div>

      <div className="relative">
        <button
          className="absolute top-1/2 left-0 z-20 grid size-[clamp(2.4rem,3.5vw,3.4rem)] -translate-y-1/2 place-items-center rounded-full border border-[#11120e] bg-[#fbfaf5]/80 text-[clamp(1.2rem,1.6vw,1.5rem)] leading-none text-[#11120e] backdrop-blur-sm transition hover:bg-[#11120e] hover:text-[#fbfaf5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11120e] disabled:pointer-events-none disabled:border-[#11120e]/20 disabled:text-[#11120e]/28 md:left-[clamp(-4.5rem,-3.5vw,-2.25rem)]"
          type="button"
          onClick={showPrevious}
          disabled={!canScrollForward}
          aria-label="تصویر قبلی"
        >
          ←
        </button>

        <button
          className="absolute top-1/2 right-0 z-20 grid size-[clamp(2.4rem,3.5vw,3.4rem)] -translate-y-1/2 place-items-center rounded-full border border-[#11120e] bg-[#fbfaf5]/80 text-[clamp(1.2rem,1.6vw,1.5rem)] leading-none text-[#11120e] backdrop-blur-sm transition hover:bg-[#11120e] hover:text-[#fbfaf5] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#11120e] disabled:pointer-events-none disabled:border-[#11120e]/20 disabled:text-[#11120e]/28 md:right-[clamp(-4.5rem,-3.5vw,-2.25rem)]"
          type="button"
          onClick={showNext}
          disabled={!canScrollBackward}
          aria-label="تصویر بعدی"
        >
          →
        </button>

        <div
          ref={trackRef}
          className="-mx-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-8 [scrollbar-width:none] md:-mx-[clamp(1.4rem,7vw,7rem)] md:gap-[clamp(1.2rem,2.2vw,2rem)] md:px-[clamp(1.4rem,7vw,7rem)] [&::-webkit-scrollbar]:hidden"
          dir="ltr"
        >
          {galleryItems.map((item) => (
            <div
              className="relative size-[396px] shrink-0 snap-start overflow-hidden bg-[#e7dfd0] md:size-[590px]"
              data-gallery-slide
              key={item.id}
            >
              <Image
                alt={item.alt}
                className="object-cover object-center"
                fill
                sizes={item.sizes}
                src={item.src}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
