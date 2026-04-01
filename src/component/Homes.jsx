import { useNavigate } from "react-router-dom";
import assignments from "./Assignments";

const Homes = () => {
  const navigate = useNavigate();

  return (
    // <div className="min-h-screen b from-green-400 to-blue-500 p-5 text-center">
     <div className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-5 text-center">
    {/* // <div className="min-h-screen bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#1e3a8a] p-5 text-center text-white"> */}
      
      <h1 className="bg-black text-white rounded-2xl mb-10 p-5 text-2xl font-bold shadow-lg">
        🚀 All Assignments
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {assignments.map((item, index) => (
          <button
            key={index}
            onClick={() => navigate(item.path)}
            className="bg-blue-500 hover:bg-red-500 hover:text-black 
            transition duration-300 rounded-xl p-5 font-semibold shadow-md"
          >
            {item.name}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Homes;