import React from "react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
function Category() {
  const columns = [
    {
      header: "Task",
      accessorKey: "task",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      header: "Name",
      accessorKey: "name",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      header: "Action",
      accessorKey: "name",
      cell: (p) => <p>{p.getValue()}</p>,
    },
  ];

  const data = [
    {
      task: "123",
      name: "rejath",
    },
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table>
        <thead>
          <tr>
            {table
              .getHeaderGroups()
              .map((i) =>
                i.headers.map((j) => <th>{j.column.columnDef.header}</th>),
              )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>rejath</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Category;
