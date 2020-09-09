// as soon as quiz is started the timer starts counting down on questions.html (look at activity 8 week 4)
var time = document.createElement(".time");
var timeEl = document.querySelector(".time");

var secondsLeft = 10;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);
}

setTime();
// displays the questions with clickable answers (activity 10 week 4)

// then user clicks answer, move to next question (change textContent) and display whether correct or not (logic)

// when done with 5th question, all done page and gives them final score and stops timer (activity 8 week 4, activity 12 week 4) (clearInterval here)

// user enters in initials and clicks submit score

// direct user to high score page and stores score in local storage (activity 28 week 4)

// if they ever run out of time, aka secondLeft === 0, also clearInterval
