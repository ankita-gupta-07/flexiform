import React, { useState } from "react";
import { useFormContext } from "../../context/FormContext";
import { v4 as uuidv4 } from "uuid";

const FormBuilder: React.FC = () => {
  const { addField } = useFormContext();
  const [fieldType, setFieldType] = useState("text");
  const [label, setLabel] = useState("");

  const handleAddField = () => {
    addField({
      id: uuidv4(),
      label,
      type: fieldType,
      placeholder: "",
    });
    setLabel("");
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-blue-600">Form Builder</h2>
      <div className="space-y-4">
        <input
          type="text"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          placeholder="Field Label"
          className="border p-2 rounded w-full"
        />
        <select
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="textarea">Textarea</option>
          <option value="select">Dropdown</option>
        </select>
        <button
          onClick={handleAddField}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Field
        </button>
      </div>
    </div>
  );
};

export default FormBuilder;
