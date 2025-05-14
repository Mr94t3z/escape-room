"use client";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [timeLeft, setTimeLeft] = useState<string | null>(null);

  useEffect(() => {
    const shouldPlay = sessionStorage.getItem("playSuccessAudio");
    if (shouldPlay && audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
      sessionStorage.removeItem("playSuccessAudio");
    }

    const storedTime = sessionStorage.getItem("timeLeft");
    if (storedTime) {
      setTimeLeft(storedTime);
    }
  }, []);

  const handlePlayAgain = () => {
    router.push("/");
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-green-700 bg-cover bg-center px-10"
      style={{
        backgroundImage: "url('/won.gif')",
      }}
    >
      <audio ref={audioRef} src="/audio/winner.mp3" loop preload="auto" />
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-pixel text-white text-center">
        Selamat! 🎉
      </h1>
      <p className="inline-block text-base sm:text-lg md:text-xl mt-4 text-white text-center">
        Kamu berhasil melarikan diri dengan
        {timeLeft && ` sisa waktu ${timeLeft} detik.`}
      </p>
      <button
        className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded text-lg"
        onClick={handlePlayAgain}
      >
        Main Lagi
      </button>
    </div>
  );
}
