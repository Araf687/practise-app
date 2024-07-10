<Formik
        initialValues={{ employees: data }}
        validationSchema={salarySchema}
        onSubmit={handleFormSubmit}
      >
        {({ values }) => (
          <Form>
            <Table striped bordered>
              <thead>
                {table.getHeaderGroups().map((headerGroup: any) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header: any) => (
                      <th onClick={header.column.getToggleSortingHandler()}>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {
                          { asc: "↑", desc: "↓" }[
                            header.column.getIsSorted() ?? null
                          ]
                        } */}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                <FieldArray name="employees">
                  {({ form }: FieldArrayRenderProps) =>
                    table.getRowModel().rows.map((row) => {
                      return (
                        <tr key={row.id}>
                          {row.getVisibleCells().map((cell: any) => {
                            let cellContent =
                              cell.getValue() === null
                                ? ""
                                : flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                  );
                            return (
                              <td >
                                {isEditing ? (
                                  <Field
                                    name={cell.column.id}
                                    type={
                                      cell.column.id === "salary"
                                        ? "number"
                                        : "text"
                                    }
                                    placeholder={String(cell.getValue())}
                                  />
                                ) : (
                                  cellContent
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })
                  }
                </FieldArray>
              </tbody>
            </Table>
            {isEditing && <button type="submit">Submit</button>}
          </Form>
        )}
      </Formik>