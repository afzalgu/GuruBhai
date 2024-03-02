

function appendToScreen(value) {
    document.getElementById("screenid").value += value;
    
}

function deleteLastChar() {
    var screenValue = document.getElementById("screenid").value;
    document.getElementById("screenid").value = screenValue.slice(0, -1);
}

function resetScreen() {
  
    document.getElementById("screenid").value = "";
    
}

function calculateResult() {
    var screenValue = document.getElementById("screenid").value;
    var result = eval(screenValue); // Using eval for simplicity (not recommended for security reasons)

    // Display the entered numbers and the result below
   
    var displayValue ="\nAnswer = " + result;
    document.getElementById("screenid").value = displayValue;

    console.log(displayValue);
}

// // Prevent form submission and page refresh

document.getElementById("CalculatorForm").addEventListener("submit", function (event) {
    event.preventDefault();


});