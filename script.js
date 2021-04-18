var colors = generateRandomColors(6);
var easyColors = [];
// gets a random color from the colors array and assigns it to the gameColor variable
var gameColor = pickColor();
var easyRandom;
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var squares = document.querySelectorAll(".square");
var displayColor = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

// displays a game color variable value in the span with the colorDisplay ID
displayColor.innerText = gameColor;

for(var i = 0; i < squares.length; i++) {
  // sets a random background color to each square
  squares[i].style.backgroundColor = colors[i]; 

  // add click listener to squares
  squares[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === gameColor) {
      message.innerText = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = gameColor;
    }
    else {
      this.style.backgroundColor = "#232323";
      message.innerText = "Try Again";
    }
  });
}

// function for changing color in all squares
// used when a user clicks on the correct (game) color
function changeColors(color) {
  for(var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
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

// assigns a random rgb color to each index in colors array for the amount of squares
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



function newColors() {
  for(var i = 0; i < squares.length; i++) {
    // Depending on number of squares add random colors to the colors array
    colors[i] = randomColor();
    // Set colors from colors array as background colors for squares
    squares[i].style.visibility = "visible";
    squares[i].style.backgroundColor = colors[i];

  } 
  gameColor = pickColor();
  displayColor.innerHTML = "";
  displayColor.innerHTML = gameColor;
}

// resetButton.addEventListener("click", newColors);

/*
- When we click on Easy mode 3 bottom squares need to be hidden
- Random color needs to be assigned to 3 ramaining squares
- Value of the picked radnom color needs to be displayed in span
*/

function easyMode() {
  for(var i = 3; i < squares.length; i++) {
    squares[i].style.visibility = "hidden";
  }
  for(var i = 0; i <squares.length - 3; i++) {
    easyColors[i] = randomColor();
    squares[i].style.backgroundColor = easyColors[i];

  }
  easyRandom = Math.floor(Math.random() * easyColors.length);
  gameColor = easyColors[easyRandom];
  displayColor.innerHTML = "";
  displayColor.innerHTML = gameColor;
}

easyButton.addEventListener("click", easyMode);

hardButton.addEventListener("click", newColors);