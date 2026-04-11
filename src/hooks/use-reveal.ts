import { useEffect } from "react";

/**
 * Intersection Observer for .reveal elements.
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

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

/**
 * Parallax scroll effect for background images.
 * Elements with .parallax-bg get translateY based on scroll.
 */
export const useParallaxScroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll<HTMLElement>(".parallax-bg");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const scrollPercent = rect.top / window.innerHeight;
        const translateY = scrollPercent * 40;
        el.style.transform = `translateY(${translateY}px) scale(1.1)`;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};

/**
 * Counter animation for stat numbers.
 */
export const useCounterAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const target = parseInt(el.dataset.target || "0", 10);
            const suffix = el.dataset.suffix || "";
            let current = 0;
            const step = Math.max(1, Math.floor(target / 60));
            const timer = setInterval(() => {
              current += step;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              el.textContent = current + suffix;
            }, 20);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    const counters = document.querySelectorAll(".counter");
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};
