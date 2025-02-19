"use client";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-green-700 bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/done.gif')", // Ganti dengan URL gambar GIF yang diinginkan
      }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-pixel text-white text-center">Selamat! 🎉</h1>
      <p className="inline-block text-base sm:text-lg md:text-xl mt-4 text-white text-center">Kamu berhasil menyelesaikan semua level.</p>
      <button
        className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded text-lg"
        onClick={() => router.push("/")}
      >
        Main Lagi
      </button>
    </div>
  );
}
