import { useEffect, useState } from "react";
import { POSITIONS } from "../App";

export function Level({ image, title }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
  };

  const padNumber = (number) => {
    return number.toString().padStart(2, "0");
  };

  const handleCharacterClick = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const image = event.target;
    const imageWidth = image.naturalWidth;
    const imageHeight = image.naturalHeight;
    const displayWidth = image.clientWidth;
    const displayHeight = image.clientHeight;

    // Calculate scaling factors for x and y coordinates
    const scaleX = imageWidth / displayWidth;
    const scaleY = imageHeight / displayHeight;

    // Adjust the clicked coordinates based on scaling factors
    const clickedX = Math.floor(offsetX * scaleX);
    const clickedY = Math.floor(offsetY * scaleY);

    console.log("Clicked coordinates:", clickedX, clickedY);
    const levelPositions = POSITIONS.find(
      (position) => position.level === title
    );

    if (levelPositions) {
      const clickedCharacter = levelPositions.characters.find((character) => {
        const { xCord1, yCord1, xCord2, yCord2 } = character;
        return (
          clickedX >= xCord1 &&
          clickedX <= xCord2 &&
          clickedY >= yCord1 &&
          clickedY <= yCord2
        );
      });

      if (clickedCharacter) {
        console.log("Good job!", clickedCharacter.name);
      } else {
        console.log("Try again!");
      }
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1,
        }}
      >
        <p className='inline-block bg-primary text-white py-2 px-4 text-lg rounded-full opacity-75'>
          {formatTime(time)}
        </p>
      </div>
      <div style={{ position: "relative" }}>
        {" "}
        <img
          src={image}
          style={{ width: "100%", height: "100%", zIndex: 0 }}
          useMap='#charactersMap'
          onClick={handleCharacterClick}
        />
        <map name='charactersMap'></map>
      </div>
    </div>
  );
}
