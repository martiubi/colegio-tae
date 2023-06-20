import React, { useEffect, useState } from 'react';
import { arrowUp } from '../assets';

const ButtonToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 35) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <div
        className={`rounded-full max-w-[1024px] ${
          isVisible ? 'fixed' : 'hidden'
        } fixed z-[9999] bottom-7 right-7 bg-white cursor-pointer`}
        onClick={scrollToTop}
      >
        <img src={arrowUp} alt="ToTop" className="w-[35px]" />
      </div>
    </div>
  );
};

export default ButtonToTop;
