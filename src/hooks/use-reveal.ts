import { useEffect } from "react";

/**
 * Intersection Observer for .reveal, .reveal-left, .reveal-right, .reveal-scale elements.
 * Adds .visible class when element enters viewport.
 */
export const useRevealOnScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const selectors = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .img-reveal, .stagger-list";
    const elements = document.querySelectorAll(selectors);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

/**
 * Parallax scroll effect for background images.
 */
export const useParallaxScroll = () => {
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const elements = document.querySelectorAll<HTMLElement>(".parallax-bg");
        elements.forEach((el) => {
          const rect = el.parentElement?.getBoundingClientRect();
          if (!rect) return;
          const scrollPercent = rect.top / window.innerHeight;
          const translateY = scrollPercent * 50;
          el.style.transform = `translateY(${translateY}px) scale(1.15)`;
        });
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
