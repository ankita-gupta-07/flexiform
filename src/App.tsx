import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import DragDrop from "./pages/DragDrop";
import { FormProvider } from "./context/FormContext";

const App: React.FC = () => (
  <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
        <Route path="/dragdrop" element={<DragDrop />} />
      </Routes>
    </Router>
  </FormProvider>
);

export default App;
