import { Link, useLocation } from "react-router-dom";
import Assignments from "./Assignments";

const Navbars = () => {
  const location = useLocation();

  return (
    <div className="bg-black text-white p-4 flex flex-wrap justify-center gap-4 shadow-lg sticky top-0 z-50">
      
      <Link
        to="/"
        className={`px-4 py-2 rounded-lg font-semibold 
        ${location.pathname === "/" ? "bg-red-500" : "hover:bg-gray-800"}`}
      >
        Home
      </Link>
{/* 
      {assignments.map((item, index) => (
        <Link
          key={index}
          to={item.path}
          className={`px-4 py-2 rounded-lg text-sm 
          ${location.pathname === item.path 
            ? "bg-red-500" 
            : "hover:bg-gray-700"}`}
        >
          {item.name}
        </Link>
      ))} */}

    </div>
  );
};

export default Navbars;