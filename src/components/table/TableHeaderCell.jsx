import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";
import { tableSortStyle, spanStyle } from "./tableStyles";

const TableHeaderCell = ({ colName, setTable, columnIndex, mouseDown }) => {
  const { tblSearchParams, setTblSearchParams, handleSort } = setTable;
  const handleSortData = (cellId) => {
    let order = "asc";
    if (tblSearchParams?.sort === cellId && tblSearchParams?.order === "asc") {
      order = "desc"; // 昇順→降順に切り替え
    }
    setTblSearchParams({ ...tblSearchParams, sort: cellId, order: order });
    handleSort(cellId, order);
  };

  return (
    <TableCell
      ref={colName.ref}
      align="center"
      sortDirection={
        tblSearchParams.sort === colName.id ? tblSearchParams.order : false
      }
    >
      {colName.disableSorting ? (
        colName.label
      ) : (
        <TableSortLabel
          active={tblSearchParams.sort === colName.id}
          direction={
            tblSearchParams.sort === colName.id
              ? tblSearchParams.order
              : "asc"
          }
          onClick={() => handleSortData(colName.id)}
          sx={tableSortStyle}
        >
          {colName.label}
        </TableSortLabel>
      )}
      <span style={spanStyle} onMouseDown={() => mouseDown(columnIndex)}></span>
    </TableCell>
  );
};

export default TableHeaderCell;
