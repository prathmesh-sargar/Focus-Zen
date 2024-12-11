import React, { useState } from "react";

const ModulesSection = ({ onProgressUpdate }) => {
  const modules = [
    { id: 1, question: "What is a variable in Java?" },
    { id: 2, question: "Explain the concept of OOPs." },
    { id: 3, question: "What are Java's primitive data types?" },
    { id: 4, question: "What is a variable in Java?" },
    { id: 5, question: "Explain the concept of OOPs." },
    { id: 6, question: "What are Java's primitive data types?" },
    
  ];

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(0);

  const handleInputChange = (id, value) => {
    setAnswers({ ...answers, [id]: value });

    // Validate input length for enabling checkbox
    const isValid = value.length >= 100;
    const previouslyChecked = answers[id]?.length >= 100;

    if (isValid && !previouslyChecked) {
      setChecked((prev) => prev + 1);
      onProgressUpdate(checked + 1);
    } else if (!isValid && previouslyChecked) {
      setChecked((prev) => prev - 1);
      onProgressUpdate(checked - 1);
    }
  };

  return (
    <div className="w-full max-w-3xl bg-slate-800 text-white">
      <h2 className="text-2xl font-bold text-center mb-6 text-purple-500">
        Modules
      </h2>
      <div className="space-y-6">
        {modules.map((module) => (
          <div
            key={module.id}
            className="p-6  rounded-lg shadow-md transition-transform hover:scale-105"
          >
            {/* Module Question */}
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-white">{module.question}</p>
              <input
                type="checkbox"
                disabled={!(answers[module.id]?.length >= 50)}
                className="w-6 h-6 accent-purple-500 cursor-pointer"
              />
            </div>

            {/* Answer Textarea */}
            <textarea
              rows="4"
              placeholder="Write your answer here (minimum 100 characters)"
              className="mt-4 w-full p-3 text-white rounded-lg shadow-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
              onChange={(e) => handleInputChange(module.id, e.target.value)}
              value={answers[module.id] || ""}
            ></textarea>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesSection;
