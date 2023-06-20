import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5137/api/sendemail', {
        name,
        email,
        phone,
        message,
      });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col gap-4 mt-3" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre y apellido"
        onChange={(e) => setName(e.target.value)}
        className="shadow appearance-none border border-primary/50 rounded-md placeholder:text-sm w-full placeholder:p-3"
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="shadow appearance-none border border-primary/50 rounded-md placeholder:text-sm w-full placeholder:p-3"
      />
      <input
        type="text"
        placeholder="Teléfono"
        onChange={(e) => setPhone(e.target.value)}
        className="shadow appearance-none border border-primary/50 rounded-md placeholder:text-sm w-full placeholder:p-3"
      />
      <textarea
        placeholder="Escribí tu consulta..."
        rows="4"
        cols="33"
        className="shadow appearance-none border border-primary/50 rounded-md w-full placeholder:px-3 placeholder:text-sm
        placeholder:py-1"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>
      <Button text={'Enviar consulta'} type={'submit'} />
    </form>
  );
};

export default Form;
