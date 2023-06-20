import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { niveles } from '../constants';
import { AnimatePresence } from 'framer-motion';

//Layout
import LayoutInicio from '../layouts/LayoutInicio';
import LayoutNiveles from '../layouts/LayoutNiveles';
//Pages
import Home from '../pages/Home';
import Error404 from '../pages/Error404';
import Nivel from '../pages/Nivel';
import Proximamente from '../pages/Proximamente';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LayoutInicio />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/niveles" element={<LayoutNiveles />}>
          {niveles.map((nivel) => (
            <Route
              key={nivel.id}
              path={`/niveles/${nivel.id}`}
              element={<Nivel data={nivel} />}
            ></Route>
          ))}
        </Route>
        <Route path="*" element={<Error404 />} />
        <Route path="/proximamente" element={<Proximamente />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
