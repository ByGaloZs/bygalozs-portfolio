"use client";

import { useEffect, useRef, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

type CvSectionNavigationProps = {
  items: NavigationItem[];
};

export function CvSectionNavigation({ items }: CvSectionNavigationProps) {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? "");
  const isNavigationLocked = useRef(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    const updateActiveSection = () => {
      if (isNavigationLocked.current) {
        return;
      }

      const navigationLine = window.innerHeight * 0.3;
      const activeSection = sections
        .map((section, index) => {
          const bounds = section.getBoundingClientRect();
          const visibleHeight = Math.max(0, Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0));

          return {
            section,
            index,
            lineDistance: Math.abs(bounds.top - navigationLine),
            visibility: visibleHeight / Math.min(bounds.height, window.innerHeight),
          };
        })
        .filter(({ visibility }) => visibility >= 0.25)
        .sort((first, second) => second.visibility - first.visibility || first.lineDistance - second.lineDistance || second.index - first.index)[0]?.section;

      if (activeSection) {
        setActiveHref(`#${activeSection.id}`);
      }
    };

    const resumeScrollTracking = () => {
      isNavigationLocked.current = false;
      updateActiveSection();
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("wheel", resumeScrollTracking, { passive: true });
    window.addEventListener("touchstart", resumeScrollTracking, { passive: true });
    window.addEventListener("keydown", resumeScrollTracking);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("wheel", resumeScrollTracking);
      window.removeEventListener("touchstart", resumeScrollTracking);
      window.removeEventListener("keydown", resumeScrollTracking);
    };
  }, [items]);

  return (
    <nav aria-label="CV sections" className="sticky top-0 z-20 -mx-1 flex gap-x-6 overflow-x-auto border-b border-slate-200 bg-white px-1 py-3 text-sm text-slate-500 sm:gap-x-8">
      {items.map((item) => (
        <a aria-current={activeHref === item.href ? "page" : undefined} className={`cv-nav-link shrink-0 transition-colors hover:text-[#0D6EFD] ${activeHref === item.href ? "is-active" : ""}`} href={item.href} key={item.href} onClick={() => {
          isNavigationLocked.current = true;
          setActiveHref(item.href);
        }}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
