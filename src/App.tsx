import './styles/main.css'
import logo from './assets/logo.svg'

function gamesImage() {
  const games = [
    '/game-1.png',
    '/game-2.png',
    '/game-3.png',
    '/game-4.png',
    '/game-5.png',
    '/game-6.png',
  ]

  const images = games.map(el => {
    return (
      <a href='' className='relative'>
        <img src={el} />
        <div className='w-full lg:h-[25%] md:h-[40%] bg-gradient-to-t from-black to-transparent px-4 py-2 absolute bottom-0 left-0 rounded-md'>
          <strong className="text-white block truncate text-ellipsis">League Of Legends</strong>
          <span className="text-zinc-300 text-sm">4 anúncios</span>
        </div>
      </a>
    )
  })

  return images
}

function App() {
  return (
    <div className='max-w-full flex flex-col items-center my-20'>
      <img src={logo} className="max-w-xs" alt="Logo NLW" />
      <h1 className='text-6xl font-black text-white mt-10'>
        Seu{" "}
        <span className="bg-gradient-to-r from-[#9572FC] via-[#43E7AD] to-[#E1D55D] bg-clip-text text-transparent">
          duo{" "}
        </span>
        está aqui.
      </h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
        { gamesImage() }
      </div>
    </div>
  )
}

export default App
