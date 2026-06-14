"use client";

import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/layout/Header";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import KitchensSection from "@/components/home/KitchensSection";
import LivingSpacesSection from "@/components/home/LivingSpacesSection";
import DoorsSection from "@/components/home/DoorsSection";
import WardrobesSection from "@/components/home/WardrobesSection";
import WorkspacesSection from "@/components/home/WorkspacesSection";
import SignatureDetailsSection from "@/components/home/SignatureDetailsSection";
import GallerySection from "@/components/home/GallerySection";
import FactorySection from "@/components/home/FactorySection";
import ContactSection from "@/components/home/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function MersiHome() {
  const mainRef = useRef<HTMLElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const afterHeroRef = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const main = mainRef.current;
    const section = sectionRef.current;
    const afterHero = afterHeroRef.current;

    if (!main || !section || !afterHero) {
      return;
    }

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotionQuery.matches) {
      return;
    }

    ScrollTrigger.config({ ignoreMobileResize: true });

    const context = gsap.context(() => {
      const isTouch = ScrollTrigger.isTouch === 1 || ScrollTrigger.isTouch === 2;

      gsap.fromTo(
        ".header",
        { yPercent: -100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.1 },
      );

      const heroElements = section.querySelectorAll("[data-hero-animate]");
      const beautyDisplay = section.querySelector('[data-hero-display="beauty"]');
      const builtDisplay = section.querySelector('[data-hero-display="built"]');

      gsap.fromTo(
        heroElements,
        { autoAlpha: 0, y: 34, filter: "blur(10px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.05,
          ease: "power3.out",
          stagger: 0.09,
          delay: 0.28,
        },
      );

      if (beautyDisplay) {
        gsap.fromTo(
          beautyDisplay,
          { autoAlpha: 0, x: 150, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1.15,
            ease: "power3.out",
            delay: 0.72,
          },
        );
      }

      if (builtDisplay) {
        gsap.fromTo(
          builtDisplay,
          { autoAlpha: 0, x: 190, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            x: 0,
            filter: "blur(0px)",
            duration: 1.18,
            ease: "power3.out",
            delay: 0.9,
          },
        );
      }

      gsap.utils.toArray<HTMLElement>(".achin-story-step, [data-story-step]").forEach((storyStep) => {
        const useEarlyTiming = storyStep.dataset.storyTiming === "early";
        const storyTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: storyStep,
            start: useEarlyTiming ? "top 94%" : "top 78%",
            end: useEarlyTiming ? "top 26%" : "center center",
            scrub: isTouch ? 0.2 : 0.7,
            invalidateOnRefresh: true,
          },
        });

        storyTimeline
          .fromTo(
            storyStep.querySelectorAll(".achin-after-hero__image, .achin-factory__image, [data-story-image]"),
            { scale: 1.12, filter: "blur(10px)", autoAlpha: 0.75 },
            { scale: 1, filter: "blur(0px)", autoAlpha: 1, stagger: 0.08, ease: "none" },
            0,
          )
          .fromTo(
            storyStep.querySelectorAll(
              ".achin-after-hero__shade, .achin-workspaces__panel, .achin-signature__text, .achin-signature__display-panel, [data-story-shade]",
            ),
            { autoAlpha: 0 },
            { autoAlpha: 1, stagger: 0.06, ease: "none" },
            0,
          )
          .fromTo(
            storyStep.querySelectorAll(".achin-after-hero__pill, [data-story-pill]"),
            { autoAlpha: 0, y: 34, scale: 0.92, filter: "blur(12px)" },
            { autoAlpha: 1, y: 0, scale: 1, filter: "blur(0px)", stagger: 0.08, ease: "none" },
            0.1,
          )
          .fromTo(
            storyStep.querySelectorAll(
              ".achin-after-hero__copy h2, [data-story-copy] h2, .achin-gallery__heading, .achin-factory__logo, .achin-contact__heading",
            ),
            { autoAlpha: 0, y: 48, filter: "blur(12px)", clipPath: "inset(100% 0 0 0)" },
            { autoAlpha: 1, y: 0, filter: "blur(0px)", clipPath: "inset(0% 0 0 0)", stagger: 0.08, ease: "none" },
            0.2,
          )
          .fromTo(
            storyStep.querySelectorAll(
              ".achin-after-hero__copy p, [data-story-copy] p, .achin-gallery__nav, .achin-gallery__item, .achin-factory__subtitle, .achin-contact__panel, .achin-contact__lead, .achin-contact__display, [data-contact-form]",
            ),
            { autoAlpha: 0, y: 38, filter: "blur(10px)" },
            { autoAlpha: 1, y: 0, filter: "blur(0px)", stagger: 0.08, ease: "none" },
            0.3,
          )
          .fromTo(
            storyStep.querySelector(".achin-after-hero__display, [data-story-display]"),
            { autoAlpha: 0, x: 92, y: 28, letterSpacing: "0.14em", filter: "blur(12px)" },
            { autoAlpha: 1, x: 0, y: 0, letterSpacing: "0.02em", filter: "blur(0px)", ease: "none" },
            0.42,
          )
          .fromTo(
            storyStep.querySelectorAll("[data-contact-field], [data-contact-submit]"),
            { autoAlpha: 0, y: 24, filter: "blur(8px)" },
            { autoAlpha: 1, y: 0, filter: "blur(0px)", stagger: 0.08, ease: "none" },
            0.48,
          );
      });
    }, main);

    ScrollTrigger.refresh();

    return () => {
      context.revert();
    };
  }, []);

  return (
    <main ref={mainRef} className="achin-home" id="top">
      <Header />

      <HomeHeroSection ref={sectionRef} />

      <KitchensSection ref={afterHeroRef} />

      <LivingSpacesSection />

      <DoorsSection />

      <WardrobesSection />

      <WorkspacesSection />

      <SignatureDetailsSection />

      <GallerySection />

      <FactorySection />

      <ContactSection />

      <footer className="achin-footer" dir="ltr" aria-label="اطلاعات تماس آچین وود">
        <div className="achin-footer__socials" dir="ltr">
          <a className="achin-footer__social" href="#" aria-label="واتساپ">
            <FaWhatsapp size={20} />
          </a>
          <a
            className="achin-footer__social"
            href="https://www.instagram.com/achinwood/"
            aria-label="اینستاگرام"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaInstagram size={20} />
          </a>
          <a className="achin-footer__social" href="#" aria-label="تلگرام">
            <FaTelegramPlane size={18} />
          </a>
        </div>

        <div className="achin-footer__group achin-footer__group--factory" dir="rtl">
          <p className="achin-footer__label">کارخانه:</p>
          <p className="achin-footer__value">تهران، شهریار</p>
        </div>

        <div className="achin-footer__group achin-footer__group--phone" dir="rtl">
          <p className="achin-footer__label">شماره تماس:</p>
          <p className="achin-footer__value" dir="ltr">+98 912 824 3451</p>
        </div>

        <div className="achin-footer__group achin-footer__group--email" dir="rtl">
          <p className="achin-footer__label">ایمیل:</p>
          <p className="achin-footer__value" dir="ltr">info@achinwood.com</p>
        </div>
      </footer>
    </main>
  );
}
