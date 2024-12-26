import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdownDate = new Date("Oct 15, 2024 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % 1000) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(timerInterval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div className="flex space-x-4 mt-5">
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
      <TimeBox label="Seconds" value={timeLeft.seconds} />
    </div>
  );
};

interface TimeBoxProps {
  label: string;
  value: number;
}
const TimeBox: React.FC<TimeBoxProps> = ({ label, value }) => {
  return (
    <div className="bg-white p-4  text-center">
      <span className="text-2xl font-bold text-black block">
        {value < 10 ? `0${value}` : value}
      </span>
      {/* Horizontal line */}
      <div className="border-t-2 border-gray-300 my-2"></div>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  );
};

export default CountdownTimer;
