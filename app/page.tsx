import PokemonGrid from "@/components/PokemonGrid"

export default async function Home() {
  const data = await getData()
  const { pokedex, types } = data

  let clientPokedex: any = pokedex

  return (
    <div className='p-4 flex flex-col gap-2 antialiased h-screen w-screen'>
      <h1 className='text-4xl'>NextJS 13 - PokeAPI App</h1>

      <PokemonGrid clientPokedex={clientPokedex} types={types} />
    </div>
  )
}

const getData = async () => {
  const pokeAPI = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${151}`)
  const pokeAPI_Response = await pokeAPI.json()
  const results = pokeAPI_Response.results

  const pokeTypes = await fetch(`https://pokeapi.co/api/v2/type`)
  const pokeType_Response = await pokeTypes.json()

  if (!pokeAPI.ok || !pokeTypes.ok) {
    throw new Error("Failed to fetch data")
  }

  const pokedex = await results.map(async (poke: { name: any }) => {
    const myPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke.name}`)
    const res = await myPoke.json()
    return res
  })

  return {
    pokedex: await Promise.all(pokedex),
    types: pokeType_Response,
  }
}
