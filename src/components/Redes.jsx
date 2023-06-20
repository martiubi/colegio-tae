import React from 'react';
import { redesSociales } from '../constants';

const Redes = ({ white }) => {
  return (
    <div className="flex flex-row">
      {redesSociales.map((red, index) => (
        <a href={red.link} key={red.id}>
          <img
            src={white ? `${red.iconWhite}` : `${red.icon}`}
            alt={red.title}
            className={`${
              index === redesSociales.length - 1 ? 'mr-0' : 'mr-2'
            } hover:scale-105 duration-300`}
          />
        </a>
      ))}
    </div>
  );
};

export default Redes;
