import React from 'react';

const Input = ({ placeholder }) => {
  return (
    <input
      type="text"
      name="name"
      placeholder={placeholder}
      className="shadow appearance-none border border-primary/50 rounded-md placeholder:text-sm w-full placeholder:p-3"
    />
  );
};

export default Input;
