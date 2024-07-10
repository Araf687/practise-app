import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { salaryTableData } from "../../utils.tsx/fakedata/salaryTableData";
import TablePagination from "./TablePagination";

interface UserData {
  id: number;
  name: string;
  salary: number;
  adjustment: number;
  penalty: number;
  total?: number;
}

interface EditableTableProps {
  columns: any;
}

const EditableTable: React.FC<EditableTableProps> = (props) => {
  const { columns } = props;
  const initialSalaryTableTotal = {
    salaryTotal: 0,
    penaltyTotal: 0,
    grandTotal: 0,
  };
  const initialData = salaryTableData.map((item: any) => {
    const total = item.salary + item.adjustment - item.penalty;
    item.total = total;
    initialSalaryTableTotal.salaryTotal += item.salary;
    initialSalaryTableTotal.penaltyTotal += item.penalty;
    initialSalaryTableTotal.grandTotal += total;
    return item;
  });
  const [salarTableTotal, setSalaryTableTotal] = useState(
    initialSalaryTableTotal
  );
  const [data, setData] = useState(initialData);

  const [edit, setEdit] = useState(false);

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(), //order doesn't matter anymore!
    autoResetPageIndex: false,
  });

  const changeInput = (
    accessorKey: keyof UserData,
    value: number,
    rowNumber: number
  ) => {
    const currentPage = tableInstance.getState().pagination.pageIndex;
    const rowPerPage = tableInstance.getState().pagination.pageSize;
    const dataIndex = currentPage * rowPerPage + rowNumber;
    console.log(dataIndex);
    setData((prevData) =>
      prevData.map((element, index) => {
        if (index === dataIndex) {
          const changeData = {
            ...element,
            [accessorKey]: value,
            total:
              accessorKey === "salary"
                ? value + element.adjustment - element.penalty
                : accessorKey === "adjustment"
                ? element.salary + value - element.penalty
                : element.salary + element.adjustment - value,
          };
          console.log(index, rowNumber, changeData);
          return changeData;
        }
        return element;
      })
    );
  };

  useEffect(() => {
    const tempData = data.map((item: any) => {
      const total = item.salary + item.adjustment - item.penalty;
      return {
        ...item,
        total,
      };
    });

    const salaryTotal = tempData.reduce((sum, item) => sum + item.salary, 0);
    const penaltyTotal = tempData.reduce((sum, item) => sum + item.penalty, 0);
    const grandTotal = tempData.reduce((sum, item) => sum + item.total, 0);

    setSalaryTableTotal({salaryTotal,penaltyTotal,grandTotal});

    // Do something with tempData, salaryTotal, penaltyTotal, and grandTotal
  }, [data]);

  return (
    <div className="p-4">
      <div className="d-flex justify-content-between">
        {!edit && (
          <Button variant="primary" onClick={() => setEdit(true)}>
            Edit Table
          </Button>
        )}
        <div className="text-end">
          <span className="me-2 bg-warning rounded p-2">
            Total Salary: <strong>{salarTableTotal.salaryTotal}</strong>
          </span>
          <span className="me-2 bg-warning rounded-xl rounded p-2">
            Total Penalty: <strong>{salarTableTotal.penaltyTotal}</strong>
          </span>
          <span className="me-2 bg-warning rounded-xl rounded p-2">
            Grand Total: <strong>{salarTableTotal.grandTotal}</strong>
          </span>
        </div>
      </div>

      <Form>
        <Table border={1} style={{ borderRadius: "10px" }}>
          <thead>
            {tableInstance.getHeaderGroups().map((headerGroup: any) => {
              return (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header: any) => {
                    return (
                      <th key={header.id} colSpan={header.colSpan}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody>
            {tableInstance
              .getRowModel()
              .rows.map((row: any, rowIndex: number) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell: any) => {
                      const accessorKey = cell.column.id;
                      const value = cell.getValue();

                      return (
                        <td key={cell.id}>
                          {edit &&
                          ["salary", "adjustment", "penalty"].includes(
                            accessorKey
                          ) ? (
                            <Form.Group controlId="exampleForm.ControlInput1">
                              <Form.Control
                                type="number"
                                defaultValue={value}
                                onChange={(e) =>
                                  changeInput(
                                    accessorKey,
                                    parseInt(e.target.value),
                                    rowIndex
                                  )
                                }
                              />
                            </Form.Group>
                          ) : (
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Form>
      <TablePagination table={tableInstance} setEdit={setEdit} edit={edit} />
    </div>
  );
};

export default EditableTable;
