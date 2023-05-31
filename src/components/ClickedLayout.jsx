import waldoHead from "../imgs/waldoIcon.png";
import whitebeardHead from "../imgs/whitebeardIcon.png";
import odlawHead from "../imgs/odlawIcon.png";
import wendaHead from "../imgs/wendaIcon.png";
import { useEffect, useRef, useState } from "react";
import { POSITIONS } from "../App";

export function ClickedLayout({
  characterList,
  setCharacterList,
  clickedPosition,
  level,
  setShowClickedLayout,
}) {
  const handleCharacterSelection = (characterId) => {
    const clickedCharacter = characterList.find(
      (character) => character.id === characterId
    );

    if (clickedCharacter) {
      const { x, y } = clickedPosition;
      const isCharacterFound = checkCharacterFound(clickedCharacter.name, x, y);

      if (isCharacterFound) {
        console.log("Good job!", clickedCharacter.name);

        setCharacterList((prevList) =>
          prevList.map((character) =>
            character.id === characterId
              ? { ...character, isFound: true }
              : character
          )
        );
        setShowClickedLayout(false);
      } else {
        console.log("Try again!");
        setShowClickedLayout(false);
      }
    }
  };

  const checkCharacterFound = (characterName, x, y) => {
    const levelPositions = POSITIONS.find(
      (position) => position.level === level
    );

    if (levelPositions) {
      const clickedCharacter = levelPositions.characters.find((character) => {
        const { xCord1, yCord1, xCord2, yCord2 } = character;
        return (
          x >= xCord1 &&
          x <= xCord2 &&
          y >= yCord1 &&
          y <= yCord2 &&
          character.name === characterName
        );
      });

      return !!clickedCharacter;
    }

    return false;
  };
  return (
    <div>
      <ul className='flex'>
        <li className='relative mr-5 ml-5 cursor-crosshair'>
          {/* Target box */}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 border-4 border-red-500'></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 '></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-2 '></div>
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-10 '></div>
        </li>
        {characterList.map((character) =>
          character.isFound ? null : (
            <li
              key={character.id}
              className={`w-14 flex items-center justify-center ml-1 cursor-pointer hover:scale-105 ${
                character.isFound ? "opacity-50" : ""
              }`}
              onClick={() => handleCharacterSelection(character.id)}
            >
              <div className='border-4 border-red-500 p-1 rounded-full'>
                <img src={character.icon} className='w-full h-full' />
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
