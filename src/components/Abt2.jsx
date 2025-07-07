import React, { useEffect, useRef, useState, useMemo } from 'react';
import '../style/Abt2.css';

const Abt2 = () => {
  const paragraph ="I’m Sujeendhar M, a passionate and detail-oriented B.E. Computer Science student currently in my third year. I specialize in Java Full Stack Development, with strong skills in HTML, CSS, Bootstrap, JavaScript, React JS, Java, Spring Boot, and MySQL. I’ve independently developed a Java-based BricksBreaker ball game and enjoy building real-world applications that blend creativity with functionality. I’m eager to work in domains that align with my technical strengths and constantly seek opportunities to learn and innovate. Beyond coding, I’m also proficient in tools like MS Word, Excel, and PowerPoint, which support my academic and project work efficiently.";
  const words = useMemo(() => paragraph.split(" "), []);

  const [currentIndex, setCurrentIndex] = useState(-1);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setCurrentIndex(0);
    }, 3500);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    if (currentIndex === -1) return;

    if (currentIndex < words.length) {
      const wordLength = words[currentIndex].length;
      const delay = 300 + wordLength * 25;

      timeoutRef.current = setTimeout(() => {
        setCurrentIndex((prev) => prev + 1);
      }, delay);
    } else {
      timeoutRef.current = setTimeout(() => {
        setCurrentIndex(0);
      }, 1000);
    }

    return () => clearTimeout(timeoutRef.current);
  }, [currentIndex, words]);

  return (
    <div className="reader">
      {words.map((word, index) => (
        <span key={index} className={index === currentIndex ? 'highlight' : ''}>
          {word + ' '}
        </span>
      ))}
    </div>
  );
};

export default Abt2;
