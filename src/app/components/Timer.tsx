import { useEffect, useState } from "react";

interface TimerProps {
  time: number;
  onTimeout: () => void;
}

const Timer = ({ time, onTimeout }: TimerProps) => {
  const [seconds, setSeconds] = useState(time);

  useEffect(() => {
    if (seconds === 0) {
      onTimeout(); // Panggil onTimeout saat waktu habis
      return;
    }

    const interval = setInterval(() => setSeconds((prev) => prev - 1), 1000);

    return () => clearInterval(interval);
  }, [seconds, onTimeout]);

  return <p className="text-red-500 mb-4">Waktu tersisa: {seconds} detik</p>;
};

export default Timer;
