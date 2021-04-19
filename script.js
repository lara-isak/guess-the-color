var colors = generateRandomColors(6);
// gets a random color from the colors array and assigns it to the gameColor variable
var gameColor = pickColor();
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var circles = document.querySelectorAll(".circle");
var displayColor = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

// displays a game color variable value in the span with the colorDisplay ID
displayColor.innerText = gameColor;

for(var i = 0; i < circles.length; i++) {
  // sets a random background color to each square
  circles[i].style.backgroundColor = colors[i]; 
  // add click listener to circles
  circles[i].addEventListener("click", function() {
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === gameColor) {
      message.innerText = "Correct";
      changeColors(clickedColor);
      h1.style.backgroundColor = gameColor;
      resetButton.innerText = "Play Again?";
    }
    else {
      this.style.backgroundColor = "#232323";
      message.innerText = "Try Again";
    }
  });
}

// function for changing color in all circles
// used when a user clicks on the correct (game) color
function changeColors(color) {
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

resetButton.addEventListener("click", function(){
  // generate all new colors
  colors = generateRandomColors(6);
  // pick new color from array
  gameColor = pickColor();
  // change displayColor to game color
  displayColor.innerText = gameColor;
  // change colors of circles
  for(var i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = colors[i];
    circles[i].style.display = "block";
  }
  h1.style.backgroundColor = "#a50b5e";
  resetButton.innerText = "New Colors";
  message.innerText = "";
});

easyButton.addEventListener("click", function(){
  //add selected class to easyButton and remove selected class from hardButton
  easyButton.classList.add("selected");
  hardButton.classList.remove("selected"); 
  colors = generateRandomColors(3);
  gameColor = pickColor();
  displayColor.innerText = gameColor;
  for(var i = 0; i < circles.length; i++) {
    if(colors[i])
      circles[i].style.backgroundColor = colors[i];
    else{
      circles[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "#a50b5e";
  resetButton.innerText = "New Colors";
  message.innerText = "";
});

hardButton.addEventListener("click", function(){
  //add selected class to easyButton and remove selected class from hardButton
  hardButton.classList.add("selected");
  easyButton.classList.remove("selected"); 
  colors = generateRandomColors(6);
  gameColor = pickColor();
  displayColor.innerText = gameColor;
  for(var i = 0; i < circles.length; i++) {
      circles[i].style.backgroundColor = colors[i];
      circles[i].style.display = "block";
    }
  h1.style.backgroundColor = "#a50b5e";
  resetButton.innerText = "New Colors";
  message.innerText = "";
});



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
  displayColor.innerHTML = "";
  displayColor.innerHTML = gameColor;
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
  displayColor.innerHTML = "";
  displayColor.innerHTML = gameColor;
}

easyButton.addEventListener("click", easyMode);

hardButton.addEventListener("click", newColors);
*/