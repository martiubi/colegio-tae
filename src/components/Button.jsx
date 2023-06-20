import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ text, styles }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`rounded-md text-white bg-secondary py-2 px-4 text-[14px] font-semibold tracking-wide hover:bg-secondaryDark duration-300 ${styles}`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
