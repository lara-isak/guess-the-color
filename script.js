var colors = [];
var easyColors = [];
let gameColor;
var random;
var easyRandom;
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
let squares = document.querySelectorAll(".square");
let displayColor = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");

// Assigns a random rgb color to each index in colors array for the amount of squares
for(var i = 0; i < squares.length; i++) {
  colors[i] = randomColor();
}

// Gets a random color from the colors array and assigns it to the gameColor variable
gameColor = pickColor();

// Displays a game color variable value in the span with the colorDisplay ID
displayColor.innerText = gameColor;

for(let i = 0; i < squares.length; i++) {
  // Sets a random background color to each square
  squares[i].style.backgroundColor = colors[i]; 

   squares[i].addEventListener("click", function() {
    let clickedColor = this.style.backgroundColor;

    if (clickedColor == gameColor) {
      winReset();
    }
    else {
      this.style.backgroundColor = "#232323";
    }
  });
}

function winReset() {
  for(let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = gameColor;
  }  
}

function randomColor() {
  var o = Math.floor;
  var r = Math.random;
  var n = 256;

  return "rgb(" + o(r() * n) + ", " + o(r() * n) + ", " + o(r() * n) + ")";
}

function pickColor() {
  random = Math.floor(Math.random() * colors.length);
  return colors[random];
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