import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Institucion from '../components/Institucion';
import Niveles from '../components/Niveles';
import Galeria from '../components/Galeria';
import Inscripcion from '../components/Inscripcion';
import Contacto from '../components/Contacto';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (location.state && location.state.fromAnotherPage) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      setTimeout(scrollToTop, 0);
    }
  }, [location]);
  return (
    <div>
      <Hero />
      <Institucion />
      <Niveles />
      <Galeria />
      <Inscripcion />
      <Contacto />
    </div>
  );
};

export default Home;
