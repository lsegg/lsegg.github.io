import { TitleCom } from "../../components/title/title.com";
import { useState, useEffect, useLayoutEffect, useMemo, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "./reviews.scss";
import reviewsData from "./reviews-data.json";

import reviewWoman1 from "../../../assets/images/review-woman-1.png";
import reviewWoman2 from "../../../assets/images/review-woman-2.png";
import reviewWoman3 from "../../../assets/images/review-woman-3.png";
import reviewMan1 from "../../../assets/images/review-man-1.png";
import reviewMan2 from "../../../assets/images/review-man-2.png";
import reviewMan3 from "../../../assets/images/review-man-3.png";
import reviewMan4 from "../../../assets/images/review-man-4.png";
import reviewMan5 from "../../../assets/images/review-man-5.png";

const imageMap = {
  woman: [reviewWoman1, reviewWoman2, reviewWoman3],
  man: [reviewMan1, reviewMan2, reviewMan3, reviewMan4, reviewMan5],
};

const getRandomImage = (gender: "woman" | "man") => {
  const images = imageMap[gender];
  return images[Math.floor(Math.random() * images.length)];
};

const ROTATION_MS = 10000;

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [frameHeight, setFrameHeight] = useState<number | null>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const total = reviewsData.reviews.length;

  // One face per review, drawn once. Re-rolling on every index change meant a
  // review came back wearing a different face each time it came round, and the
  // old state-plus-effect version rendered <img src=""> on the first paint.
  const avatars = useMemo(
    () =>
      reviewsData.reviews.map((review) =>
        getRandomImage(review.gender as "woman" | "man")
      ),
    []
  );

  // Re-arming on currentIndex means a manual jump also restarts the dwell
  // timer, instead of cutting the new quote short.
  useEffect(() => {
    const timeout = setTimeout(
      () => setCurrentIndex((prev) => (prev + 1) % total),
      ROTATION_MS
    );

    return () => clearTimeout(timeout);
  }, [currentIndex, total]);

  // The testimonials run from 365 to 752 characters, so swapping one for
  // another used to resize the section and shunt everything below it up or
  // down. Measuring the quote and animating the frame to that height turns the
  // jump into a transition, without reserving the tallest review's height as
  // dead space under the short ones (~300px of it on a phone).
  useLayoutEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;

    const sync = () =>
      setFrameHeight((previous) => {
        const next = Math.ceil(inner.getBoundingClientRect().height);
        return previous === next ? previous : next;
      });

    sync();

    // Keeps the frame honest through viewport changes and late font loads.
    const observer = new ResizeObserver(sync);
    observer.observe(inner);
    return () => observer.disconnect();
  }, [currentIndex]);

  const goTo = (index: number) => setCurrentIndex((index + total) % total);
  const currentReview = reviewsData.reviews[currentIndex];

  return (
    <section className="Reviews" id="reviews">
      <TitleCom
        content="Reviews"
        sectionClass="Reviews-title"
        eyebrow="Kind words"
      />
      <div
        className="Reviews-carousel"
        data-reveal
        style={frameHeight === null ? undefined : { height: frameHeight }}
      >
        <div className="Reviews-carousel-inner" ref={innerRef}>
          <blockquote className="Reviews-review" key={currentIndex}>
            <span className="Reviews-review-quote" aria-hidden="true">
              &ldquo;
            </span>
            <div className="Reviews-review-body">
              {currentReview.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="Reviews-review-body-paragraph paragraph-medium-regular"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <footer className="Reviews-review-attribution">
              <img
                src={avatars[currentIndex]}
                alt=""
                aria-hidden="true"
                className="Reviews-review-attribution-image"
              />
              <div className="Reviews-review-attribution-meta">
                <cite className="Reviews-review-attribution-name title-medium-semibold">
                  {currentReview.name}
                </cite>
                <p className="Reviews-review-attribution-role micro-label">
                  {currentReview.role}
                </p>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>

      <div className="Reviews-controls" data-reveal>
        <button
          type="button"
          className="Reviews-controls-arrow"
          onClick={() => goTo(currentIndex - 1)}
          aria-label="Previous review"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <ul className="Reviews-controls-dots">
          {reviewsData.reviews.map((review, index) => (
            <li key={review.name + index}>
              <button
                type="button"
                className={`Reviews-controls-dot ${
                  index === currentIndex ? "isActive" : ""
                }`}
                onClick={() => goTo(index)}
                aria-label={`Show review from ${review.name}`}
                aria-current={index === currentIndex ? "true" : undefined}
              />
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="Reviews-controls-arrow"
          onClick={() => goTo(currentIndex + 1)}
          aria-label="Next review"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </section>
  );
};
