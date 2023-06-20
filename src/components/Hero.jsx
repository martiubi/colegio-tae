import React, { forwardRef } from 'react';
import { fondo } from '../assets';
import Button from './Button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="inicio" className=" ss:h-[82vh] overflow-hidden">
      <div className=" bg-black/50 ss:absolute ss:top-0 ss:z-[-2] ss:w-full ss:h-screen ss:object-cover ss:left-0 ss:scale-100 " />
      <img
        src={fondo}
        alt="fondo"
        className="ss:absolute ss:top-0 ss:z-[-99] max-w-[130%]  ss:w-full ss:h-screen ss:object-cover ss:left-0"
      />

      <div className="text-primary items-center flex flex-col px-10 mt-6 ss:mt-12 ss:items-end">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-semibold text-3xl w-full ss:leading-[55px] ss:text-white ss:text-[6vh] ss:text-end"
        >
          Abierta la <br /> inscripción 2023
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-md font-normal mt-1 w-full ss:text-white ss:text-[2.5vh] ss:text-end"
        >
          Nivel Inicial, Primario y Secundario
        </motion.h2>
        <div className="flex flex-col gap-2 mt-4 w-full ss:flex-row ss:justify-end">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            href="#inscripcion"
          >
            <Button text={'Más información'} styles={'w-full'} />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="https://forms.gle/YX8BPHx3tt7Jus3d8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button text={'Formulario de preinscripción'} styles={'w-full'} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
