// User inputs
let tipPercent2 = document.getElementById('tipPercent2');
let inputNumberBill2 = document.getElementById('inputNumberBill2');
let customInput = document.getElementById('customInput');

// Output fields
let printingTotalValue = document.getElementById('totalAmounthai');
let printingValuePerPerson = document.getElementById('perPersonAmount');
let cantBeZero = document.getElementById('cantBeZero');

// Variables for calculations
let billAmount = 0;
let HowManyPersons = 0;
let percentManual = 0;
let TotalAmoutAnswer = 0;

// Storing the user total bill amount input and converting it to a number
tipPercent2.addEventListener('input', () => {
    billAmount = parseFloat(tipPercent2.value);
    return billAmount;
});

// Storing the user number of persons and converting it to a number
inputNumberBill2.addEventListener('input', () => {
    HowManyPersons = parseFloat(inputNumberBill2.value);
    checkZero();
    return HowManyPersons;
});

// Check if the bill amount or number of people is 0 or invalid
function checkZero() {
    if (isNaN(billAmount) || billAmount <= 0) {
        tipPercent2.style.borderColor = "orangered";
        cantBeZero.style.display = "block";
        cantBeZero.innerText = "Bill can't be zero";
    } else if (isNaN(HowManyPersons) || HowManyPersons <= 0) {
        inputNumberBill2.style.borderColor = "orangered";
        cantBeZero.style.display = "block";
        cantBeZero.innerText = "Can't be zero";
    } else {
        cantBeZero.style.display = "none";
        tipPercent2.style.borderColor = "";
        inputNumberBill2.style.borderColor = "";
    }
}

// Calculating the total tip amount
function calculateTotalTip(percentValue) {
    // Check for valid inputs first
    if (billAmount > 0 && HowManyPersons > 0) {
        TotalAmoutAnswer = ((billAmount * percentValue) / 100).toFixed(2);
        printingTotalValue.innerText = `$${TotalAmoutAnswer}`;
        calculateTipPerPerson(TotalAmoutAnswer);
        return Number(TotalAmoutAnswer);
    } else {
        checkZero();
    }
}

// Calculating the total tip per person
function calculateTipPerPerson(TotalAmoutAnswer) {
    if (HowManyPersons > 0) {
        let TipAmountPerPerson = (TotalAmoutAnswer / HowManyPersons).toFixed(2);
        printingValuePerPerson.innerText = `$${TipAmountPerPerson}`;
        return TipAmountPerPerson;
    }
}

// Handling custom input for tip percentage
customInput.addEventListener('input', () => {
    percentManual = parseFloat(customInput.value);
    
    if (isNaN(percentManual) || percentManual === '') {
        cantBeZero.style.display = "block";
        cantBeZero.innerText = "Enter a valid number!";
    } else {
        cantBeZero.style.display = "none"; 
        let totalTip = calculateTotalTip(percentManual);
        calculateTipPerPerson(totalTip);
    }
});

// Handle case when input is empty or zero
function passingEmptyValue() {
    if (inputNumberBill2.value === '' || inputNumberBill2.value === '0' || billAmount === 0) {
        checkZero();
    } else if (billAmount > 0 && HowManyPersons > 0) {
        let totalTip = calculateTotalTip(Number(customInput.value) || tipPercent2.value);
        // calculateTipPerPerson(totalTip);
    }
}

// Reset button functionality
function resetButton() {
    printingValuePerPerson.innerText = `$0.00`;
    printingTotalValue.innerText = `$0.00`;
    inputNumberBill2.value = '';
    tipPercent2.value = '';
    customInput.value = '';
    billAmount = 0;
    HowManyPersons = 0;
}

// Fixing the percentage button clicks
function handlePercentageClick(percentValue) {
    if (billAmount > 0 && HowManyPersons > 0) {
        let totalTip = calculateTotalTip(percentValue);
        calculateTipPerPerson(totalTip);
    } else {
        checkZero();
    }
}