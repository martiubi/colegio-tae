import React from 'react';
import { logo } from '../assets';
import Redes from './Redes';

const Footer = () => {
  return (
    <footer className="mt-16 md:mt-[10rem] mb-4 flex flex-col">
      <div className="flex flex-row justify-around items-center">
        <img src={logo} alt="Logo" className="w-[85px] md:w-[100px]" />
        <Redes />
      </div>
      <p className="font-semibold text-center text-xs ss:text-sm">
        © Colegio Tomas Alva Edison 2023
      </p>
    </footer>
  );
};

export default Footer;
