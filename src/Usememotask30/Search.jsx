import  { useState, useMemo } from "react";


const names = [];

for (let i = 1; i <= 5000; i++) {
  names.push("User " + i);
}

const Search = () => {

  
  const [search, setSearch] = useState("");
  const [theme, setTheme] = useState(false);

  
  const filteredData = useMemo(() => {

    console.log("Filtering Running...");

    return names.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]); 


  return (
    <div
      className={
        theme
          ? "bg-black text-white p-5"
          : "bg-yellow-300 text-black p-5"
      }
    >

      <h2>Simple useMemo Search Filter</h2>

    //search
      <input
        type="text"
        placeholder="Search name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 border"
      />

      <br /><br />

    
      <button
        onClick={() => setTheme(!theme)}
        className="bg-blue-500 text-white p-2"
      >
        Toggle Theme
      </button>

      <br /><br />

      //result
      <ul>
        {filteredData.slice(0, 20).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>
  );
};

export default Search;