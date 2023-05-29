export function Header() {
  return (
    <header className='w-full bg-primary flex p-6 items-center '>
      <div className='w-1/2'>
        <div className='bg-white p-5 w-1/2 border-8 border-sky-400 rounded text-center ml-20'>
          <span className='text-3xl font-bold uppercase text-sky-400'>
            Where's{" "}
          </span>
          <span className='text-3xl font-bold uppercase text-primary'>
            Wally?
          </span>
        </div>
      </div>
      <div className='w-1/2 flex justify-end'>
        <h1 className='text-2xl text-white mr-20'>High Scores</h1>
      </div>
    </header>
  );
}
