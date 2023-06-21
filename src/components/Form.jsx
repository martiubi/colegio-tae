import React, { useState } from 'react';
import Button from './Button';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone || !message) {
      setShowError(true);
      return;
    }

    try {
      if (
        name.trim() === '' ||
        email.trim() === '' ||
        phone.trim() === '' ||
        message.trim() === ''
      ) {
        setShowError(true);
        return;
      }

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
      setShowError(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="flex flex-col gap-4 mt-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        placeholder="Nombre y apellido"
        onChange={(e) => setName(e.target.value)}
        className="shadow appearance-none border border-primary/50 rounded-md placeholder:text-sm w-full placeholder:p-3"
      />
      <input
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="shadow appearance-none border border-primary/50 rounded-md placeholder:text-sm w-full placeholder:p-3"
      />
      <input
        type="text"
        value={phone}
        placeholder="Teléfono"
        onChange={(e) => setPhone(e.target.value)}
        className="shadow appearance-none border border-primary/50 rounded-md placeholder:text-sm w-full placeholder:p-3"
      />
      <textarea
        placeholder="Escribí tu consulta..."
        value={message}
        rows="4"
        cols="33"
        className="shadow appearance-none border border-primary/50 rounded-md w-full placeholder:px-3 placeholder:text-sm
        placeholder:py-1"
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      {showError && (
        <div className="text-secondary">
          Por favor completa todos los campos.
        </div>
      )}

      <Button text={'Enviar consulta'} type={'submit'} />
    </form>
  );
};

export default Form;
