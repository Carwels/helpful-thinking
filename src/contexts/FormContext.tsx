import React, { createContext, useState } from 'react';

interface FormContextType {
  isOpen: boolean;
  openForm: () => void;
  closeForm: () => void;
}

const initialFormContext: FormContextType = {
  isOpen: false,
  openForm: () => {},
  closeForm: () => {}
};

export const FormContext = createContext<FormContextType>(initialFormContext);

interface FormProviderProps {
  children: React.ReactNode;
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openForm = () => {
    console.log('Opening form...');
    setIsOpen(true);
  };

  const closeForm = () => {
    console.log('Closing form...');
    setIsOpen(false);
  };

  return (
    <FormContext.Provider value={{ isOpen, openForm, closeForm }}>
      {children}
    </FormContext.Provider>
  );
};
