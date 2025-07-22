import React, { useState, useEffect } from 'react';
import AlbumCover from './components/AlbumCover';

// To keep the main App component clean, the timer is a separate component within the same file.
const CountdownTimer = ({ targetDate }: { targetDate: Date }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    if (value < 0) return null;
    return (
      <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
        <span className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-white tracking-tighter">
          {value.toString().padStart(2, '0')}
        </span>
        <span className="text-xs uppercase text-neutral-500 mt-1">{interval}</span>
      </div>
    );
  });
  
  return (
    <div className="flex justify-center mt-2">
      {+targetDate > +new Date() ? timerComponents : <span className="text-2xl font-bold text-white">Released!</span>}
    </div>
  );
};


function App() {
  const releaseDate = new Date('2025-12-23T00:00:00');

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center p-4 sm:p-8 text-neutral-200 bg-black">
      
      <div className="absolute top-0 left-0 right-0 p-4 pt-8 sm:pt-12 text-center">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400 mb-2">
            Time Until Release
          </h2>
          <CountdownTimer targetDate={releaseDate} />
      </div>

      <div className="flex flex-col items-center justify-center text-center flex-grow pt-32 sm:pt-40">
        <div className="w-full mb-8 sm:mb-12">
          <AlbumCover />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight uppercase">
            NIGHT VISION
        </h1>
        <p className="text-md sm:text-lg text-neutral-400 mt-2">
            An album by cernick
        </p>
      </div>

    </main>
  );
}

export default App;
