import React, { createContext, useContext, useState } from "react";

interface FormContextType {
  fields: any[];
  addField: (field: any) => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);
export const FormProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [fields, setFields] = useState<any[]>([]);

  const addField = (field: any) => {
    setFields((prev) => [...prev, field]);
  };

  return (
    <FormContext.Provider value={{ fields, addField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
