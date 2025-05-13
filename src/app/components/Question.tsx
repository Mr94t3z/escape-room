/* eslint-disable @next/next/no-img-element */

interface Option {
  label: string;
  imageUrl?: string;
}

interface QuestionProps {
  question: string;
  image?: string;
  options: (string | Option)[];
  onAnswer: (answer: string) => void;
}

const Question = ({ question, image, options, onAnswer }: QuestionProps) => {
  return (
    <div className="bg-gray-800/80 p-6 sm:p-8 rounded-lg mb-4 w-full max-w-2xl px-6 sm:px-10 mx-auto overflow-y-auto max-h-[90vh]">
      <h2 className="text-base sm:text-lg md:text-xl font-semibold mb-3 text-white text-center break-words">
        {question}
      </h2>

      {/* Menampilkan gambar jika ada */}
      {image && (
        <div className="mb-4">
          <img
            src={image}
            alt="Ilustrasi pertanyaan"
            className="w-full h-auto rounded-lg"
          />
        </div>
      )}

      <div className={options.length === 4 ? "grid grid-cols-2 gap-3" : "flex flex-col gap-3"}>
        {options.map((option, index) => {
          const label = typeof option === "string" ? option : option.label;
          const imageUrl = typeof option === "string" ? null : option.imageUrl;

          return (
            <button
              key={index}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base p-3 rounded transition-all duration-200 flex items-center justify-center gap-3 text-center min-h-[64px]"
              onClick={() => onAnswer(label)}
            >
              {imageUrl ? (
                <>
                  <img
                    src={imageUrl}
                    alt={label}
                    className="h-10 w-10 object-contain"
                  />
                  <span className="ml-3">{label}</span>
                </>
              ) : (
                <span>{label}</span> // Center the text if no image
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
