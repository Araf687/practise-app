import React from "react";
import { Button, Form, Pagination } from "react-bootstrap";

interface PaginationProps {
    table: any;
    edit:boolean;
    setEdit: (value:boolean) => void;
}

const TablePagination: React.FC<PaginationProps> = ({ table,edit, setEdit }) => {
    return (
        <div className="d-flex justify-content-between align-items-center">
            <Pagination>
                <Pagination.First
                    onClick={() => table.firstPage()}
                    disabled={!table.getCanPreviousPage()}
                />
                <Pagination.Prev
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                />
                <Pagination.Next
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                />
                <Pagination.Last
                    onClick={() => table.lastPage()}
                    disabled={!table.getCanNextPage()}
                />
                <Form.Select
                    value={table.getState().pagination.pageSize}
                    onChange={(e) => {
                        table.setPageSize(Number(e.target.value));
                    }}
                    className="ms-3"
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {pageSize}
                        </option>
                    ))}
                </Form.Select>
            </Pagination>
            {edit && <Button variant="primary" onClick={() => setEdit(false)} className="ms-3">
                Submit Form
            </Button>}
        </div>
    );
};

export default TablePagination;
