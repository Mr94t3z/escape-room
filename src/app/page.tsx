"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/bg.gif')", // Ganti dengan URL gambar GIF yang diinginkan
      }}
    >
      <h1 className="text-4xl font-pixel text-white">Escape Room Quiz 🏆</h1>
      <p className="text-lg mt-4 text-white">Jawab semua pertanyaan untuk melarikan diri!</p>
      <button
        className="mt-6 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded text-lg"
        onClick={() => router.push("/game")}
      >
        Mulai Permainan
      </button>
    </div>
  );
}
