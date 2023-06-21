import React, { createContext, useState } from 'react';

const NavigationContext = createContext({
  targetSection: null,
  setTargetSection: () => {},
});

export const NavigationProvider = ({ children }) => {
  const [targetSection, setTargetSection] = useState(null);

  return (
    <NavigationContext.Provider value={{ targetSection, setTargetSection }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContext;
