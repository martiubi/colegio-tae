import React, { useEffect, useContext, useRef } from 'react';
import Hero from '../components/Hero';
import Institucion from '../components/Institucion';
import Niveles from '../components/Niveles';
import Galeria from '../components/Galeria';
import Inscripcion from '../components/Inscripcion';
import Contacto from '../components/Contacto';
import { useLocation } from 'react-router-dom';
import NavigationContext from '../components/NavigationContext';

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

  //scroll
  const { targetSection } = useContext(NavigationContext);
  const sectionRefs = useRef({
    hero: React.createRef(),
    institucion: React.createRef(),
    niveles: React.createRef(),
    galeria: React.createRef(),
    inscripcion: React.createRef(),
    contacto: React.createRef(),
  });

  useEffect(() => {
    if (targetSection) {
      const sectionRef = sectionRefs.current[targetSection];
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [targetSection]);

  return (
    <div>
      <Hero ref={sectionRefs.current.hero} />
      <Institucion ref={sectionRefs.current.institucion} />
      <Niveles ref={sectionRefs.current.niveles} />
      <Galeria ref={sectionRefs.current.galeria} />
      <Inscripcion ref={sectionRefs.current.inscripcion} />
      <Contacto ref={sectionRefs.current.contacto} />
    </div>
  );
};

export default Home;
