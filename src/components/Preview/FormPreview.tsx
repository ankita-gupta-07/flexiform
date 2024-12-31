import React from "react";
import { useFormContext } from "../../context/FormContext";

const FormPreview: React.FC = () => {
  const { fields } = useFormContext();

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Form Preview</h2>
      <form className="space-y-4">
        {fields.map((field) => (
          <div key={field.id}>
            <label className="block mb-2">{field.label}</label>
            {field.type === "textarea" ? (
              <textarea
                className="border p-2 rounded w-full"
                placeholder={field.placeholder}
              ></textarea>
            ) : (
              <input
                type={field.type}
                className="border p-2 rounded w-full"
                placeholder={field.placeholder}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormPreview;
