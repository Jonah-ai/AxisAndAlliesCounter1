const infantryPlus = document.querySelector ('#infantry-plus')
const infantryMinus = document.querySelector ('#infantry-minus')
const unitsPurchased = document.querySelector ('.unitsPurchased')
const artilleryPlus = document.querySelector('#Artillery-plus')
const artilleryMinus = document.querySelector('#Artillery-minus')
const tankPlus = document.querySelector('#tankPlus')
const tankMinus = document.querySelector('#tankMinus')
const AAPlus = document.querySelector('#AAPlus')
const AAMinus = document.querySelector('#AAMinus')
const ICPlus = document.querySelector('#ICPlus')
const ICMinus = document.querySelector('#ICMinus')
const fighterPlus = document.querySelector('#fighterPlus')
const fighterMinus = document.querySelector('#fighterMinus')
const bomberPlus = document.querySelector('#bomberPlus')
const bomberMinus = document.querySelector('#bomberMinus')
const subPlus = document.querySelector('#subPlus')
const subMinus = document.querySelector('#subMinus')
const transportPlus = document.querySelector('#transportPlus')
const transportMinus = document.querySelector('#transportMinus')
const destroyerPlus = document.querySelector('#destroyerPlus')
const destroyerMinus = document.querySelector('#destroyerMinus')
const cruiserPlus = document.querySelector('#cruiserPlus')
const cruiserMinus = document.querySelector('#cruiserMinus')
const aircraftCarrierPlus = document.querySelector('#aircraftCarrierPlus')
const aircraftCarrierMinus = document.querySelector('#aircraftCarrierMinus')
const battleshipPlus = document.querySelector('#battleshipPlus')
const battleshipMinus = document.querySelector('#battleshipMinus')
const nextRoundButton = document.querySelector('#nextRoundButton')



const body = document.body
const amountOfCurrentIncome = document.querySelector ('.amount')

const submitForm = document.querySelector('#submitButton')
const userInputForm = document.querySelector('#userInputForm')

//Functions
 const unitsPurchasedFunctionAndIf = (unitValue, unitsPurchasedValue, text, value) => {
let currentAmount = parseInt(amountOfCurrentIncome.innerText, 10) || 0 //Finds and turns string into number
currentAmount += value // Adds and reassigns the number
 amountOfCurrentIncome.innerText = currentAmount //Reassigns the text of current number to Current Amount

let currentValue = parseInt(unitValue.innerText.split(': ')[1], 10) || 0;
currentValue += unitsPurchasedValue;
unitValue.innerText = `${text}: ${currentValue}`;

if(currentAmount < 0) {
    amountOfCurrentIncome.style.color = 'red'
}
 else if (currentAmount >= 0) {
     amountOfCurrentIncome.style.color = ''
 }
 //if statement for Units Purchased Coloring
 if (currentValue < 0) {
     unitValue.style.color = 'red'
 }
 else if (currentValue >= 0) {
     unitValue.style.color = ''
 }
 }

//Infantry Logic for Adding
infantryPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(infantryUnit, 1, "Infantry", -3);
});

//Infantry Logic for Subtracting
infantryMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(infantryUnit, -1, "Infantry", 3);
});

//Artillery Logic
artilleryPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(artilleryUnit, 1, "Artillery", -4)
});


//Artillery Logic Minus
artilleryMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(artilleryUnit, -1, "Artillery", 4)
});


//Tank Logic
tankPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(tankUnit, 1, "Tank", -5)
});


//Tank Logic Minus
tankMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf (tankUnit, -1, "Tank", 5)
});


//AA Logic
AAPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(AAUnit, 1, "AA", -6)
});


//AA Logic Minus
AAMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(AAUnit, -1, "AA", 6)
});


//Industrial Complex Logic
ICPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(ICUnit, 1, "Industrial complex", -15)
});


//Industrial Complex Logic Minus
ICMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(ICUnit, -1, "Industrial complex", 15)
});


//Fighter Logic
fighterPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(fighterUnit, 1, "Fighter", -10)
});


//Fighter Logic Minus
fighterMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(fighterUnit, -1, "Fighter", 10)
});


//Bomber Logic
bomberPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(bomberUnit, 1, "Bomber", -12)
});


//Bomber Logic Minus
bomberMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(bomberUnit, -1, "Bomber", 12)
});

//Sub Logic
subPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(subUnit, 1, "Sub", -6)
});


//Sub Logic Minus
subMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(subUnit, -1, "Sub", 6)
});


//Transport Logic
transportPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(transportUnit, 1, "Transport", -7)
});


//Transport Logic Minus
transportMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(transportUnit, -1, "Transport", 7)
});


//Destroyer Logic
destroyerPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(destroyerUnit, 1, "Destroyer", -8)
});


//Destroyer Logic Minus
destroyerMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(destroyerUnit, -1, "Destroyer", 8)
});


//Cruiser Logic
cruiserPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(cruiserUnit, 1, "Cruiser", -12)
});


//Cruiser Logic Minus
cruiserMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(cruiserUnit, -1, "Cruiser", 12)
});


//AC Logic
aircraftCarrierPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(aircraftCarrierUnit, 1, "Aircraft carrier", -14)
});


//AC Logic Minus
aircraftCarrierMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(aircraftCarrierUnit, -1, "Aircraft carrier", 14)
});

//Battleship Logic
battleshipPlus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(battleshipUnit, 1, "Battleship", -20)
});


//Industrial Complex Logic Minus
battleshipMinus.addEventListener('click', e => {
    unitsPurchasedFunctionAndIf(battleshipUnit, -1, "Battleship", 20)
});

submitForm.addEventListener('click', e => {
    // Select the input field and get its value
    e.preventDefault();

    let userInputValue = document.querySelector('#userInputForm').value;
    
    if (isNaN(userInputValue) || userInputValue.trim() === '') {
        alert('Form input requires a numerical value. Stop cheating.')
        return;
    }
    else {
    let userInputValueNumber = parseInt(userInputValue, 10);
    let currentAmountOfUserInput = parseInt(amountOfCurrentIncome.innerText, 10) || 0

    currentAmountOfUserInput += userInputValueNumber;
    
    amountOfCurrentIncome.innerText = currentAmountOfUserInput
    }
    document.querySelector('#userInputForm').value = '';
});

const resetUnitsPurchased = () => {
    const unitElements = document.querySelectorAll('.totslUnitsPurchased');//selects all elements in div and in this case is an array like object or node list
    unitElements.forEach(banana => { //runs a function inside of a for each loop with a parameter of banana which in this case is each list element
      let initialText = banana.innerText.split(":")[0]; // .split will split into an array at a certain location and only takes the text in location [0]
      banana.innerText = `${initialText}: `;  //tales the array and then makes the array innner text = the split aarray and then new JS which is nothing
      banana.style.color = '';  //changes color to nothing.
    });
  
  }
  // Event listener for nextRoundButton
  nextRoundButton.addEventListener('click', (e) => {
    resetUnitsPurchased();
  });