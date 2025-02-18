"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function GameOverContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-red-600 text-white">
      <h1 className="text-5xl font-bold">Game Over</h1>
      <p className="text-lg mt-3">
        {reason === "time" ? "Waktu habis! Coba lebih cepat lain kali." : "Sayang sekali! Kamu kehabisan nyawa."}
      </p>
      <button
        onClick={() => router.push("/")}
        className="mt-6 px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-200 transition"
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
