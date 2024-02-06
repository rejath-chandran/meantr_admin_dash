import React, { useState } from 'react'

function EditableCell({getValue}) {
    const val=getValue()
    const [value,setValue]=useState(val)
  return (
    <div>
        <input disabled={true} className='px-7 w-full h-12 text-xl bg-black ' type="text" value={value} onChange={e=>setValue(e.target.value)} />
    </div>
  )
}

export default EditableCell