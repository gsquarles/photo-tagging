import { useContext, useRef } from "react";
import { ScoreContext } from "../App";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export function HighScoreForm({ time, setIsGameOver, level }) {
  const inputRef = useRef(null);
  const ref = collection(db, level);
  const {
    setIsLevelSelectPageShown,
    setSelectedLevel,
    setIsHighScoresSelected,
  } = useContext(ScoreContext);

  function handleBackHome() {
    setIsLevelSelectPageShown(true);
    setSelectedLevel(null);
    setIsGameOver(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const playerName = inputRef.current.value.trim();

    const data = { name: playerName, time: time };

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }

    setIsHighScoresSelected(true);
    setSelectedLevel(null);
    setIsGameOver(false);
  }

  return (
    <form
      className='bg-white py-8 px-8 text-center rounded-xl flex flex-col items-center'
      style={{
        position: "fixed",
        top: "47%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
      onSubmit={handleSubmit}
    >
      <h1 className='font-bold text-2xl mb-2'>
        Congratulations, you found all the characters!
      </h1>
      <p className='text-xl mb-5'>
        Add your name and see if you made the high scores table:
      </p>
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
