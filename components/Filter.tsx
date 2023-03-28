"use client"

import { useState } from "react"

const Filter = ({ types, setFilter }: any) => {
  const [type, setType]: any = useState("")
  const filterHandler = () => setFilter(type.toLowerCase())

  return (
    <div className='form-control'>
      <div className='input-group'>
        <select
          defaultValue={""}
          className='select select-bordered'
          onChange={(e) => setType(e.target.value.toLowerCase())}>
          <option value={""}>All</option>
          {types.map((type: any, i: number) => (
            <option key={i}>
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </option>
          ))}
        </select>

        <button onClick={filterHandler} className='btn'>
          Search
        </button>
      </div>
    </div>
  )
}

export default Filter
