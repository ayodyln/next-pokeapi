const PokeClient = ({ hover, poke, favorite, favHandler, getFavs }: any) => {
  return (
    <div
      className={
        hover
          ? "p-2 rounded-md absolute cursor-pointer transition ease-in delay-100 duration-300 opacity-0 hover:opacity-100 top-0 left-0 w-full h-full text-current glass"
          : "hidden"
      }>
      <section className='flex justify-between items-top'>
        <div>
          <h1 className='text-xl font-bold capitalize'>{poke.name}</h1>
          <span className='text-md'>ID: {poke.id}</span>
        </div>

        <button
          className={`w-10 h-10 bg-transparent btn btn-ghost p-[4px] ${
            favorite ? "fill-accent" : "fill-current"
          }`}
          onClick={favHandler}>
          <svg
            className='w-full fill-inherit'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'>
            {/* <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
            <path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
          </svg>
        </button>
      </section>

      <div className='divider before:bg-primary after:bg-primary m-0'></div>

      <section className='flex justify-between'>
        <div className=''>Weight: {poke.weight / 10} kg</div>
        <div className=''>Height: {poke.height / 10} m</div>
      </section>

      <section className='flex flex-wrap gap-[6px] mt-3'>
        {poke.stats.map((stat: any, i: any) => {
          let statType
          switch (stat.stat.name) {
            case "hp":
              statType = "bg-[#59FFA0] text-neutral"
              break
            case "attack":
              statType = "bg-[#F07167] text-neutral"
              break
            case "defense":
              statType = "bg-[#2B50AA] text-white"
              break
            case "special-attack":
              statType = "bg-[#00E8FC] text-neutral"
              break
            case "special-defense":
              statType = "bg-[#E75A7C] text-white"
              break
            case "speed":
              statType = "bg-[#FDE74C] text-neutral"
            default:
              break
          }
          return (
            <div className={`badge border-none ${statType} p-[8px]`} key={i}>
              {stat.stat.name} {stat.base_stat}
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default PokeClient
