import React from "react";

type SearchBarProps = {
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, handleSearch }) => (
  <input
    type="text"
    placeholder="Search by name or description"
    value={searchTerm}
    onChange={handleSearch}
    className="p-2 mb-4 border rounded w-full max-w-md mx-auto"
  />
);

export default SearchBar;
