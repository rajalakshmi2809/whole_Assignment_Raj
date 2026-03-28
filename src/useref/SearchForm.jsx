import { useRef } from "react";

const SearchForm = () => {
  const searchRef = useRef(null);

  const handleSearch = () => {
    const value = searchRef.current.value;

    alert("Search: " + value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search here..."
        ref={searchRef}
      />

      <button onClick={handleSearch}>
        Search
      </button>
    </>
  );
};

export default SearchForm;