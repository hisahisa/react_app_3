import React, { useState } from "react";
import { TableComponent } from "../components/table/TableComponent";
import { sortRows } from "../components/utils/sortUtil";

export const ItemList = ({ title }) => {
  const [tblSearchParams, setTblSearchParams] = useState({
    sort: "",
    order: "asc",
    limit: 10,
  });

  const [rows, setRows] = useState([
    { id: 1, name: "Product A", price: 1000, category: "Category 1", stock: 30, rating: 4.5 },
    { id: 2, name: "Product B", price: 2000, category: "Category 2", stock: 50, rating: 4.0 },
    { id: 3, name: "Product C", price: 1500, category: "Category 1", stock: 20, rating: 5.0 },
    { id: 4, name: "Product D", price: 3000, category: "Category 3", stock: 10, rating: 3.5 },
  ]);

  const headCells = [
    { id: "name", label: "Product Name", disableSorting: false, width: "30%" },
    { id: "price", label: "Price (Yen)", disableSorting: false, width: "15%" },
    { id: "category", label: "Category", disableSorting: false, width: "15%" },
    { id: "stock", label: "Stock", disableSorting: false, width: "20%" },
    { id: "rating", label: "Rating", disableSorting: false, width: "20%" },
  ];

  // ソート処理を実装
  const handleSort = (sortField, sortOrder) => {
    const sortedRows = sortRows(rows, sortField, sortOrder); // 外部のソート関数を呼び出し
    setRows(sortedRows);
  };

  const setTable = {
    headCells,
    tblSearchParams,
    setTblSearchParams,
    handleSort,
  };

  return (
    <>
      <h1>商品情報</h1>
      <TableComponent setTable={setTable} headCells={headCells} rows={rows} />
    </>
  );
};

export default ItemList;
