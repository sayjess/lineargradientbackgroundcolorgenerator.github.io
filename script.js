var _ = require('lodash');

var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");
const rgbToHex = rgb => '#' + (rgb.match(/[0-9|.]+/g).map((x, i) => i === 3 ? parseInt(255 * parseFloat(x)).toString(16) : parseInt(x).toString(16)).join('')).padStart(2, '0').toUpperCase();




function setGradient(){
    body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
    h3.textContent = body.style.background + ";";

}

function randomColorGenerator() {
	var col1 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
	  ", " +
	  Math.floor(Math.random() * 255) +
	  ", " +
	  Math.floor(Math.random() * 255) +
	  ")" + ";");
  
	var col2 = "rgb" + "(" + (Math.floor(Math.random() * 255) +
	  ", " +
	  Math.floor(Math.random() * 255) +
	  ", " +
	  Math.floor(Math.random() * 255) +
	  ")" + ";");
	  console.log(col1)
	  color1.value=rgbToHex(col1)
	  color2.value=rgbToHex(col2)
	  console.log(color1.value,color2.value)
	  setGradient();
  }

button.addEventListener("click", randomColorGenerator);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);