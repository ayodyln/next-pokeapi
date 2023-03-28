import PokemonGrid from "@/components/PokemonGrid"

export default async function Home() {
  const data = await getData()

  return (
    <div className='p-4 flex flex-col gap-2 antialiased h-screen w-screen'>
      <h1 className='text-4xl'>NextJS 13 - PokeAPI App</h1>
      <PokemonGrid clientPokedex={data} />
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

  return results
}

