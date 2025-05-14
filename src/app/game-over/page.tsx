"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useRef } from "react";

function GameOverContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");
  const audioRef = useRef<HTMLAudioElement>(null);

  // Play audio on component mount
  useEffect(() => {
    const timeout = setTimeout(() => {
      audioRef.current?.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }, 10); // give the browser a tiny delay to catch up
  
    return () => clearTimeout(timeout);
  }, []);  

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-600 text-white">
      {/* Audio element to play game-over.mp3 */}
      <audio ref={audioRef} src="/audio/game-over.mp3" preload="auto" />
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-pixel text-white text-center mt-4">Game Over</h1>
      <p className="inline-block text-base sm:text-lg md:text-xl mt-4 text-white text-center">
        {reason === "time" ? "Waktu habis! Coba lebih cepat lain kali." : "Sayang sekali! Kamu kehabisan nyawa."}
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-8 py-3 bg-white text-red-600 font-semibold hover:bg-gray-200 rounded transition"
      >
        Coba Lagi
      </button>
    </div>
  );
}

export default function GameOver() {
  return (
    <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
      <GameOverContent />
    </Suspense>
  );
}
