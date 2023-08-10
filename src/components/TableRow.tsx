import React from "react";
import { Item } from "../types";

type TableRowProps = {
  item: Item;
};

const TableRow: React.FC<TableRowProps> = ({ item }) => (
  <tr>
    <td className="py-2 px-4 border">{item.name}</td>
    <td className="py-2 px-4 border">{item.description}</td>
    <td className="py-2 px-4 border">{item.price}</td>
  </tr>
);

export default TableRow;
