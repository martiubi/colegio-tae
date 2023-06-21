import React, { useState, useEffect } from 'react';
import { classroom } from '../assets';
import { institucionInfo } from '../constants';
import Accordion from './Accordion';
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';

const Institucion = React.forwardRef((props, ref) => {
  const [activeItem, setActiveItem] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('institucion');
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (top < windowHeight * 0.7 && bottom > windowHeight * 0.7) {
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
    <section id="institucion" className="mt-[5rem] px-10" ref={ref}>
      <div className="mt-0 border-t-2 border-secondary w-[60%] ml-auto mr-auto ss:border-none" />
      <motion.h1
        className="text-primary pt-10 sm:mt-0 font-semibold text-3xl sm:text-4xl text-center xl:mt-[100px]"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        La institución
      </motion.h1>
      <motion.div
        className="mt-5 w-full flex flex-col items-center md:flex-row sm:justify-around md:mt-10"
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="flex flex-col w-full ss:items-center sm:h-full md:w-[40%]"
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.img
            src={classroom}
            alt="classroom"
            className="mt-2 md:mt-5 ss:w-[45%] md:w-[90%] self-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.4 }}
          />
          <motion.h2
            className="text-white font-semibold bg-secondary w-full text-center py-3 tracking-wide mt-6 ss:w-[70%] md:w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={controls}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            "Construir para {''}
            <span className="text-[8px] font-semibold font-poppins">
              <TypeAnimation
                sequence={['crecer', 2000, 'pensar', 2000, 'soñar', 2000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '2em', display: 'inline-block' }}
              />
            </span>
            "
          </motion.h2>
        </motion.div>
        <motion.div
          className="mt-10 md:mt-0 flex flex-col w-full ss:w-[70%] md:w-[40%] max-w-[685.5px]"
          initial={{ opacity: 0, x: 20 }}
          animate={controls}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {institucionInfo.map((item, index) => (
            <Accordion
              key={index}
              icono={item.icono}
              title={item.title}
              description={item.description}
              img={item.images}
              index={index}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
});
export default Institucion;
