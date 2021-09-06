import React, { useState, createContext } from "react";

export const LaptopContext = createContext(null);

function LaptopProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [laptopOpen, setLaptopOpen] = useState(false);

  return (
    <LaptopContext.Provider
      value={{
        laptopOpen,
        setLaptopOpen,
        loading,
        setLoading,
      }}
    >
      {children}
    </LaptopContext.Provider>
  );
}
export default LaptopProvider;
