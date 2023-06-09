import { Header } from "./components/Header";
import { LevelSelectPage } from "./components/LevelSelectPage";
import beachImg from "./imgs/beachLarge.jpg";
import stadiumImg from "./imgs/stadiumLarge.jpg";
import spaceImg from "./imgs/spaceLarge.jpg";
import { createContext, useState } from "react";
import { Level } from "./components/Level";
import { Scoreboards } from "./components/Scoreboards";

const LEVELS = [
  {
    id: 1,
    level: "beach",
    image: beachImg,
  },
  {
    id: 2,
    level: "stadium",
    image: stadiumImg,
  },
  {
    id: 3,
    level: "space",
    image: spaceImg,
  },
];

export const POSITIONS = [
  {
    level: "beach",
    characters: [
      { name: "waldo", xCord1: 980, yCord1: 377, xCord2: 1005, yCord2: 413 },
      {
        name: "whitebeard",
        xCord1: 426,
        yCord1: 356,
        xCord2: 445,
        yCord2: 386,
      },
      { name: "odlaw", xCord1: 165, yCord1: 355, xCord2: 182, yCord2: 388 },
      { name: "wenda", xCord1: 1230, yCord1: 410, xCord2: 1245, yCord2: 451 },
    ],
  },
  {
    level: "stadium",
    characters: [
      { name: "waldo", xCord1: 431, yCord1: 329, xCord2: 469, yCord2: 368 },
      {
        name: "whitebeard",
        xCord1: 973,
        yCord1: 856,
        xCord2: 988,
        yCord2: 904,
      },
      { name: "odlaw", xCord1: 953, yCord1: 639, xCord2: 971, yCord2: 685 },
      { name: "wenda", xCord1: 394, yCord1: 724, xCord2: 409, yCord2: 748 },
    ],
  },
  {
    level: "space",
    characters: [
      { name: "waldo", xCord1: 642, yCord1: 652, xCord2: 659, yCord2: 669 },
      {
        name: "whitebeard",
        xCord1: 1242,
        yCord1: 598,
        xCord2: 1261,
        yCord2: 616,
      },
      { name: "odlaw", xCord1: 105, yCord1: 719, xCord2: 124, yCord2: 743 },
      { name: "wenda", xCord1: 466, yCord1: 535, xCord2: 482, yCord2: 559 },
    ],
  },
];

export const ScoreContext = createContext();

function App() {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [isLevelSelectPageShown, setIsLevelSelectPageShown] = useState(true);

  const [isHighScoresSelected, setIsHighScoresSelected] = useState(false);

  const handleChooseLevel = (id) => {
    const selected = LEVELS.find((level) => level.level === id);
    setSelectedLevel(selected);
    setIsLevelSelectPageShown(false);
  };

  return (
    <ScoreContext.Provider
      value={{
        setIsLevelSelectPageShown,
        setSelectedLevel,
        setIsHighScoresSelected,
      }}
    >
      <Header
        setSelectedLevel={setSelectedLevel}
        selectedLevel={selectedLevel}
        setIsSelectedLevelPageShown={setIsLevelSelectPageShown}
        setIsHighScoresSelected={setIsHighScoresSelected}
      />
      {isLevelSelectPageShown && (
        <LevelSelectPage handleChooseLevel={handleChooseLevel} />
      )}
      {selectedLevel && (
        <Level image={selectedLevel.image} level={selectedLevel.level} />
      )}
      {isHighScoresSelected && <Scoreboards />}
    </ScoreContext.Provider>
  );
}

export default App;
