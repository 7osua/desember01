const userInput = document.getElementById("input-number");
const addButton = document.getElementById("btn-add");
const subtractButton = document.getElementById("btn-subtract");
const multiplyButton = document.getElementById("btn-multiply");
const divideButton = document.getElementById("btn-divide");

const currentResultOutput = document.getElementById("current-result");
const currentCalculationOutput = document.getElementById("current-calculation");

function outputResult(result, text) {
	currentResultOutput.textContent = result;
	currentCalculationOutput.textContent = text;
}

console.log("From vendor.js script!");
