"use client"

import { useState } from "react"

const Filter = ({ setFilter }: any) => {
  const [type, setType]: any = useState("")
  const filterHandler = () => setFilter(type.toLowerCase())
  const types = [
    "normal",
    "fighting",
    "flying",
    "Poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow",
  ]

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
              {type.charAt(0).toUpperCase() + type.slice(1)}
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
