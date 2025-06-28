import React, {useEffect, useRef} from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { createHeaders } from "./createHeaders";
import { tableStyle } from "./tableStyles";
import { useTableResizer } from "./useTableResizer";
import TableHeaderCell from "./TableHeaderCell";

export const TableComponent = ({ setTable, rows, sx }) => {
  const { headCells, tblSearchParams } = setTable;
  const columns = createHeaders(headCells);
  console.log(rows?.length);
  console.log(columns?.length);
  const tableRef = useRef();
  const { mouseDown } = useTableResizer(columns, tableRef);

  useEffect(() => {
    const colsWidth = headCells.map((col) => col.width);
    tableRef.current.style.gridTemplateColumns = `${colsWidth.join(" ")}`;
  }, [headCells, tableRef]);

  return (
    <TableContainer
      sx={{
        ...sx,
        height: tblSearchParams.limit * 30 + 47,
        mt: 1,
      }}
    >
      <Table ref={tableRef} sx={tableStyle}>
        <TableHead>
          <TableRow>
            {columns.map((colName, i) => (
              <TableHeaderCell
                key={colName.id}
                colName={colName}
                setTable={setTable}
                columnIndex={i}
                mouseDown={mouseDown}
              />
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              {headCells.map((cell) => (
                <TableCell key={cell.id}>{row[cell.id]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
