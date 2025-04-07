import { useEffect, useState } from "react";
import "./typing-animation.scss";

interface TypingAnimationProps {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  strings,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
  className = "",
}) => {
  const [text, setText] = useState("");
  const [currentStringIndex, setCurrentStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentStringIndex];

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setCurrentStringIndex((prev) => (prev + 1) % strings.length);
      } else {
        const timeout = setTimeout(() => {
          setText(currentString.substring(0, text.length - 1));
        }, deletingSpeed);
        return () => clearTimeout(timeout);
      }
    } else {
      if (text === currentString) {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setText(currentString.substring(0, text.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      }
    }
  }, [
    text,
    isDeleting,
    currentStringIndex,
    strings,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <p className={`typing-animation ${className}`}>
      {text}
      <span className="cursor">|</span>
    </p>
  );
};
