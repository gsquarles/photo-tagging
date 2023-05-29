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
        <Level image={selectedLevel.image} />
      ) : (
        <LevelSelectPage handleChooseLevel={handleChooseLevel} />
      )}
    </>
  );
}

export default App;
