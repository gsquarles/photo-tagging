import { formatTime, padNumber } from "../utilities/helpers";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export function Scoreboards() {
  const [beachScores, setBeachScores] = useState([]);
  const [stadiumScores, setStadiumScore] = useState([]);
  const [spaceScores, setSpaceScore] = useState([]);

  useEffect(() => {
    async function fetchScores() {
      try {
        const beachSnapshot = await getDocs(collection(db, "beach"));
        const beachCollection = beachSnapshot.docs.map((doc) => doc.data());
        const stadiumSnapshot = await getDocs(collection(db, "stadium"));
        const stadiumCollection = stadiumSnapshot.docs.map((doc) => doc.data());
        const spaceSnapshot = await getDocs(collection(db, "space"));
        const spaceCollection = spaceSnapshot.docs.map((doc) => doc.data());
        setBeachScores(beachCollection);
        setStadiumScore(stadiumCollection);
        setSpaceScore(spaceCollection);
      } catch (e) {
        console.log(e);
      }
    }

    fetchScores();
  }, []);
  const getSortedAndSlicedScores = (scores) =>
    [...scores].sort((a, b) => a.time - b.time).slice(0, 5);

  const sortedBeachScores = getSortedAndSlicedScores(beachScores);
  const sortedStadiumScores = getSortedAndSlicedScores(stadiumScores);
  const sortedSpaceScores = getSortedAndSlicedScores(spaceScores);
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex flex-col w-2/5  mt-8 rounded-lg border-2 border-primary'>
        <h1 className='text-sky-400 font-bold text-3xl py-1 px-3'>
          Top 5 - Beach
        </h1>
        <div className='flex bg-primary px-3 py-2 text-white justify-between text-lg'>
          <p className='ml-1'>Player</p>
          <p className='mr-3'>Time</p>
        </div>
        {sortedBeachScores.map((score, index) => (
          <div
            key={index}
            className='flex bg-primary px-3 py-2 text-white justify-between text-lg opacity-60 hover:opacity-100'
          >
            <p className='ml-1 capitalize'>{score.name}</p>
            <p className='mr-3'>{formatTime(score.time)}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col w-2/5  mt-8 rounded-lg border-2 border-primary'>
        <h1 className='text-sky-400 font-bold text-3xl py-1 px-3'>
          Top 5 - Stadium
        </h1>
        <div className='flex bg-primary px-3 py-2 text-white justify-between text-lg'>
          <p className='ml-1'>Player</p>
          <p className='mr-3'>Time</p>
        </div>
        {sortedStadiumScores.map((score, index) => (
          <div
            key={index}
            className='flex bg-primary px-3 py-2 text-white justify-between text-lg opacity-60 hover:opacity-100'
          >
            <p className='ml-1 capitalize'>{score.name}</p>
            <p className='mr-3'>{formatTime(score.time)}</p>
          </div>
        ))}
      </div>
      <div className='flex flex-col w-2/5  mt-8 rounded-lg border-2 border-primary'>
        <h1 className='text-sky-400 font-bold text-3xl py-1 px-3'>
          Top 5 - Space
        </h1>
        <div className='flex bg-primary px-3 py-2 text-white justify-between text-lg'>
          <p className='ml-1'>Player</p>
          <p className='mr-3'>Time</p>
        </div>
        {sortedSpaceScores.map((score, index) => (
          <div
            key={index}
            className='flex bg-primary px-3 py-2 text-white justify-between text-lg opacity-60 hover:opacity-100'
          >
            <p className='ml-1 capitalize'>{score.name}</p>
            <p className='mr-3'>{formatTime(score.time)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
