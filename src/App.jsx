import { Header } from "./components/Header";
import { LevelSelectPage } from "./components/LevelSelectPage";
import beachImg from "./imgs/beachLarge.jpg";
import stadiumImg from "./imgs/stadiumLarge.jpg";
import spaceImg from "./imgs/spaceLarge.jpg";
import { useState } from "react";
import { Level } from "./components/Level";

const LEVELS = [
  {
    id: 1,
    title: "beach",
    image: beachImg,
  },
  {
    id: 2,
    title: "stadium",
    image: stadiumImg,
  },
  {
    id: 3,
    title: "space",
    image: spaceImg,
  },
];

export const POSITIONS = [
  {
    level: "beach",
    characters: [
      { name: "waldo", xCord1: 1817, yCord1: 689, xCord2: 1888, yCord2: 797 },
      {
        name: "whitebeard",
        xCord1: 776,
        yCord1: 646,
        xCord2: 838,
        yCord2: 739,
      },
      { name: "odlaw", xCord1: 298, yCord1: 652, xCord2: 341, yCord2: 714 },
      { name: "wenda", xCord1: 2297, yCord1: 757, xCord2: 2340, yCord2: 819 },
    ],
  },
  {
    level: "stadium",
    characters: [
      { name: "waldo", xCord1: 791, yCord1: 593, xCord2: 892, yCord2: 707 },
      {
        name: "whitebeard",
        xCord1: 1806,
        yCord1: 1586,
        xCord2: 1867,
        yCord2: 1732,
      },
      { name: "odlaw", xCord1: 1761, yCord1: 1189, xCord2: 1825, yCord2: 1277 },
      { name: "wenda", xCord1: 722, yCord1: 1335, xCord2: 783, yCord2: 1428 },
    ],
  },
  {
    level: "space",
    characters: [
      { name: "waldo", xCord1: 1186, yCord1: 1206, xCord2: 1239, yCord2: 1283 },
      {
        name: "whitebeard",
        xCord1: 2312,
        yCord1: 1100,
        xCord2: 2365,
        yCord2: 1193,
      },
      { name: "odlaw", xCord1: 179, yCord1: 1326, xCord2: 242, yCord2: 1405 },
      { name: "wenda", xCord1: 863, yCord1: 989, xCord2: 910, yCord2: 1076 },
    ],
  },
];

function App() {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleChooseLevel = (id) => {
    const selected = LEVELS.find((level) => level.title === id);
    setSelectedLevel(selected);
  };

  return (
    <>
      <Header setSelectedLevel={setSelectedLevel} />
      {selectedLevel ? (
        <Level image={selectedLevel.image} title={selectedLevel.title} />
      ) : (
        <LevelSelectPage handleChooseLevel={handleChooseLevel} />
      )}
    </>
  );
}

export default App;
