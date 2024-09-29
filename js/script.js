// User inputs
let tipPercent2 = document.getElementById('tipPercent2');
let inputNumberBill2 = document.getElementById('inputNumberBill2');
let customInput = document.getElementById('customInput');

// Output fields
let printingTotalValue = document.getElementById('totalAmounthai');
let printingValuePerPerson = document.getElementById('perPersonAmount');
let cantBeZero = document.getElementById('cantBeZero');

// Variables for calculations
let tipPercent21, inputNumberBill21, answerAagya, answerWillBe, percentManual;

// Storing the user total bill amount input in a string and converting it to a number
tipPercent2.addEventListener('input', () => {
    tipPercent21 = Number(tipPercent2.value);
    console.log(tipPercent21);
});

// Storing the user number of persons and converting it to a number
inputNumberBill2.addEventListener('input', () => {
    inputNumberBill21 = Number(inputNumberBill2.value);
    console.log(inputNumberBill21);
});

// Calculating the total tip amount
function calculateTotalTip(percentValue) {
    answerAagya = ((tipPercent21 * percentValue) / 100).toFixed(2);
    printingTotalValue.innerText = `$${answerAagya}`;
    return answerAagya;
}

// Calculating the total tip per person
function calculateTipPerPerson(totalTip) {
    answerWillBe = (totalTip / inputNumberBill21).toFixed(2);
    printingValuePerPerson.innerText = `$${answerWillBe}`;
    return answerWillBe;
}

// Handling custom input for tip percentage
customInput.addEventListener('input', () => {
    percentManual = Number(customInput.value);
    
    if (isNaN(percentManual) || percentManual === '') {
        cantBeZero.style.display = "block";
        cantBeZero.innerText = "Enter a valid number!";
        return;
    }

    // Hide the error message if input is valid
    cantBeZero.style.display = "none";

    let totalTip = calculateTotalTip(percentManual);
    calculateTipPerPerson(totalTip);
});

// Handle case when input is empty or zero
function passingEmptyValue() {
    if (inputNumberBill2.value === '' || inputNumberBill2.value === '0' || inputNumberBill21 === 0) {
        inputNumberBill2.style.borderColor = "orangered";
        cantBeZero.style.display = "block";
        cantBeZero.innerText = "Can't be zero";
    } else if (inputNumberBill21 > 0) {
        cantBeZero.style.display = "none";
        inputNumberBill2.style.borderColor = ""; // Reset border color
        let totalTip = calculateTotalTip(Number(customInput.value) || tipPercent21);
        calculateTipPerPerson(totalTip);
    }
}

// Reset button functionality
function resetButton() {
    printingValuePerPerson.innerText = `$0.00`;
    printingTotalValue.innerText = `$0.00`;
    inputNumberBill2.value = '';
    tipPercent2.value = '';
    customInput.value = '';
}
