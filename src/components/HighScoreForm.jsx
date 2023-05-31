import { useContext, useRef } from "react";
import { ScoreContext } from "../App";

export function HighScoreForm({ time, scores, setScores, setIsGameOver }) {
  const inputRef = useRef(null);
  const { setIsLevelSelectPageShown, setSelectedLevel } =
    useContext(ScoreContext);

  function handleBackHome() {
    setIsLevelSelectPageShown(true);
    setSelectedLevel(null);
    setIsGameOver(false);
  }
  return (
    <form
      className='bg-white py-8 px-6 text-center rounded-xl flex flex-col items-center'
      style={{
        position: "fixed",
        top: "45%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1 className='font-bold text-2xl mb-2'>
        Congratulations, you found all the characters!
      </h1>
      <p className='text-xl mb-5'>Add your time to the high scores table:</p>
      <div
        className='w-3/5 mb-10'
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor='name' className=' text-start'>
          Name
        </label>
        <input
          id='name'
          type='text'
          ref={inputRef}
          className='bg-gray-200 rounded-md p-2'
        />
      </div>
      <div className='flex w-3/5 justify-between'>
        <button className=' bg-sky-400 text-white py-1 px-4 rounded-lg'>
          Submit
        </button>
        <button
          className='bg-primary text-white py-1 px-4 rounded-lg'
          onClick={handleBackHome}
        >
          Back home
        </button>
      </div>
    </form>
  );
}
