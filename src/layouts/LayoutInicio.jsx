import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ButtonToTop from '../components/ButtonToTop';
import { NavigationProvider } from '../components/NavigationContext';

const LayoutInicio = () => {
  return (
    <div>
      <NavigationProvider>
        <Navbar layoutNiveles={false} />
        <Outlet />
        <ButtonToTop />
        <Footer />
      </NavigationProvider>
    </div>
  );
};

export default LayoutInicio;
