import React from "react";
import FormBuilder from "../components/FormBuilder/FormBuilder";
import FormPreview from "../components/FormBuilder/FormPreview";

const Builder: React.FC = () => (
  <div className="flex space-x-4 p-4">
    <FormBuilder />
    <FormPreview />
  </div>
);

export default Builder;
