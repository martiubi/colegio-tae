import React from 'react';
import Button from './Button';
import Input from './Input';

const Form = () => {
  return (
    <form className="flex flex-col gap-4 mt-3">
      <Input placeholder={'Nombre y apellido'} />
      <Input placeholder={'Email'} />
      <Input placeholder={'Teléfono'} />
      <textarea
        placeholder="Escribí tu consulta..."
        rows="4"
        cols="33"
        className="shadow appearance-none border border-primary/50 rounded-md w-full placeholder:px-3 placeholder:text-sm
        placeholder:py-1"
      ></textarea>
      <Button text={'Enviar consulta'} />
    </form>
  );
};

export default Form;
