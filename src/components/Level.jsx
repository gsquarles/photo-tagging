import { useEffect, useState } from "react";

export function Level({ image }) {
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
      <div>
        <img src={image} style={{ zIndex: 0 }} />
      </div>
    </div>
  );
}
