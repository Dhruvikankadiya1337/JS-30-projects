const quizData = [
  {
      question: "1.What does HTML stand for?",
      options: ["A. Hyper Text Markup Language", "B. Home Tool Markup Language", "C. Hyper Tool Multi Language", "D. Hyper Tag Main Language"],
      answer: 0
  },
  {
      question: "2. Which language is used to style web pages?",
      options: ["A. HTML", "B. JQuery", "C. CSS", "D. XML"],
      answer: 2
  },
  {
      question: "3. Inside which HTML element do we put JavaScript?",
      options: ["A. <script>", "B. <js>", "C. <scripting>", "D. <javascript>"],
      answer: 0
  },
  {
      question: "4. Which is not a JavaScript data type?",
      options: ["A. Undefined", "B. Boolean", "C. Float", "D. Number"],
      answer: 2
  },
  {
      question: "5. How do you write 'Hello World' in an alert box?",
      options: ["A. msg('Hello World')", "B. alert('Hello World')", "C. msgBox('Hello World')", "D.alertBox('Hello World')"],
      answer: 1
  },
  {
      question: "6.Which tag is used to define an unordered list?",
      options: ["A. <ul>", "B. <ol>", "C. <li>", "D. <list>"],
      answer: 0
  },
  {
      question: "7. What is the correct syntax for a CSS class?",
      options: ["A. .classname", "B. #classname", "C. classname{}", "D. class:classname"],
      answer: 0
  },
  {
      question: "8. What does DOM stand for?",
      options: ["A. Document Object Model", "B. Display Object Management", "C. Digital Ordinance Model", "D.Desktop Oriented Mode"],
      answer: 0
  },
  {
      question: "9. Which of the following is not a loop in JavaScript?",
      options: ["A. for", "B. while", "C. loop", "D. do...while"],
      answer: 2
  },
  {
      question: "10. How do you comment in JavaScript?",
      options: ["A. <!-- comment -->", "B. // comment", "C. ** comment **", "D. # comment"],
      answer: 1
  },
];

let current = 0;
let score = 0;
let timer = [];
let timeLeft = 60;

const questionBox = document.getElementById("question");
const optionsBox = document.getElementById("options");
const timerBox = document.getElementById("timer");
const scoreBox = document.getElementById("score");
const progress = document.querySelector(".progress");

function startTimer() {
  timeLeft = 60;
  timerBox.textContent = `${timeLeft}s`;
  timer = setInterval(() => {
      timeLeft--;
      timerBox.textContent = `${timeLeft}s`;
      if (timeLeft == 0) {
          clearInterval(timer);
          nextQuestion();
      }
  }, 1000);
}

function showQuestion() {
  const q = quizData[current];
  questionBox.textContent = q.question;
  optionsBox.innerHTML = "";
  q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(i);
      optionsBox.appendChild(btn);
  });
  updateProgress();
  startTimer();
}

function checkAnswer(i) {
  clearInterval(timer);
  if (i == quizData[current].answer) {
      score++;
  }
  nextQuestion();
}

function nextQuestion() {
  current++;
  if (current < quizData.length) {
      showQuestion();
  } else {
      showScore();
  }
}

function updateProgress() {
  const percent = (current / quizData.length) * 100;
  progress.style.setProperty('--progress', `${percent}%`);
  progress.style.setProperty('width', `${percent}%`);
}

function showScore() {
  questionBox.style.display = "none";
  optionsBox.style.display = "none";
  timerBox.style.display = "none";
  progress.style.display = "none";
  scoreBox.classList.remove("hidden");
  scoreBox.textContent = `🎉 Your Score: ${score} / ${quizData.length}`;
}
showQuestion();