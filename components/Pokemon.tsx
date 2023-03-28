/* eslint-disable @next/next/no-img-element */
"use client"

import { useState } from "react"
import PokeClient from "./PokeClient"

const Pokemon = ({ poke, isFavorite, favs, setFavorites }: any) => {
  const [hover, setHover] = useState(false)
  const [favorite, setFavorite] = useState(isFavorite)
  const hoverHandler = () => setHover(!hover)

  const favHandler = async () => {
    if (favs.find((fav: any) => fav.name === poke.name)) {
      setFavorite(false)
      // remove from favs
      setFavorites(favs.filter((_: any) => _.name !== poke.name))
    } else {
      setFavorite(true)
      // add to favs
      setFavorites([...favs, { name: poke.name }])
    }
  }

  return (
    <div
      onMouseEnter={hoverHandler}
      onMouseLeave={hoverHandler}
      className='relative flex w-full h-[200px] border justify-center items-center rounded-lg bg-primary curser-pointer '>
      <img
        src={poke.sprites.other["official-artwork"].front_default}
        alt={poke.name}
        className='w-2/3 drop-shadow-lg pointer-events-none max-[639px]:w-1/3'
      />

      {favorite && (
        <button className='btn btn-disabled w-10 h-10 absolute z-2 top-0 right-0 m-2 p-[4px] bg-transparent pointer-events-none'>
          <svg
            className='w-full fill-accent'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'>
            {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
          </svg>
        </button>
      )}

      <PokeClient
        hover={hover}
        poke={poke}
        favorite={favorite}
        favHandler={favHandler}
      />
    </div>
  )
}

export default Pokemon
