import { TitleCom } from "../../components/title/title.com";
import { useState, useEffect } from "react";
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

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviewsData.reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentReview = reviewsData.reviews[currentIndex];
    if (currentReview?.gender) {
      setCurrentImage(getRandomImage(currentReview.gender as "woman" | "man"));
    }
  }, [currentIndex]);

  const currentReview = reviewsData.reviews[currentIndex];

  return (
    <section className="Reviews" id="reviews">
      <TitleCom content="Reviews" sectionClass="Reviews-title" />
      <div className="Reviews-carousel">
        <div className="Reviews-review">
          <img
            src={currentImage}
            alt={currentReview.name}
            className="Reviews-review-image"
          />
          <h3 className="Reviews-review-name">{currentReview.name}</h3>
          <p className="Reviews-review-role">{currentReview.role}</p>
          <div className="Reviews-review-dialog isCard">
            <div className="Reviews-review-dialog-arrow"></div>
            <div className="Reviews-review-dialog-text">
              {currentReview.paragraphs.map((paragraph, index) => (
                <p key={index} className="Reviews-review-dialog-paragraph">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
