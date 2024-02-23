import { useState, useEffect } from "react";

const words = ["Hello!", "I'm Daniel.", "a multimedia designer & developer. ", "This is my portfolio."];

export default function Typewriter() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[currentWordIndex];
      if (isDeleting) {
        setCurrentText(currentWord.substring(0, currentIndex - 1));
        setCurrentIndex((prevIndex) => prevIndex - 1);
        if (currentIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
        }
      } else {
        setCurrentText(currentWord.substring(0, currentIndex + 1));
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex === currentWord.length) {
          if (currentWordIndex === words.length - 1) {
            // Stop the typewriter effect if it's the last word
            return;
          }
          setIsDeleting(true);
        }
      }
    };

    const timeout = setTimeout(type, 65);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentWordIndex, currentText, isDeleting]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <h1 id="typewriter" className="text-3xl md:text-4xl lg:text-6xl  font-bold  ">
        {currentText}
      </h1>
    </div>
  );
}
