const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//going to generate RANDOM hex colours using digits/letters above

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

/*
Hex has hashtag, 0-9 or a-f in the array (14 elements)
Set up loop on the array to generate hex colour 
on the fly then add the value within the "color" span in html 
*/
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    //run from 0-5 (6 times), increment by 1
    hexColor += hex[getRandomNumber()]; //hardcoded initially
    //if you have just "=" it will override this in every iteration
  }
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length) //multiply by length of array to ensure we get values between 0 and the last index
}
