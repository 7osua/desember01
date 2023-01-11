const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = "";
let logEntries = [];

// Get Input Value from input field [vendor.js]
function getUserNumberInput() {
	return parseInt(userInput.value);
}

// create and write calculation log
function createWriteLog(
	resultBeforeCalculation,
	operator,
	currentCalculationNumber,
) {
	calculationDescription = `${resultBeforeCalculation} ${operator} ${currentCalculationNumber}`;
	outputResult(currentResult, calculationDescription); // function from [vendor.js]
}

function writeToLog(
	operationIdentifier,
	prevResult,
	operationNumber,
	newResult,
) {
	const logEntry = {
		operator: operationIdentifier,
		prevResult: prevResult,
		number: operationNumber,
		result: newResult,
	};
	logEntries.push(logEntry);
	console.table(logEntries);
}

function calculateResult(calculationType) {
	const enteredNumber = getUserNumberInput();
	const initialCalculation = currentResult;
	let mathOperator;

	// if (
	// 	calculationType !== "add" &&
	// 	calculationType !== "subtract" &&
	// 	calculationType !== "multiply" &&
	// 	calculationType !== "divide"
	// ) {
	// 	return;
	// }

	// if (enteredNumber === 0) return;
	if (!enteredNumber) return;

	if (
		calculationType === "add" ||
		calculationType === "subtract" ||
		calculationType === "multiply" ||
		calculationType === "divide"
	) {
		if (calculationType === "add") {
			currentResult += enteredNumber;
			mathOperator = "+";
		} else if (calculationType === "subtract") {
			currentResult -= enteredNumber;
			mathOperator = "-";
		} else if (calculationType === "multiply") {
			currentResult *= enteredNumber;
			mathOperator = "*";
		} else if (calculationType === "divide") {
			currentResult /= enteredNumber;
			mathOperator = "/";
		}

		createWriteLog(initialCalculation, mathOperator, enteredNumber);
		writeToLog(
			calculationType,
			initialCalculation,
			enteredNumber,
			currentResult,
		);
	}
}

addButton.addEventListener("click", calculateResult.bind(this, "add"));
subtractButton.addEventListener(
	"click",
	calculateResult.bind(this, "subtract"),
);
multiplyButton.addEventListener(
	"click",
	calculateResult.bind(this, "multiply"),
);
divideButton.addEventListener("click", calculateResult.bind(this, "divide"));

console.log("hello! from app.js");
