"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import ErrorPage from "@/app/error";

interface ErrorContextType {
  setError: (error: Error) => void;
  clearError: () => void;
}

const ErrorContext = createContext<ErrorContextType | undefined>(undefined);

export const useError = () => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};

interface ErrorProviderProps {
  children: ReactNode;
}

export const ErrorProvider: React.FC<ErrorProviderProps> = ({ children }) => {
  const [error, setErrorState] = useState<Error | null>(null);

  const setError = (error: Error) => {
    setErrorState(error);
  };

  const clearError = () => {
    setErrorState(null);
  };

  return (
    <ErrorContext.Provider value={{ setError, clearError }}>
      {error ? <ErrorPage error={error} reset={clearError} /> : children}
    </ErrorContext.Provider>
  );
};
