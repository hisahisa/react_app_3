import React, { useState } from "react";
import { TableComponent } from "../components/table/TableComponent";
import { sortRows } from "../components/utils/sortUtil";

export const UserList = ({title}) => {
  const [tblSearchParams, setTblSearchParams] = useState({
    sort: "",
    order: "asc",
    limit: 10,
  });

  const [rows, setRows] = useState([
    { id: 1, name: "Name 2", age: 30, address: "Address 2" },
    { id: 2, name: "Name 1", age: 25, address: "Address 1" },
    { id: 3, name: "Name 3", age: 35, address: "Address 3" },
    { id: 4, name: "Name 4", age: 25, address: "Address 4" },
  ]);

  const headCells = [
    { id: "name", label: "Name", disableSorting: false, width: "30%" },
    { id: "age", label: "Age", disableSorting: false, width: "30%" },
    { id: "address", label: "Address", disableSorting: false, width: "40%" },
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
        <h1>人事情報</h1>
        <TableComponent setTable={setTable}
                        headCells={headCells} rows={rows} />
      </>
  );
};

export default UserList;
