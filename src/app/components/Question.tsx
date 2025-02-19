interface QuestionProps {
  question: string;
  options: string[];
  onAnswer: (answer: string) => void;
}

const Question = ({ question, options, onAnswer }: QuestionProps) => {
  return (
    <div className="bg-gray-800 p-6 sm:p-8 rounded-lg mb-4 max-w-md w-full mx-auto">
      <h2 className="inline-block text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white text-center">
        {question}
      </h2>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <button
            key={index}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white text-base sm:text-lg p-3 rounded transition-all duration-200"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
