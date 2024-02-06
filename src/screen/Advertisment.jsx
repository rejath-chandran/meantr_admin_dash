
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import Table from "../components/Table";

import EditableCell from "../components/EditableCell";
function Advertisment() {
  const columns = [
    {
      header: "ID",
      accessorKey: "task",
      cell: (p) => <p>{p.getValue()}</p>,
    },
    {
      header: "Date",
      accessorKey: "name",
      cell: EditableCell,
    },
    {
      header: "Type",
      accessorKey: "name",
      cell: EditableCell,
    },
    {
      header: "Expiry Date",
      accessorKey: "name",
      cell: EditableCell,
    },
    {
      header: "Ad Image",
      accessorKey: "name",
      cell: EditableCell,
    },
    // {
    //   header: "Action",
    //   accessorKey: "name",
    //   cell:EditableCell,
    // },
  ];

  const data = [
    {
      task: "1",
      name: "rejath",
    },
  ];
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="grid grid-rows-12">
      <div className="row-span-2 flex justify-end w-full max-sm:w-screen">
        <div className="self-center bg-blue-500 px-5 py-1  rounded-md  text-white mr-3 font-thin hover:bg-blue-400">
          Create 
        </div>
      </div>
      <Table table={table} />
    </div>
  )
}

export default Advertisment