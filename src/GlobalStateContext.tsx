"use client"
import { createContext, useContext, useState } from 'react';

interface GlobalState {
  ahoraNo: boolean;
  setAhoraNo: React.Dispatch<React.SetStateAction<boolean>>;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const GlobalStateProvider = ({ children }: Readonly<{
  children: React.ReactNode;
}>) => {
  const [ahoraNo, setAhoraNo] = useState(false);
  return (
    <GlobalStateContext.Provider value={{ ahoraNo, setAhoraNo }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
