import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import Table from "../components/Table";
import EditableCell from "../components/EditableCell";

function Category() {

  const columns = [

    {
      header: "ID",
      accessorKey: "id",
      cell: (p) => <p className="text-2xl mx-6">{p.getValue()}</p>,
    },

    {
      header: "Category",
      accessorKey: "category",
      // cell: (p) => <p className="text-2xl py-2 ">{p.getValue()}</p>,
      cell:EditableCell,
    },
  ];

  const data = [
    {
      id: "1",
      category: "matrimony",
    },
    {
      id: "2",
      category: "buy & sale",
    },
    {
      id: "3",
      category: "obituary",
    },
    {
      id: "4",
      category: "praise & prayers",
    },
  ];

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="grid grid-rows-12 overflow-y-auto h-[90vh] bg-white max-sm:w-screen max-sm:mx-2">
      <div className="row-span-2 flex justify-end w-full max-sm:w-screen">
        <div className="self-center bg-blue-500 px-5 py-1  rounded-md  text-white mr-3 font-thin hover:bg-blue-400">
          Add Category
        </div>
      </div>
      <Table table={table} />
    </div>
  
  );
}

export default Category;
