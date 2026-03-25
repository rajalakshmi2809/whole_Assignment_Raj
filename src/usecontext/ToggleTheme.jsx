import { useContext } from "react";
import { ThemeContext } from "./Userscontext";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="mb-10">
    <div
      className={
        theme === "light"
          ? " bg-white text-black flex flex-col w-80   justify-center items-center gap-5 mb-5 ml-19"
          : " bg-black text-white flex flex-col  w-80 justify-center items-center gap-5 mb-5 ml-19"
      }
    >
      <h1 className="text-3xl font-bold mb-5">
        {theme === "light" ? "Light Mode" : "Dark Mode"}
      </h1>

      <button
        onClick={toggleTheme}
        className="px-5 py-2 bg-blue-500 text-white rounded gap-5"
      >
        Toggle Theme
      </button>
    </div>
    </div>
  );
}

export default App;