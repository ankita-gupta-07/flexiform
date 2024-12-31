import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import { FormProvider } from "./context/FormContext";

const App: React.FC = () => (
  <FormProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/builder" element={<Builder />} />
      </Routes>
    </Router>
  </FormProvider>
);

export default App;
