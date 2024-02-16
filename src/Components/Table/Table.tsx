import * as React from "react";
import {
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  TableBody,
  TableCell,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";

export interface IColumns<T> {
  Cell: (item: T) => React.ReactNode;
  label: string;
  align?: "inherit" | "left" | "center" | "right" | "justify";
}
interface ITableProps<T> {
  columnsData: IColumns<T>[];
  rowData: T[];
}

interface IRowProps<T> {
  columnsData: IColumns<T>[];
  item: T;
}
export const Row = <T extends Record<string, any>>({
  item,
  columnsData,
}: IRowProps<T>) => {
  return (
    <TableRow
      key={uuidv4()}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      {columnsData.map(({ Cell }) => {
        return (
          <TableCell key={uuidv4()} component="th" scope="row">
            {Cell(item)}
          </TableCell>
        );
      })}
    </TableRow>
  );
};

const MaterialTable = <T extends Record<string, any>>({
  columnsData,
  rowData,
}: ITableProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table width={"100%"} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnsData.map(({ label, align }) => (
              <TableCell key={uuidv4()} align={align}>
                {label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowData || []).map((item, index) => (
            <Row key={uuidv4()} item={item} columnsData={columnsData} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialTable;
