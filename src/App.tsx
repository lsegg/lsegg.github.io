import { useEffect } from "react";
import { HeaderLay } from "./shared/layouts/header/header.lay";
import { HomeScr } from "./screens/home/home.scr";
import { BlogScr } from "./screens/blog/blog.scr";
import { Routes, Route, useLocation } from "react-router-dom";
import { FEATURES } from "./features";

function App() {
  const { pathname } = useLocation();

  // One observer for every element tagged with data-reveal. Elements fade up
  // the first time they enter the viewport and then stop being watched.
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    if (!targets.length) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      targets.forEach((target) => target.classList.add("isRevealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("isRevealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className="App">
      <a className="App-skip-link" href="#main">
        Skip to content
      </a>
      <HeaderLay />
      <main className="App-section-container" id="main">
        <Routes>
          <Route path="/" element={<HomeScr />} />
          {FEATURES.blog && <Route path="/blog" element={<BlogScr />} />}
        </Routes>
      </main>
    </div>
  );
}

export default App;
