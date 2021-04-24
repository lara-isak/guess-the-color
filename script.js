var numCircles = 6;
var colors = [];
var gameColor;
var resetButton = document.querySelector("#reset");
var circles = document.querySelectorAll(".circle");
var gameColorDisplay = document.querySelector("#gameColorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setUpModeButtons();
  setUpCirclesGame();
  reset();
}

function setUpModeButtons() {
  for(var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      for(var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].classList.remove("selected");
      }
      this.classList.add("selected");
      this.innerText === "EASY" ? numCircles = 3 
      : this.innerText === "NORMAL" ? numCircles = 6 
      : numCircles = 9;
      reset();
    });
  }
}

function setUpCirclesGame() {
  for(var i = 0; i < circles.length; i++) {
    circles[i].addEventListener("click", function() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === gameColor) {
        message.innerText = "Correct!";
        changeColorsOnWin(clickedColor);
        h1.style.backgroundColor = gameColor;
        resetButton.innerText = "Play Again?";
      }
      else {
        this.style.backgroundColor = "#232323";
        message.innerText = "Try Again";
      }
    });
  }
}

function reset() {
  // generate all new colors
  colors = generateRandomColors(numCircles);
  // pick new color from array and set it as a game color
  gameColor = pickColor();
  // display the value of the game color in h1
  gameColorDisplay.innerText = gameColor;
  resetButton.innerText = "New Colors";
  message.innerText = "";
  h1.style.backgroundColor = "#a50b5e";
  // change colors of circles
  for(var i = 0; i < circles.length; i++) {
    if(colors[i]) {
      circles[i].style.display = "block";
      circles[i].style.backgroundColor = colors[i];
    } else {
      circles[i].style.display = "none";
    }    
  }  
}

resetButton.addEventListener("click", function(){
  reset();
});

// function for changing color in all circles
// used when a user clicks on the correct (game) color
function changeColorsOnWin(color) {
  for(var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = color;
  }  
}

// function for picking up a random (game) color from colors array
// used when page restarts, when clicked on New Game / Easy / Hard buttons 
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// function that returns a single RGB color with 3 random numbers from 0 - 255
// used to generate an array of random colors when page restarts, when clicked on New Game / Easy / Hard buttons
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  // rgb(1, 2, 3)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// assigns a random rgb color to each index in colors array for the amount of circles
function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to array
  for(var i = 0; i < num; i++) {
    arr[i] = randomColor();
  }
  // return that array
  return arr;
}


/* Initial code for the Easy & Hard buttons
function newColors() {
  for(var i = 0; i < circles.length; i++) {
    // Depending on number of circles add random colors to the colors array
    colors[i] = randomColor();
    // Set colors from colors array as background colors for circles
    circles[i].style.visibility = "visible";
    circles[i].style.backgroundColor = colors[i];

  } 
  gameColor = pickColor();
  gameColorDisplay.innerHTML = "";
  gameColorDisplay.innerHTML = gameColor;
}

function easyMode() {
  for(var i = 3; i < circles.length; i++) {
    circles[i].style.visibility = "hidden";
  }
  for(var i = 0; i <circles.length - 3; i++) {
    easyColors[i] = randomColor();
    circles[i].style.backgroundColor = easyColors[i];

  }
  easyRandom = Math.floor(Math.random() * easyColors.length);
  gameColor = easyColors[easyRandom];
  gameColorDisplay.innerHTML = "";
  gameColorDisplay.innerHTML = gameColor;
}

easyButton.addEventListener("click", easyMode);

hardButton.addEventListener("click", newColors);
*/