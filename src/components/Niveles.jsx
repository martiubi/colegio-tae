import React, { useState, useEffect } from 'react';
import { niveles } from '../constants';
import NivelButton from './NivelButton';
import { motion, useAnimation } from 'framer-motion';

const Niveles = React.forwardRef((props, ref) => {
  const [currentPage, setCurrentPage] = useState(null);
  const handleButtonClick = (id) => {
    const selectedPage = niveles.find((nivel) => nivel.id === id);
    setCurrentPage(selectedPage);
  };

  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('niveles');
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 1 && bottom > windowHeight * 1) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible && !hasPlayedAnimation) {
      controls.start({ opacity: 1, x: 0 });
      setHasPlayedAnimation(true);
    }
  }, [isVisible, controls, hasPlayedAnimation]);

  return (
    <section id="niveles" className="mt-14 px-10" ref={ref}>
      <motion.h1
        className="text-primary pt-10 md:mt-[6rem] font-semibold text-3xl sm:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.3, delay: 0.4 }}
      >
        Niveles
      </motion.h1>
      <motion.div
        className="mt-6 ss:mt-10 flex flex-col sm:flex-row sm:gap-4 w-[70%] mx-auto justify-around"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        {niveles.map((nivel) => (
          <NivelButton
            key={nivel.id}
            id={nivel.id}
            icon={nivel.icon}
            text={nivel.title}
            handleClick={handleButtonClick}
          />
        ))}
      </motion.div>
    </section>
  );
});

export default Niveles;
