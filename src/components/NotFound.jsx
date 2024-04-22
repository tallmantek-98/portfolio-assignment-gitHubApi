import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-gray-800 h-screen text-[#4f66c8] flex justify-center items-center ">
      <div>
        <p className="text-[70px] font-[700]">Page not found</p>
        <p className="text-center">
          Go to <Link to="/">Home Page</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
