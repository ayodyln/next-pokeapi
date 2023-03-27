import Pokemon from "@/components/Pokemon"

export default async function Home() {
  const data = await getData()

  return (
    <div className='p-4 flex flex-col gap-2'>
      <h1 className='text-4xl'>NextJS 13 - PokeAPI App</h1>

      {/* PokeAPI */}
      <section className='grid grid-cols-4 gap-2'>
        {data.map((poke: object, i) => {
          return <Pokemon poke={poke} key={i} />
        })}
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
