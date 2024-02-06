import React from 'react'

import { Link } from 'react-router-dom'
import { flexRender } from '@tanstack/react-table'

function Table({table}) {
  return (
    <div className='w-full px-6'>
     <table class="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
               {
                table.getHeaderGroups().map(head=>(
                    head.headers.map(header=>(
                        <th scope="col" class="px-6 py-3">
                        {header.column.columnDef.header}
                    </th>
                    ))
                ))
               }
                

            
               
            </tr>
        </thead>

        <tbody>
            {
              table.getRowModel().rows.map(row=>(
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  {
                   row.getVisibleCells().map(cell=>(<td>{
                    flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                    )
                   }</td>))
                  }
                </tr>
                ))
            }
            
        </tbody>
    </table>

  </div>
  )
}

export default Table