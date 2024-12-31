import React, { createContext, useContext, useState } from "react";

type FormFieldType = {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: string[]; // For dropdowns or radios
};

type FormContextType = {
  fields: FormFieldType[];
  addField: (field: FormFieldType) => void;
  removeField: (id: string) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);
export const FormProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [fields, setFields] = useState<FormFieldType[]>([]);

  const addField = (field: FormFieldType) => setFields([...fields, field]);
  const removeField = (id: string) =>
    setFields(fields.filter((field) => field.id !== id));

  return (
    <FormContext.Provider value={{ fields, addField, removeField }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormProvider");
  return context;
};
