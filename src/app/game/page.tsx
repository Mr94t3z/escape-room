/* eslint-disable @next/next/no-img-element */
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
  const [showDoorTransition, setShowDoorTransition] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(10);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.warn("Autoplay failed:", err);
      });
    }
  }, []);

  const levelQuestions = questions.filter((q) => q.level === level);

  const handleAnswer = (answer: string) => {
    const currentQuestion = levelQuestions[questionIndex];

    if (answer === currentQuestion.answer) {
      if (questionIndex < levelQuestions.length - 1) {
        setQuestionIndex((prev) => prev + 1);
      } else if (level === 2) {
        // Final success
        sessionStorage.setItem("playSuccessAudio", "true");
        sessionStorage.setItem("timeLeft", timeLeft.toString());
        router.push("/success");
      } else {
        // Move to next level (level 1 done)
        setShowDoorTransition(true);
      }
    } else {
      setLives((prev) => {
        if (prev === 1) {
          router.push("/game-over");
          return 0;
        }
        return prev - 1;
      });
    }
  };

  const handleNextLevel = () => {
    if (level === 1) {
      setLevel(2);
      setQuestionIndex(0);
      setShowDoorTransition(false);
    } else {
      sessionStorage.setItem("playSuccessAudio", "true");
      sessionStorage.setItem("timeLeft", timeLeft.toString());
      router.push("/success");
    }
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/indonesian.gif')" }}
    >
      <audio ref={audioRef} src="/audio/bg-music.mp3" loop preload="auto" />

      {showDoorTransition ? (
        <main className="flex flex-col items-center justify-center flex-grow px-4 py-6">
          <img src="/images/door.gif" alt="Pintu" className="w-64 mb-4 animate-pulse" />
          <button
            onClick={handleNextLevel}
            className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg text-xl font-semibold"
          >
            Buka Pintu
          </button>
        </main>
      ) : (
        <main className="flex flex-col items-center justify-center flex-grow px-4 py-6">
          <h2 className="text-5xl mb-4">Level {level}</h2>
          <p className="mb-4">Nyawa: {lives} ❤️</p>
          <Timer
            time={10}
            onTimeout={() => router.push("/game-over?reason=time")}
            onTick={setTimeLeft}
          />
          <Question
            question={levelQuestions[questionIndex]?.question}
            image={levelQuestions[questionIndex]?.image}
            options={levelQuestions[questionIndex]?.options}
            onAnswer={handleAnswer}
          />
        </main>
      )}

      <footer className="bg-gray-900 text-white text-center py-4 w-full">
        <p className="text-sm">
          &copy; PPG 2025 - Escape Room by Rifqotul Aulia.
        </p>
      </footer>
    </div>
  );
}
