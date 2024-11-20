document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const QuestionContainer = document.getElementById("question-container");
  const QuestionText = document.getElementById("question-text");
  const choiceList = document.getElementById("choices-list");
  const resultContainer = document.getElementById("result-container");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question:
        "Which programming language is known as the backbone of web development?",
      choices: ["Python", "Java", "JavaScript", "C++"],
      answer: "JavaScript",
    },
    {
      question: "What is the largest planet in our Solar System?",
      choices: ["Earth", "Jupiter", "Saturn", "Mars"],
      answer: "Jupiter",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      choices: [
        "William Shakespeare",
        "Charles Dickens",
        "Leo Tolstoy",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      choices: ["Oxygen", "Gold", "Iron", "Silver"],
      answer: "Oxygen",
    },
    {
      question: "What does HTML stand for?",
      choices: [
        "Hyper Text Markup Language",
        "Hyperlinks and Text Markup Language",
        "Home Tool Markup Language",
        "Hyper Tool Markup Logic",
      ],
      answer: "Hyper Text Markup Language",
    },
    {
      question: "What is the speed of light in a vacuum?",
      choices: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "300 km/s", "3000 m/s"],
      answer: "3 × 10⁸ m/s",
    },
    {
      question: "Which continent is the Sahara Desert located on?",
      choices: ["Asia", "Africa", "South America", "Australia"],
      answer: "Africa",
    },
    {
      question: "What is the hardest natural substance on Earth?",
      choices: ["Gold", "Iron", "Diamond", "Platinum"],
      answer: "Diamond",
    },
    {
      question: "Which programming language is used for developing iOS apps?",
      choices: ["Swift", "Java", "Kotlin", "C#"],
      answer: "Swift",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    startQuiz();
  });

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    QuestionContainer.classList.remove("hidden");

    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");

    QuestionText.textContent = questions[currentQuestionIndex].question;
    choiceList.innerHTML = ""; // clear previous choices
    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      li.textContent = choice;
      li.addEventListener("click", () => selectAnswer(choice));
      choiceList.appendChild(li);
    });
  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }

  function showResult() {
    QuestionContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
});
