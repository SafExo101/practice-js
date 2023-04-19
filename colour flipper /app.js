const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]; //represent colours we will have in the app

const btn = document.getElementById("btn"); //links back to html template
const color = document.querySelector(".color");

/*
Every time we click on button, change the colour
Get random number between 0 and 3 --> color array has 3 indexes (colors[2])
*/
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber(); //initially was hardcoded "2"
  console.log(randomNumber); // returns weird numbers like 0.288259154496016 

  document.body.style.backgroundColor = colors[randomNumber]; //array on line 1
  color.textContent = colors[randomNumber]; // prop for background color

  // RESULT = CLICK ON "CLICK ME" AND SEE BACKGROUND COLOR CHANGE
});

// make function to generate random number

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length); // array length is 4 --> gives us number between 0 and 3
} // Math.floor rounds down to closest interger ... in the console, you can see the number changing to whole numbers 