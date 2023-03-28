import Pokemon from "@/components/Pokemon"

export default async function Home() {
  const data = await getData()

  return (
    <div className='p-4 flex flex-col gap-2 antialiased h-screen w-screen overflow-hidden'>
      <h1 className='text-4xl'>NextJS 13 - PokeAPI App</h1>

      {/* PokeAPI */}
      <section className='max-w-6xl grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-[639px]:grid-cols-1 w-full gap-2 m-auto overflow-auto p-2'>
        {data.map((poke: object, i: number) => (
          <Pokemon poke={poke} key={i} />
        ))}
      </section>
    </div>
  )
}

const getData = async () => {
  const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${151}`)
  const pokeAPI_Response = await pokeAPI.json()
  const results = pokeAPI_Response.results

  if (!pokeAPI.ok) {
    throw new Error("Failed to fetch data")
  }

  const pokedex = await results.map(async (poke: { name: any }) => {
    const myPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
    const res = await myPoke.json()
    return res
  })

  return Promise.all(pokedex)
}
