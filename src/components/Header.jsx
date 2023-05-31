import { useState } from "react";

export function Header({
  selectedLevel,
  setSelectedLevel,
  setIsSelectedLevelPageShown,
  setIsHighScoresSelected,
}) {
  function handleHomePageClick() {
    setSelectedLevel(null);
    setIsSelectedLevelPageShown(true);
  }

  function handleHighScoresClick() {
    setIsHighScoresSelected(true);
    setSelectedLevel(null);
    setIsSelectedLevelPageShown(false);
  }

  return (
    <header
      className={`${
        selectedLevel ? "w-[1600px]" : "w-full"
      } bg-primary flex p-6 items-center`}
    >
      <div className='w-1/2'>
        <div
          className='bg-white p-5 w-1/2 border-8 border-sky-400 rounded text-center ml-20 cursor-pointer hover:scale-105'
          onClick={handleHomePageClick}
        >
          <span className='text-3xl font-bold uppercase text-sky-400'>
            Where's{" "}
          </span>
          <span className='text-3xl font-bold uppercase text-primary'>
            Wally?
          </span>
        </div>
      </div>
      <div className='w-1/2 flex justify-end'>
        <h1
          className={`text-2xl text-white ${
            selectedLevel ? "mr-40" : "mr-20"
          } hover:scale-105 cursor-pointer`}
          onClick={handleHighScoresClick}
        >
          High Scores
        </h1>
      </div>
    </header>
  );
}
