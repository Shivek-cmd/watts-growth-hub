import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const REVEAL_SELECTORS = ".reveal, .reveal-left, .reveal-right, .reveal-scale, .img-reveal, .stagger-list";

/**
 * Intersection Observer for scroll-triggered reveals.
 * Re-scans on every route change so new page elements get observed.
 */
export const useRevealOnScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Small delay to let the new page render its DOM
    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
      );

      const elements = document.querySelectorAll(REVEAL_SELECTORS);
      elements.forEach((el) => {
        // Reset visibility so re-entering pages re-animates
        el.classList.remove("visible");
        observer.observe(el);
      });

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);
};

/**
 * Multi-speed parallax scrolling.
 * - .parallax-bg          → standard background parallax (slow)
 * - .parallax-slow         → very subtle shift
 * - .parallax-medium       → moderate depth
 * - [data-parallax-speed]  → custom multiplier
 */
export const useParallaxScroll = () => {
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const viewH = window.innerHeight;

    // Background parallax layers
    document.querySelectorAll<HTMLElement>(".parallax-bg, .parallax-slow, .parallax-medium, [data-parallax-speed]").forEach((el) => {
      const parent = el.closest("section") || el.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();

      // Only animate if section is anywhere near the viewport
      if (rect.bottom < -200 || rect.top > viewH + 200) return;

      // Determine speed multiplier
      let speed = 0.3; // default for .parallax-bg
      if (el.classList.contains("parallax-slow")) speed = 0.15;
      if (el.classList.contains("parallax-medium")) speed = 0.25;
      if (el.dataset.parallaxSpeed) speed = parseFloat(el.dataset.parallaxSpeed);

      const offset = (rect.top - viewH / 2) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0) scale(1.15)`;
    });

    // Foreground parallax elements (content that shifts slightly)
    document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.bottom < -100 || rect.top > viewH + 100) return;

      const speed = parseFloat(el.dataset.parallax || "0.1");
      const offset = (rect.top - viewH / 2) * speed;
      el.style.transform = `translate3d(0, ${offset}px, 0)`;
    });
  }, []);

  useEffect(() => {
    let rafId: number;
    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll(); // initial position
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [handleScroll]);
};
