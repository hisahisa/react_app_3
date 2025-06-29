import React, { useState } from "react";
import { TableComponent } from "../components/table/TableComponent";
import { sortRows } from "../components/utils/sortUtil";

export const StoreList = ({ title }) => {
  const [tblSearchParams, setTblSearchParams] = useState({
    sort: "",
    order: "asc",
    limit: 5,
  });

  const [rows, setRows] = useState([
    { id: 1, name: "Store A", location: "Tokyo"},
    { id: 2, name: "Store B", location: "Osaka"},
    { id: 3, name: "Store C", location: "Kyoto"},
    { id: 4, name: "Store D", location: "Hokkaido"},
    { id: 5, name: "Store E", location: "Fukuoka"},
  ]);

  const headCells = [
    { id: "name", label: "店舗名", disableSorting: false, width: "50%" },
    { id: "location", label: "所在地", disableSorting: false, width: "50%" },
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
      <h1>{title || "店舗一覧"}</h1>
      <TableComponent setTable={setTable} headCells={headCells} rows={rows} />
    </>
  );
};

export default StoreList;
