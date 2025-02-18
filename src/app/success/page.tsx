"use client";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-700 text-white">
      <h1 className="text-3xl font-bold">Selamat! 🎉</h1>
      <p>Anda berhasil menyelesaikan semua level.</p>
      <button
        className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded text-lg"
        onClick={() => router.push("/")}
      >
        Main Lagi
      </button>
    </div>
  );
}
