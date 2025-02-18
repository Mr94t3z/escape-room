interface QuestionProps {
    question: string;
    options: string[];
    onAnswer: (answer: string) => void;
  }
  
  const Question = ({ question, options, onAnswer }: QuestionProps) => {
    return (
      <div className="bg-gray-800 p-6 rounded-lg mb-4">
        <h2 className="text-lg font-semibold mb-4">{question}</h2>
        {options.map((option, index) => (
          <button
            key={index}
            className="block w-full bg-orange-500 hover:bg-orange-600 p-2 rounded my-2"
            onClick={() => onAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
    );
  };
  
  export default Question;
  