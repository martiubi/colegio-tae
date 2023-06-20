import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonToTop from '../components/ButtonToTop';

const LayoutNiveles = () => {
  return (
    <div>
      <Navbar layoutNiveles={true} />
      <Outlet />
      <ButtonToTop />
      <Footer />
    </div>
  );
};

export default LayoutNiveles;
