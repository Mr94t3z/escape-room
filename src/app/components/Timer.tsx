import { useEffect, useState } from "react";

interface TimerProps {
  time: number;
  onTimeout: () => void;
  onTick?: (secondsLeft: number) => void;
}

const Timer = ({ time, onTimeout, onTick }: TimerProps) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev - 1;

        if (next <= 0) {
          clearInterval(interval);
          onTimeout(); // ⏰ Timeout only once
          onTick?.(0);
          return 0;
        }

        onTick?.(next);
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, onTimeout, onTick]);

  return <p className="text-red-500 mb-4">Waktu tersisa: {seconds} detik</p>;
};

export default Timer;
