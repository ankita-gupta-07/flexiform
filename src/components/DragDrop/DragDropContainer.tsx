// src/components/Builder/DragDropContainer.tsx
import React, { useState } from "react";
import { useDragAndDrop } from "../../hooks/useDragAndDrop"; // Custom hook for drag-and-drop logic
import { Field } from "./Field"; // Assuming you already have a Field component for displaying form fields

const DragDropContainer: React.FC = () => {
  const [canvasElements, setCanvasElements] = useState<any[]>([]);
  const { handleDragStart, handleDrop, handleDragOver } =
    useDragAndDrop(setCanvasElements);

  return (
    <div className="flex space-x-6 p-5">
      {/* Left panel with draggable fields */}
      <div className="p-4 border rounded-md bg-gray-100">
        <h3 className="text-xl font-semibold mb-4">Form Fields</h3>
        <div
          className="p-3 mb-3 bg-white border border-gray-300 rounded-md cursor-pointer"
          draggable
          onDragStart={(event) =>
            handleDragStart(event, { type: "Text Input", id: "1" })
          }
        >
          Text Input
        </div>
        <div
          className="p-3 mb-3 bg-white border border-gray-300 rounded-md cursor-pointer"
          draggable
          onDragStart={(event) =>
            handleDragStart(event, { type: "Dropdown", id: "2" })
          }
        >
          Dropdown
        </div>
        <div
          className="p-3 mb-3 bg-white border border-gray-300 rounded-md cursor-pointer"
          draggable
          onDragStart={(event) =>
            handleDragStart(event, { type: "Checkbox", id: "3" })
          }
        >
          Checkbox
        </div>
      </div>

      {/* Right panel with the drop zone */}
      <div
        className="p-4 border rounded-md bg-gray-50 min-h-[400px]"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <h3 className="text-xl font-semibold mb-4">Form Canvas</h3>
        {canvasElements.map((element, index) => (
          <Field key={index} type={element.type} />
        ))}
      </div>
    </div>
  );
};

export default DragDropContainer;
