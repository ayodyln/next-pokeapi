/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"

const Pokemon = ({ poke }: any) => {
  const [hover, setHover] = useState(false)
  const hoverHandler = () => setHover(!hover)

  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className='relative overflow-hidden flex w-full h-[200px] border justify-center items-center rounded-lg bg-primary curser-pointer'>
      <img
        src={poke.sprites.other["official-artwork"].front_default}
        alt={poke.name}
        className='w-2/3 drop-shadow-lg pointer-events-none'
      />

      <div
        className={
          hover
            ? "p-2 absolute cursor-pointer transition ease-in delay-100 duration-300 opacity-0 hover:opacity-100 top-0 left-0 w-full h-full text-white bg-neutral bg-opacity-60"
            : "hidden"
        }>
        <section className='flex justify-between items-top'>
          <h1 className='text-xl font-bold capitalize'>{poke.name}</h1>
          <span className='text-md'>ID: {poke.id}</span>
        </section>
      </div>
    </div>
  )
}

export default Pokemon
