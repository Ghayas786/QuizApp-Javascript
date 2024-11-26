const quiz = [
  {
    question: "What is the most popular programming language?",
    ans1: "Java",
    ans2: "Python",
    ans3: "C++",
    correctAnswer: "Python",
  },
  {
    question: "Who is the President of Pakistan?",
    ans1: "Imran Khan",
    ans2: "Nawaz Sharif",
    ans3: "Asim Munir",
    correctAnswer: "Imran Khan",
  },
  {
    question: "What is 2 + 2?",
    ans1: "3",
    ans2: "4",
    ans3: "5",
    correctAnswer: "4",
  },
];

const question = document.getElementById("head");
const optionA = document.getElementById("type-option A");
const optionB = document.getElementById("type-option B");
const optionC = document.getElementById("type-option C");
const answer = document.querySelectorAll(".answer");

const submit = document.getElementById("Submit");
const resetButton = document.getElementById("Reset"); // Add a reset button

let current = 0;
let score = 0;

function loadQuestion() {
  question.textContent = quiz[current].question;
  optionA.textContent = quiz[current].ans1;
  optionB.textContent = quiz[current].ans2;
  optionC.textContent = quiz[current].ans3;
}

function resetQuiz() {
  current = 0;
  score = 0;
  loadQuestion();
}

// Initial question load
loadQuestion();

submit.addEventListener("click", () => {
  const checked = document.querySelector('input[type="radio"]:checked');

  if (checked) {
    const selectedAnswer = checked.nextElementSibling.textContent;
    const correctAnswer = quiz[current].correctAnswer;

    if (selectedAnswer === correctAnswer) {
      score++;
    }

    checked.checked = false;
    current++;

    if (current < quiz.length) {
      loadQuestion();
    } else {
      const result = `Quiz completed! Your score is ${score}/${quiz.length}`;
      alert(result);

      
      const restart = confirm("Do you want to restart the quiz?");
      if (restart) {
        resetQuiz();
      }
    }
  } else {
    alert("Please select an answer before submitting.");
  }
});
resetButton.addEventListener("click", resetQuiz);
