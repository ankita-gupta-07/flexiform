import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => (
  <div className="p-4">
    <h1 className="text-2xl font-bold mb-4 text-blue-700">
      Welcome to React Form Builder
    </h1>
    <Link to="/builder" className="bg-blue-500 text-white px-4 py-2 rounded">
      Start Building
    </Link>
  </div>
);

export default Home;
