import { useContext } from "react";
import { ThemeContext } from "./Userscontext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="bg-green-400 p-10 w-100 h-100 text-2xl justify-center ml-150 rounded-3xl flex-row">
       <h1>Task 1</h1>
      <div className="items-center justify-center flex  mr-5 mt-25">
       
    <div
      className={
        theme === "light"
          ? " bg-white text-black flex flex-col w-80   justify-center items-center gap-5 mb-5 ml-19"
          : " bg-black text-white flex flex-col  w-80 justify-center items-center gap-5 mb-5 ml-19"
      }
    >
      <h1 className="text-3xl font-bold my-2">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        className="p-1 bg-blue-500 text-black  rounded  mb-3 gap-5"
      >
        Toggle Theme
      </button>
      </div>
    </div>
    </div>
  );
}

export default App;