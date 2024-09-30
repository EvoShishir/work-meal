import { useEffect, useState } from "react";

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isActive, setIsActive] = useState(false); // Tracks if countdown is active
  const [isMounted, setIsMounted] = useState(false); // Check if client-side is mounted

  useEffect(() => {
    setIsMounted(true); // This ensures component renders only on the client

    const updateCountdown = () => {
      // Define dynamic start and end times
      const startHour = 15; // 3 PM
      const startMinute = 0; // Starting at 0 minutes
      const endHour = 22; // 10 PM
      const endMinute = 0; // Ending at 0 minutes

      const now = new Date();
      const currentHour = now.getHours();
      const currentMinute = now.getMinutes();

      // If current time is between startHour:startMinute and endHour:endMinute
      if (
        (currentHour > startHour ||
          (currentHour === startHour && currentMinute >= startMinute)) &&
        (currentHour < endHour ||
          (currentHour === endHour && currentMinute < endMinute))
      ) {
        setIsActive(true);

        // Set target time to endHour:endMinute
        const targetTime = new Date();
        targetTime.setHours(endHour, endMinute, 0, 0); // e.g., 10:00 PM

        const difference = targetTime.getTime() - now.getTime();

        // Calculate hours, minutes, and seconds left
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ hours, minutes, seconds });
      } else {
        setIsActive(false);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      }
    };

    if (isMounted) {
      const intervalId = setInterval(updateCountdown, 1000);
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [isMounted]);

  // Function to format numbers with leading zeros
  const formatTime = (time: number) => {
    return time.toString().padStart(2, "0");
  };

  if (!isMounted) {
    return null; // Avoid server-side rendering of dynamic content
  }

  return (
    <div className="text-center">
      {isActive ? (
        <div className="grid grid-flow-col text-center auto-cols-max items-start">
          <div className="flex flex-col rounded-box">
            <span className="countdown font-bold text-5xl">
              <span
                style={
                  {
                    "--value": formatTime(timeLeft.hours),
                  } as React.CSSProperties
                }
              ></span>
            </span>
            <span className="text-slate-400">hours</span>
          </div>
          <div className="countdown font-bold text-5xl rounded-box">:</div>
          <div className="flex flex-col rounded-box">
            <span className="countdown font-bold text-5xl">
              <span
                style={
                  {
                    "--value": formatTime(timeLeft.minutes),
                  } as React.CSSProperties
                }
              ></span>
            </span>
            <span className="text-slate-400">min</span>
          </div>
          <div className="countdown font-bold text-5xl rounded-box">:</div>
          <div className="flex flex-col rounded-box">
            <span className="countdown font-bold text-5xl">
              <span
                style={
                  {
                    "--value": formatTime(timeLeft.seconds),
                  } as React.CSSProperties
                }
              ></span>
            </span>
            <span className="text-slate-400">sec</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-flow-col auto-cols-max">
          <div className="flex flex-col rounded-box">
            <span className="countdown font-bold text-5xl">
              <span
                style={
                  {
                    "--value": "00",
                  } as React.CSSProperties
                }
              ></span>
            </span>
            <span className="text-slate-400">hours</span>
          </div>
          <div className="countdown font-bold text-5xl rounded-box">:</div>
          <div className="flex flex-col rounded-box">
            <span className="countdown font-bold text-5xl">
              <span
                style={
                  {
                    "--value": "00",
                  } as React.CSSProperties
                }
              ></span>
            </span>
            <span className="text-slate-400">min</span>
          </div>
          <div className="countdown font-bold text-5xl rounded-box">:</div>
          <div className="flex flex-col rounded-box">
            <span className="countdown font-bold text-5xl">
              <span
                style={
                  {
                    "--value": "00",
                  } as React.CSSProperties
                }
              ></span>
            </span>
            <span className="text-slate-400">sec</span>
          </div>
        </div>
      )}
    </div>
  );
};
