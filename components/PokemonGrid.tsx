"use client"

import { useEffect, useState } from "react"
import Filter from "./Filter"
import Pokemon from "./Pokemon"

const PokemonGrid = ({ clientPokedex }: any) => {
  const [filter, setFilter]: any = useState()
  const [dex, setDex]: any = useState([])

  const pokedex = async (data: any) => {
    const pokedex = data.map(async (poke: { name: any }) => {
      const myPoke = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${poke.name}`
      )
      const res = await myPoke.json()
      return res
    })

    return Promise.all(pokedex)
  }

  useEffect(() => {
    pokedex(clientPokedex).then((data: any) => setDex(data))
  }, [])

  return (
    <section className='h-full flex flex-col gap-4 overflow-hidden'>
      <section className='flex justify-end h-fit'>
        <Filter clientPokedex={clientPokedex} setFilter={setFilter} />
      </section>

      <div className='max-w-6xl grid auto-rows-min lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[639px]:grid-cols-1 w-full h-full gap-2 p-1 overflow-auto m-auto'>
        {filter !== "N/A" &&
          dex.map((poke: any, i: number) => {
            const types = poke.types.map((t: any) => t.type.name)

            if (types.includes(filter)) {
              return <Pokemon key={i} poke={poke} />
            }

            if (!filter) {
              return <Pokemon key={i} poke={poke} />
            }
          })}
      </div>
    </section>
  )
}

export default PokemonGrid
