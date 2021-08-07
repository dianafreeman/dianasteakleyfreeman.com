import React, { useState, createContext } from "react";

export const LayoutContext = createContext(null);

function LayoutProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [laptopOpen, setLaptopOpen] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        laptopOpen,
        loading,
        setLaptopOpen,
        setLoading,
      }}
    >
      {children}
    </LayoutContext.Provider>
  );
}
export default LayoutProvider;
