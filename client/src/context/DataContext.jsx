import React, { createContext, useContext, useEffect, useState } from 'react';
import useSWR from 'swr';

// Crea un contexto para req.session
const SessionContext = createContext();

// Proveedor del contexto para envolver tu aplicación
const SessionProvider = ({ children }) => {
  const { data: sessionData } = useSWR('/api/user'); // Usa SWR para obtener los datos de req.session

  return (
    <SessionContext.Provider value={sessionData}>
      {children}
    </SessionContext.Provider>
  );
};

export default DataContext