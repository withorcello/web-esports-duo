

function Carrossel () {
  return (
    <div className="scrow">
      <a href='' className='relative'>
        <img src={el} />
        <div className='w-full lg:h-[25%] md:h-[40%] bg-gradient-to-t from-black to-transparent px-4 py-2 absolute bottom-0 left-0 rounded-md'>
          <strong className="text-white block truncate text-ellipsis">League Of Legends</strong>
          <span className="text-zinc-300 text-sm">4 anúncios</span>
        </div>
      </a>
    </div>
  );
}

export default Carrossel;