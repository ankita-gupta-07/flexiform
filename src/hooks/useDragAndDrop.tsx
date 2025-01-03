import { useCallback } from "react";

interface FormElement {
  type: string;
  id: string;
}

export const useDragAndDrop = (
  setCanvasElements: React.Dispatch<React.SetStateAction<FormElement[]>>
) => {
  const handleDragStart = useCallback(
    (event: React.DragEvent, element: FormElement) => {
      event.dataTransfer.setData("formElement", JSON.stringify(element));
    },
    []
  );

  const handleDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();
      const draggedElement: FormElement = JSON.parse(
        event.dataTransfer.getData("formElement")
      );
      setCanvasElements((prev) => [
        ...prev,
        { ...draggedElement, id: `${draggedElement.id}-${Date.now()}` },
      ]);
    },
    [setCanvasElements]
  );

  const handleDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
  }, []);

  return { handleDragStart, handleDrop, handleDragOver };
};
