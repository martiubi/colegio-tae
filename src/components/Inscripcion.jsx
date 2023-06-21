import React, { useState, useEffect } from 'react';
import Button from './Button';
import { form } from '../assets';
import Accordion from './Accordion';
import { requisitos } from '../constants';
import { motion, useAnimation } from 'framer-motion';

const Inscripcion = React.forwardRef((props, ref) => {
  const [activeItem, setActiveItem] = useState(null);

  //ANIMATIONS
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('inscripcion');
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
    <section id="inscripcion" className="mt-14 px-10" ref={ref}>
      <motion.h1
        className="text-primary pt-10 md:mt-[6rem] font-semibold text-3xl sm:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        Inscripción
      </motion.h1>
      <div className=" flex flex-col md:flex-row-reverse sm:pt-8 gap-5 justify-around ">
        <motion.img
          src={form}
          alt="Inscripción"
          className="mt-5 md:mt-10 ss:max-w-[30%] self-center flex-1"
          initial={{ opacity: 0, scale: 1 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        />
        <motion.div
          className="mt-5 md:mt-10 w-full flex-1 ss:w-[70%] max-w-[685.5px] md:max-w-[450px] mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {requisitos.map((item, index) => (
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
          <a
            href="https://forms.gle/YX8BPHx3tt7Jus3d8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text={'Formulario de preinscripción'}
              styles={'w-full mt-4'}
              type={'button'}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
});

export default Inscripcion;
