"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-between min-h-screen bg-cover bg-center px-4"
      style={{
        backgroundImage: "url('/bg.gif')", // Ganti dengan URL gambar GIF yang diinginkan
      }}
    >
      <div className="flex flex-col items-center justify-center flex-grow">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-pixel text-white text-center">
          Escape Room Quiz 🏆
        </h1>
        <p className="inline-block text-base sm:text-lg md:text-xl mt-4 text-white text-center">
          Jawab semua pertanyaan untuk melarikan diri!
        </p>
        <button
          className="mt-6 px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-orange-600 hover:bg-orange-700 text-white rounded text-lg md:text-xl transition"
          onClick={() => router.push("/game")}
        >
          Mulai Permainan
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4 w-full mt-4">
        <p className="text-sm">
          &copy; PPG 2025 - Escape Room by Rifqotul Aulia.
        </p>
      </footer>
    </div>
  );
}
