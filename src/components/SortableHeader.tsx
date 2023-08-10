import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { Item } from "../types";

type SortableHeaderProps = {
  title: string;
  sortKey: keyof Item;
  handleSort: (key: keyof Item, direction: "asc" | "desc") => void;
};

const SortableHeader: React.FC<SortableHeaderProps> = ({
  title,
  sortKey,
  handleSort,
}) => (
  <th className="py-2">
    <div className="flex justify-center items-center">
      <button onClick={() => handleSort(sortKey, "asc")}>
        <ChevronUpIcon className="h-6 w-6" />
      </button>
      <span className="mx-2">{title}</span>
      <button onClick={() => handleSort(sortKey, "desc")}>
        <ChevronDownIcon className="h-6 w-6" />
      </button>
    </div>
  </th>
);

export default SortableHeader;
