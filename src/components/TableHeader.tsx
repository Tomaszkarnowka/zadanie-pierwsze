import React from "react";
import { Item } from "../types";
import SortableHeader from "./SortableHeader";

type TableHeaderProps = {
  handleSort: (key: keyof Item, direction: "asc" | "desc") => void;
};

const TableHeader: React.FC<TableHeaderProps> = ({ handleSort }) => (
  <thead>
    <tr>
      <SortableHeader title="Name" sortKey="name" handleSort={handleSort} />
      <SortableHeader
        title="Description"
        sortKey="description"
        handleSort={handleSort}
      />
      <SortableHeader title="Price" sortKey="price" handleSort={handleSort} />
    </tr>
  </thead>
);

export default TableHeader;
