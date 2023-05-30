import waldoHead from "../imgs/waldoIcon.png";
import whitebeardHead from "../imgs/whitebeardIcon.png";
import odlawHead from "../imgs/odlawIcon.png";
import wendaHead from "../imgs/wendaIcon.png";

export function CharactersDisplay({ characterList }) {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        right: "20px",
        transform: "translateY(-50%)",
        zIndex: 9999,
      }}
    >
      <ul>
        {characterList.map((character) => (
          <li
            key={character.id}
            className={`w-20 flex flex-col items-center justify-center mb-2 cursor-pointer hover:scale-105 ${
              character.isFound ? "opacity-50" : ""
            }`}
            onClick={() => handleCharacterSelection(character.id)}
          >
            <div
              className={`border-4 p-1 rounded-full bg-red-500 ${
                character.isFound ? "border-green-600" : "border-white"
              }`}
            >
              <img src={character.icon} className='w-full h-full' />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
