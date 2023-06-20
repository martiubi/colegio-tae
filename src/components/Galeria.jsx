import React, { useRef, useState, useEffect } from 'react';
import { mainGallery } from '../constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import Redes from './Redes';
import 'swiper/css/pagination';
import 'swiper/css';
import { motion, useAnimation } from 'framer-motion';

const Galeria = () => {
  const windowSize = useRef([window.innerWidth, window.innerHeight]);
  const initialWidth = windowSize.current[0];
  let initialSlides;
  if (initialWidth < 480) {
    initialSlides = 1;
  } else if (initialWidth < 620) {
    initialSlides = 2;
  } else if (initialWidth < 1060) {
    initialSlides = 3;
  } else {
    initialSlides = 4;
  }

  const [slides, setSlides] = useState(initialSlides);
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      windowSize.current = [newWindowWidth, window.innerHeight];

      if (newWindowWidth < 480) {
        setSlides(1);
      } else if (newWindowWidth < 620) {
        setSlides(2);
      } else if (newWindowWidth < 1060) {
        setSlides(3);
      } else {
        setSlides(4);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window]);

  //ANIMATIONS
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('galeria');
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
    <section id="galeria" className="mt-14 px-10">
      <div className="flex flex-col items-center text-primary">
        <motion.h1
          className=" mt-10 md:mt-[6rem] font-semibold text-3xl sm:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          Galería de <span className="text-secondary">imágenes</span>
        </motion.h1>
        <motion.p
          className="pt-2 text-center text-md"
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          Momentos que hacen a la historia del Colegio.
        </motion.p>
      </div>

      <div className="mt-4 w-full h-full">
        <Swiper
          modules={[Pagination]}
          pagination={true}
          spaceBetween={10}
          slidesPerView={slides}
        >
          {mainGallery.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.link}
                alt={img.alt}
                className="w-full h-[292.5px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <motion.div
        className="mt-4 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.3, delay: 1 }}
      >
        <p className="pt-5 text-center text-md pb-3 font-semibold">
          ¡Encontrá más en nuestras redes sociales!
        </p>
        <Redes />
      </motion.div>
    </section>
  );
};

export default Galeria;
