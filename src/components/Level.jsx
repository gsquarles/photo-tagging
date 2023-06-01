import { useEffect, useRef, useState } from "react";
import { POSITIONS } from "../App";
import waldoHead from "../imgs/waldoIcon.png";
import whitebeardHead from "../imgs/whitebeardIcon.png";
import odlawHead from "../imgs/odlawIcon.png";
import wendaHead from "../imgs/wendaIcon.png";
import { ClickedLayout } from "./ClickedLayout";
import { CharactersDisplay } from "./CharactersDisplay";
import { HighScoreForm } from "./HighScoreForm";
import { formatTime, padNumber } from "../utilities/helpers";

export function Level({ image, level }) {
  const [time, setTime] = useState(0);
  const [characterList, setCharacterList] = useState([
    { id: 1, name: "waldo", icon: waldoHead, isFound: false },
    { id: 2, name: "whitebeard", icon: whitebeardHead, isFound: false },
    { id: 3, name: "odlaw", icon: odlawHead, isFound: false },
    { id: 4, name: "wenda", icon: wendaHead, isFound: false },
  ]);

  const [clickedPosition, setClickedPosition] = useState({ x: 0, y: 0 });
  const [showClickedLayout, setShowClickedLayout] = useState(false);
  const [characterNotFound, setCharacterNotFound] = useState(false);
  const intervalRef = useRef(null);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    // Check if all characters are found
    const allCharactersFound = characterList.every(
      (character) => character.isFound
    );

    if (allCharactersFound) {
      setIsGameOver(true);
      clearInterval(intervalRef.current);
    }
  }, [characterList]);

  const handleCharacterClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;

    setClickedPosition({ x: offsetX, y: offsetY });
    setShowClickedLayout(true);

    const levelPositions = POSITIONS.find(
      (position) => position.level === level
    );

    if (levelPositions) {
      const clickedCharacter = levelPositions.characters.find((character) => {
        const { xCord1, yCord1, xCord2, yCord2 } = character;
        return (
          offsetX >= xCord1 &&
          offsetX <= xCord2 &&
          offsetY >= yCord1 &&
          offsetY <= yCord2
        );
      });
    }
  };

  return (
    <>
      <div style={{ position: "relative", width: "1600px", height: "1000px" }}>
        <div
          style={{
            position: "absolute",
            top: "5%",
            left: "47%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
          className='flex flex-col items-center'
        >
          <p className='inline-block bg-primary text-white py-2 px-4 text-lg rounded-full opacity-75'>
            {formatTime(time)}
          </p>
          {characterNotFound && (
            <h1 className='bg-white py-2 px-4 text-lg rounded-lg'>
              Not quite Try again
            </h1>
          )}
        </div>
        <div style={{ position: "relative" }} className='cursor-crosshair'>
          <img
            className={`${isGameOver ? "bg-gray-500 opacity-30" : ""}`}
            src={image}
            style={{ width: "100%", height: "100%", zIndex: 0 }}
            useMap='#charactersMap'
            onClick={handleCharacterClick}
          />
          <map name='charactersMap'></map>
        </div>
      </div>
      <CharactersDisplay characterList={characterList} />
      {showClickedLayout && (
        <div
          style={{
            position: "absolute",
            left: `${clickedPosition.x - 20}px `,
            top: `${clickedPosition.y + 110}px`,
          }}
        >
          <ClickedLayout
            characterList={characterList}
            setCharacterList={setCharacterList}
            clickedPosition={clickedPosition}
            level={level}
            setShowClickedLayout={setShowClickedLayout}
            setCharacterNotFound={setCharacterNotFound}
          />
        </div>
      )}
      {isGameOver && (
        <HighScoreForm
          time={time}
          setIsGameOver={setIsGameOver}
          level={level}
        />
      )}
    </>
  );
}
