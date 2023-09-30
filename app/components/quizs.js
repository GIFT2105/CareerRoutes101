"use client"
import React, { useState } from 'react';

const CharacterqTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(10).fill(false));
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [careerRecommendations, setCareerRecommendations] = useState("");

  const quizQuestions = [
    {
      question: "What is your favorite subject in school?",
      options: ["A. Math", "B. Science", "C. History", "D. Art"],
    },
    {
      question: "Which activity do you enjoy the most?",
      options: ["A. Playing sports", "B. Reading", "C. Watching movies", "D. Drawing or painting"],
    },
    {
      question: "What type of movies or TV shows do you prefer?",
      options: ["A. Action", "B. Mystery", "C. Drama", "D. Comedy"],
    },
    {
      question: "How do you like to spend your free time?",
      options: ["A. Socializing with friends", "B. Exploring nature", "C. Playing video games", "D. Cooking or baking"],
    },
    {
      question: "What skill would you like to improve the most?",
      options: ["A. Communication", "B. Problem-solving", "C. Creativity", "D. Technical skills"],
    },
    {
      question: "What kind of challenges do you enjoy solving?",
      options: ["A. Logical puzzles", "B. Social issues", "C. Artistic challenges", "D. Scientific problems"],
    },
    {
      question: "What do you enjoy learning about the most?",
      options: ["A. History", "B. Science", "C. Literature", "D. Technology"],
    },
    {
      question: "Which of these jobs sounds most appealing to you?",
      options: ["A. Travel blogger", "B. DOCTOR", "C. Chef", "D. Software developer"],
    },
    {
      question: "What kind of projects do you enjoy working on?",
      options: ["A. Creative arts", "B. Science experiments", "C. DIY home projects", "D. Coding projects"],
    },
    {
      question: "What impact do you want to make in the world?",
      options: ["A. Environmental conservation", "B. Advancing technology", "C. Promoting education", "D. Improving healthcare"],
    },
  ];

  const handleAnswerSelect = (optionIndex) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = optionIndex;
    setUserAnswers(updatedAnswers);
  };

  const calculateRecommendations = (answers) => {
    const selectedOptions = answers.map((answer, index) => {
      // For questions 1, 3, 5, 6, 9, if user selects A or B, push true, else false
      if ([0, 2, 4, 5, 8].includes(index)) {
        return answer === 0 || answer === 1;
      }
      // For questions 2, 4, 7, 8, 10, if user selects B or D, push true, else false
      else if ([1, 3, 6, 7, 9].includes(index)) {
        return answer === 1 || answer === 3;
      }
      return false;
    });

    // Check if all selected options match the respective questions' conditions
    const isSoftwareRoute = selectedOptions[0] && selectedOptions[2] && selectedOptions[4] && selectedOptions[5] && selectedOptions[8];
    const isCreativeRoute = selectedOptions[1] && selectedOptions[3] && selectedOptions[6] && selectedOptions[7] && selectedOptions[9];

    if (isSoftwareRoute) {
      return "Software Development, Data Science, Healthcare, Engineering, Environmental Science";
    } else if (isCreativeRoute) {
      return "Graphic Design, Teaching, Marketing, Entrepreneurship, Social Work";
    } else {
      return "No specific recommendation";
    }
  };

  const handleGetRecommendations = () => {
    const recommendations = calculateRecommendations(userAnswers);
    setCareerRecommendations(recommendations);
    setShowRecommendations(true);
  };


  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate and display career recommendations
      const recommendations = calculateRecommendations();
      // Show recommendations to the user
      console.log("Career Recommendations:", recommendations);
    }
  };

  return (
    <main className="flex w-screen h-screen  mt-10 flex-col items-center   text-black">
    <div className='h-auto border-4 text-white bg-black font-serif  border-violet-300 rounded-xl text-center    w-72 '>
    <h1 className='mt-2 mb-2'>Character Test</h1>
      <div className="question">
        <p className='mt-2 mb-6'>{quizQuestions[currentQuestion].question}</p>
        <div className="options">
          {quizQuestions[currentQuestion].options.map((option, optionIndex) => (
            <label key={optionIndex}>
              <input className='flex flex-col text-right mt-2'
                type="radio"
                name="answer-options"
                value={optionIndex}
                checked={userAnswers[currentQuestion] === optionIndex}
                onChange={() => handleAnswerSelect(optionIndex)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      {currentQuestion !== quizQuestions.length - 1 && (
        <button id='cards' className='mt-4 rounded-md  ' onClick={handleNextQuestion}>
          Next Question
        </button>
      )}

      {currentQuestion === quizQuestions.length - 1 && (
        <button id='cards' className='mt-4 rounded-md'  onClick={handleGetRecommendations}>
          Get Career Recommendations
        </button>
      )}

      {showRecommendations && (
        <div className="recommendations">
          <h2 className='mt-2'>Career Recommendations:</h2>
          <p className='mt-2'>{careerRecommendations}</p>
        </div>
      )}
      </div> 
    </main>
  );
};


export default CharacterqTest;