// displays the questions with clickable answers (activity 10 week 4)

// [array of questions]
const questions = [
  "What does HTML stand for?",
  "What does CSS stand for?",
  "Who was the first version of HTML written by?",
  "What year was the first version of HTML written?",
  "Which of these is NOT a programming language?",
];
const answers = [
  "Hypertext markup language",
  "Cascading style sheet",
  "Tim Berners-Lee",
  "1993",
  "Banana",
];
let counter = 0;
let correct = 0;
const choices = [
  [
    "Harry talks many languages",
    "Hypertext markdown link",
    "Hypertext markup language",
    "Houdini takes Mary's land",
  ],
  [
    "Cascading style sheet",
    "Cascading script sheet",
    "Carol sings songs",
    "Computer style software",
  ],
  ["Gandhi", "Bill Gates", "Benjamin Turner-Lee", "Tim Berners-Lee"],
  ["1862", "2001", "1987", "1993"],
  ["Ruby", "Java", "Banana", "Python"],
];

// var time = document.createElement(".time");
var timeEl = document.querySelector(".time");
var start = document.querySelector("#start");
var question = document.querySelector(".card-header");
var answersUl = document.querySelector(".list-group");
var secondsLeft = 300;
var li = document.querySelectorAll("li");
var score = document.querySelector(".score");
var card = document.querySelector(".card");
var initials = document.querySelector(".initials");
var save = document.querySelector(".save");
var scoresDisplay = document.querySelector(".highscores");
var calcScore;
var container = document.querySelector(".display");
console.log(li);
update();

// then user clicks answer, move to next question (change textContent) and display whether correct or not (logic)
function update() {
  question.innerHTML = questions[counter];
  li.forEach(function (choice, i) {
    choice.innerHTML = choices[counter][i];
  });
}

answersUl.addEventListener("click", function (e) {
  if (counter === 4) {
    displayHighscores();
    calcScore = (correct / counter) * 100;
    score.innerHTML = `Your score is ${calcScore}`;
    card.classList.add("invisible");
    container.classList.remove("invisible");
  } else {
    if (e.target.innerHTML === answers[counter]) {
      correct++;
    } else {
      secondsLeft--;
    }
    counter++;
    update();
  }
});

// as soon as quiz is started the timer starts counting down on questions.html (look at activity 8 week 4)

function setTime() {
  var timerInterval = setInterval(function () {
    if (counter < 4) {
      secondsLeft--;
      score.textContent = secondsLeft + " seconds left";
      console.log(counter);
    }

    if (secondsLeft === 0) {
      container.classList.remove("invisible");
      displayHighscores();
      calcScore = (correct / 5) * 100;
      clearInterval(timerInterval);
      score.textContent = `Time's up! Your score is ${calcScore}`;
      card.classList.add("invisible");
    }
  }, 1000);
}

setTime();

// when done with 5th question, all done page and gives them final score and stops timer (activity 8 week 4, activity 12 week 4) (clearInterval here)

// user enters in initials and clicks submit score

// render high score page and stores score in local storage (activity 28 week 4)

// if they ever run out of time, aka secondLeft === 0, also clearInterval

// create input when reached the end score, could also create another div in questions.html. select it and when game is over, initials.innerHTML = input(initials) button to save. on save grab value from input and add it to an array that you got from local storage and then update local storage with that array. if highscores is available if not create empty array called highscores or w.e. convert to json using stringify, to get it back .parse it.

var highscores = {};

if (localStorage.getItem("high") !== null) {
  highscores = JSON.parse(localStorage.getItem("high"));
}

function displayHighscores() {
  Object.keys(highscores)
    .sort(function (a, b) {
      return b - a;
    })
    .forEach(function (key) {
      // console.log(key);
      var li = document.createElement("LI");
      li.classList.add("li-score");
      li.innerHTML = `${highscores[key]} : ${key}`;
      scoresDisplay.appendChild(li);
    });
}

save.addEventListener("click", function () {
  highscores[calcScore] = initials.value;
  document.querySelectorAll("li-score").forEach(function (li) {
    console.log(li);
    li.remove();
  });
  displayHighscores();
  localStorage.setItem("high", JSON.stringify(highscores));
});
