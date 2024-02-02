// Quiz database

const quizData = [
    {
      question: "Q1: Who is god of cricket?",
      option1: "Virat Kohli",
      option2: "Dhoni",
      option3: "Rohit",
      option4: "Sachin",
      correctAnswer: "ans4",
    },
    {
      question: "Q2: What does HTML stands for?",
      option1: "HighText Machine Language",
      option2: "HyperText and links Markup Language",
      option3: "HyperText Markup Language",
      option4: "None of these",
      correctAnswer: "ans3",
    },
    {
      question: "Q3: Who is founder of SpaceX",
      option1: "Elon Musk",
      option2: "Steve JObs",
      option3: "Larrry page",
      option4: "Bill Gates",
      correctAnswer: "ans1",
    },
    {
      question:
        "Q4: Which of the following is correct about features of JavaScript?",
      option1: "Javascript is complementary to and integrated with HTML.",
      option2: "Javascript is open and cross platform.",
      option3: "Both of the above",
      option4: "All of the above",
      correctAnswer: "ans3",
    },
  ];
  
  // Functionality starts from here
  
  let counter = 0;
  
  let score = document.querySelector("#scoring");
  
  let data;
  
  function loadQuestion() {
    data = quizData[counter];
    let question = document.querySelector(".question");
    question.innerText = data.question;
    let option1 = document.querySelector(".answer1");
    option1.innerText = data.option1;
    let option2 = document.querySelector(".answer2");
    option2.innerText = data.option2;
    let option3 = document.querySelector(".answer3");
    option3.innerText = data.option3;
    let option4 = document.querySelector(".answer4");
    option4.innerText = data.option4;
  }
  
  loadQuestion();
  
  
  let options = document.querySelectorAll(".ans");
  
  let scoreBoard = 0;
  let userChoice;
  
  // HANDLING ONCLICK SUBMIT EVENT
  
  const deselectAll = () => {
      options.forEach((option) => {
          option.checked = false;
      })
  }
  
  let submit = document.querySelector("#submit");
  submit.addEventListener("click", () => {
    for (let i = 0; i < options.length; i++) {
      if (options[i].checked) {
        userChoice = options[i].id;
      }
    }
  
    if (userChoice === data.correctAnswer) {
      scoreBoard++;
    }
  
    deselectAll();
  
    counter++;
    if (counter < quizData.length) {
      loadQuestion();
    } else {
      score.innerHTML = `
                   <h2>You scored ${scoreBoard}/${quizData.length} ✌️</h2>
                  <button onClick="window.location.reload();">Play Again</button>
          `;
      submit.style.visibility = "hidden";
      score.classList.remove("scoreBox");
      score.classList.add("showScore");
    }
  });
  
