// This three are user input
let tipPercent2 = document.getElementById('tipPercent2');
let inputNumberBill2 = document.getElementById('inputNumberBill2');
let customInput = document.getElementById('customInput');


// Giving the answer value in page
let printingTotalValue = document.getElementById('totalAmounthai');
let printingValuePerPerson = document.getElementById('perPersonAmount');


// This all strings containing formulas
let tipPercent21;
let inputNumberBill21;
let answerAagya;
let answerWillBe;
let percentManual;
let cantBeZero = document.getElementById('cantBeZero');


// Storing the user total bill amount input in a string and converting it from string to integer using float
tipPercent2.addEventListener('input', ()=>{
    tipPercent21 = parseFloat(tipPercent2.value);
    console.log(tipPercent21);
});


// Storing the user total persons in a string and converting it from string to integer using float
inputNumberBill2.addEventListener('input', ()=>{
    inputNumberBill21 = parseFloat(inputNumberBill2.value);
    console.log(inputNumberBill21);
});


// Calculating the total tip amount.
function getValue(percentValue){
    answerAagya = (((tipPercent21) * percentValue) / 100).toFixed(2);
    document.getElementById('totalAmounthai').innerText = `$${answerAagya}`;
    return answerAagya;
}


// Calculating the total tip amount per person.
function getValuePerPerson(weGot){ 
    answerWillBe = ((weGot / inputNumberBill21)).toFixed(2);
    document.getElementById('perPersonAmount').innerText = `$${answerWillBe}`;
    return answerWillBe;
}


// Getting the user percentage input in a string and converting it into a integer
customInput.addEventListener('input', ()=>{
    percentManual = parseFloat(((customInput.value)*100)/100);
    answerAagya = ((parseFloat(tipPercent21) * percentManual) / 100).toFixed(2);
    answerWillBe = (parseFloat(answerAagya / inputNumberBill21)).toFixed(2);
    printingTotalValue.innerText = `$${answerAagya}`;
    printingValuePerPerson.innerText = `$${answerWillBe}`;
    if(customInput != parseFloat){
        cantBeZero.style.display = "block";
        cantBeZero.innerText = "Enter a number!";
    } 
    if(customInput.value > 0){
        cantBeZero.style.display = "none";
    }
});

function passingEmptyValue(){
    if(inputNumberBill2.value === '' || inputNumberBill2.value === '0' || inputNumberBill21 == '' || inputNumberBill21 == 0){
        inputNumberBill2.style.borderColor = "orangered";
        cantBeZero.style.display = "block";
        cantBeZero.innerText = "Can't be zero";
    } else if(inputNumberBill21 > 0){
        cantBeZero.style.display = "none";
        inputNumberBill2.style.borderColor = "white";
        weGot = getValue(percentValue);
        valuePerPerson = getValuePerPerson(weGot);
    }
}   

// This is reset Button..
function resetButton(){
    printingValuePerPerson.innerText = `$0.00`;
    printingTotalValue.innerText = `$0.00`;
    document.getElementById('inputNumberBill2').value = '';
    document.getElementById('tipPercent2').value = '';
    document.getElementById('customInput').value = '';
}