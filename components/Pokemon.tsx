/* eslint-disable @next/next/no-img-element */
import util from "util"

const Pokemon = ({ poke }: any) => {
  // console.log(
  //   util.inspect(poke.sprites.other, {
  //     colors: true,
  //   })
  // )
  return (
    <div className='flex w-full h-[200px] border justify-center items-center rounded-lg bg-primary'>
      <img
        src={poke.sprites.other["official-artwork"].front_default}
        alt={poke.name}
        className='w-1/2 drop-shadow-lg'
      />
    </div>
  )
}

export default Pokemon
