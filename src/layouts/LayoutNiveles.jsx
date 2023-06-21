import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonToTop from '../components/ButtonToTop';
import { NavigationProvider } from '../components/NavigationContext';

const LayoutNiveles = () => {
  return (
    <div>
      <NavigationProvider>
        <Navbar layoutNiveles={true} />
        <Outlet />
        <ButtonToTop />
        <Footer />
      </NavigationProvider>
    </div>
  );
};

export default LayoutNiveles;
