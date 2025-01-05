import React from "react";

interface FieldProps {
  type: string;
}

export const Field: React.FC<FieldProps> = ({ type }) => {
  return (
    <div className="p-3 mb-3 bg-green-100 border border-green-300 rounded-md">
      <label>{type}</label>
      {/* Customize the field based on the type */}
      {type === "Text Input" && (
        <input className="w-full p-2 mt-2 border rounded-md" />
      )}
      {type === "Dropdown" && (
        <select className="w-full p-2 mt-2 border rounded-md">
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="3">Option 4</option>
        </select>
      )}
      {type === "Checkbox" && (
        <div className="flex items-center mt-2">
          <input type="checkbox" className="mr-2" />
          <span>Checkbox</span>
        </div>
      )}
    </div>
  );
};
