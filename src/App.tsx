import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import TableHeader from "./components/TableHeader";
import TableRow from "./components/TableRow";
import { initialItems } from "./DUMMY_DATA/initialItems";
import { Item } from "./types";

function App() {
  const [items, setItems] = useState(initialItems);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSort = (key: keyof Item, direction: "asc" | "desc") => {
    const sortedItems = [...items].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setItems(sortedItems);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setItems(initialItems);
    } else {
      const filteredItems = initialItems.filter(
        (item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          item.description.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setItems(filteredItems);
    }
  };

  return (
    <div className="container mx-auto p-4 md:px-8">
      <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
      <table className="min-w-full bg-white border">
        <TableHeader handleSort={handleSort} />
        <tbody>
          {items.map((item, index) => (
            <TableRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
