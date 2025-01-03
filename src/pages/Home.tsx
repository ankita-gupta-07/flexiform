import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div className="p-16">
    <h1 className="text-2xl font-bold mb-4 text-blue-700">
      Welcome to React Form Builder
    </h1>
    <div className="px-4 py-2">
      <Link to="/builder" className="bg-blue-500 px-4 py-2 text-white  rounded">
        Start Building
      </Link>
    </div>
    <div className="px-4 py-2">
      <Link to="/dragdrop" className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Building using Drag & Drop
      </Link>
    </div>
  </div>
);

export default Home;
