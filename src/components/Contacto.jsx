import React, { useEffect, useState } from 'react';
import { contacto } from '../constants';
import Form from './Form';
import { text } from '../assets';
import { motion, useAnimation } from 'framer-motion';

const Contacto = React.forwardRef((props, ref) => {
  //ANIMATIONS
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayedAnimation, setHasPlayedAnimation] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('contacto');
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
    <section id="contacto" className="mt-14 px-10" ref={ref}>
      <motion.h1
        className="text-primary pt-10 md:mt-[6rem] font-semibold text-3xl sm:text-4xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        transition={{ duration: 0.3 }}
      >
        Contacto
      </motion.h1>
      <div className="flex flex-col md:flex-row justify-around ss:w-[70%] mx-auto md:mx-0 md:w-full ss:mt-10 items-center">
        <motion.div
          className="mt-6s"
          initial={{ opacity: 0, x: -20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          {contacto.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center gap-2 mt-2"
            >
              <img src={item.icon} alt={item.id} />
              <p className="text-primary text-lg">{item.desc}</p>
            </div>
          ))}
          <div className="mt-6 ss:mt-10 mx-auto md:mx-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3141.550909498569!2d-57.5687126!3d-38.0575493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9584de13c1c4ded5%3A0xb332317f08d8f787!2sColegio%20Tom%C3%A1s%20Alva%20Edison!5e0!3m2!1ses!2sar!4v1686580684911!5m2!1ses!2sar"
              className="ss:w-[400px] ss:h-[300px]"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </motion.div>
        <motion.div
          className="w-full mt-10 md:mt-6 md:w-[40%]"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="flex gap-2 items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={text}
              alt="text-icon"
              initial={{ opacity: 0 }}
              animate={controls}
              transition={{ duration: 0.6 }}
            />
            <motion.h1
              className="text-primary font-semibold text-xl sm:text-2xl text-center"
              initial={{ opacity: 0, x: 10 }}
              animate={controls}
              transition={{ duration: 0.6 }}
            >
              ¡Escribinos!
            </motion.h1>
          </motion.div>
          <Form />
        </motion.div>
      </div>
    </section>
  );
});

export default Contacto;
