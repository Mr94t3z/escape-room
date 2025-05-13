"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { questions } from "../utils/questions";
import Question from "../components/Question";
import Timer from "../components/Timer";

export default function Game() {
  const router = useRouter();
  const [level, setLevel] = useState(1);
  const [lives, setLives] = useState(3);
  const [questionIndex, setQuestionIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Auto-play music when entering the page
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  // Filter pertanyaan berdasarkan level saat ini
  const levelQuestions = questions.filter((q) => q.level === level);

  const handleAnswer = (answer: string) => {
    if (answer === levelQuestions[questionIndex].answer) {
      if (questionIndex < levelQuestions.length - 1) {
        setQuestionIndex(questionIndex + 1);
      } else if (level < 3) {
        setLevel(level + 1);
        setQuestionIndex(0); // Reset index untuk pertanyaan di level berikutnya
      } else {
        router.push("/success");
      }
    } else {
      setLives((prev) => {
        if (prev === 1) {
          router.push("/game-over"); // Game over jika nyawa habis
          return 0;
        }
        return prev - 1;
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cover bg-center" 
      style={{ backgroundImage: "url('/play.gif')" }}>
      {/* Main content */}
      <main className="flex flex-col items-center justify-center flex-grow px-4 py-6">

        {/* Audio element */}
        <audio ref={audioRef} src="/audio/bg-music.mp3" loop preload="auto" />

        <h2 className="text-5xl mb-4">Level {level}</h2>
        <p className="mb-4">Nyawa: {lives} ❤️</p>
        <Timer time={120} onTimeout={() => router.push("/game-over?reason=time")} />
        <Question
          question={levelQuestions[questionIndex]?.question}
          image={levelQuestions[questionIndex]?.image}
          options={levelQuestions[questionIndex]?.options}
          onAnswer={handleAnswer}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 w-full">
        <p className="text-sm">
          &copy; PPG 2025 - Escape Room by Rifqotul Aulia.
        </p>
      </footer>
    </div>

  );
}
