import { useEffect, useState } from "react";

interface TimerProps {
  time: number;
  onTimeout: () => void;
  onTick?: (secondsLeft: number) => void; // ✅ Optional callback
}

const Timer = ({ time, onTimeout, onTick }: TimerProps) => {
  const [seconds, setSeconds] = useState(time);

  // Tick every second
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev - 1;
        if (next >= 0) {
          sessionStorage.setItem("timeLeft", next.toString());
          onTick?.(next);
        }
        return next;
      });
    }, 1000);  

    return () => clearInterval(interval);
  }, [onTick]);

  // Handle timeout separately, outside the tick loop
  useEffect(() => {
    if (seconds === 0) {
      onTimeout();
    }
  }, [seconds, onTimeout]);

  return (
    <p className="text-red-500 mb-4">
      Waktu tersisa: {seconds} detik
    </p>
  );
};

export default Timer;
