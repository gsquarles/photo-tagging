import beachImg from "../imgs/beachLarge.jpg";
import stadiumImg from "../imgs/stadiumLarge.jpg";
import spaceImg from "../imgs/spaceLarge.jpg";

const LEVELS = [
  { title: "beach", image: beachImg },
  { title: "stadium", image: stadiumImg },
  { title: "space", image: spaceImg },
];

export function LevelSelectPage({ handleChooseLevel }) {
  return (
    <main className='flex py-10 px-28'>
      <div className='w-1/3'>
        <h1 className='text-4xl font-bold mb-5'>
          It's all about finding the characters!
        </h1>
        <p className='text-xl mb-5'>
          After you select a level, click on the screen and choose a character.
          If you are right about their location. A marker will be placed there.
          You win when you find all the characters.
        </p>
        <p className='text-xl'>
          If you qualify, your score will be recorded in the high score table.
        </p>
      </div>
      <div className='w-2/3  flex flex-col items-center'>
        {LEVELS.map((level, index) => (
          <div
            key={index}
            id={level.title}
            className='w-[85%] p-12 rounded-lg opacity-70 hover:opacity-100 mb-6 cursor-pointer'
            style={{
              backgroundImage: `url(${level.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            onClick={() => handleChooseLevel(level.title)}
          >
            <h1 className=' text-primary text-6xl font-bold capitalize'>
              {level.title}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
}
