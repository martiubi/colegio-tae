import React, { useState } from 'react';

const Accordion = ({
  index,
  icono,
  title,
  description,
  img,
  activeItem,
  setActiveItem,
}) => {
  const handleClick = () => {
    setActiveItem(activeItem === index ? null : index);
  };
  return (
    <div onClick={handleClick} className="py-1 w-full">
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-row gap-1">
          <img src={icono} alt="icon" />
          <h2 className="text-primary font-semibold">{title}</h2>
        </div>

        <span className="cursor-pointer text-secondary font-bold">
          {activeItem === index ? '-' : '+'}
        </span>
      </div>
      {activeItem === index && <p className="text-sm py-1">{description}</p>}
      {activeItem === index && img !== '' && (
        <div className="pt-3 flex gap-2 justify-center mb-1">
          {img.map((item) => (
            <img key={item.id} src={item.link} alt="" />
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
