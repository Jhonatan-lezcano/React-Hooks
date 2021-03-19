import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <div className="container-search">
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        className="search"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
