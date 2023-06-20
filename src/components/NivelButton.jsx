import React from 'react';
import { Link } from 'react-router-dom';

const NivelButton = ({ id, icon, text, handleClick }) => {
  return (
    <Link to={`/niveles/${id}`}>
      <button
        onClick={() => handleClick(id)}
        className="flex-1 flex flex-col my-3 py-2 justify-around w-full items-center rounded-lg bg-gray-200 shadow-left-bottom cursor-pointer hover:scale-105 duration-300 ss:min-w-[145px] ss:min-h-[145px] md:flex-grow md:w-[250px]"
      >
        <img src={icon} className="object-cover" alt={text} />
        <p className="pt-2 font-semibold text-primary text-[18px] hover:text-secondary">
          {text}
        </p>
      </button>
    </Link>
  );
};

export default NivelButton;
