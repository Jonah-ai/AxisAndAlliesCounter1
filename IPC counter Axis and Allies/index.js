const amount = document.querySelector('.amount')
const infantryPlus = document.querySelector('#infantry-plus')
const infantryMinus = document.querySelector('#infantry-minus')
const unitsPurchased = document.querySelector('.unitsPurchased')
const body = document.body
const totsUnitsPurchased = document.querySelector('.totsUnitsPurchased')



//Infantry Logic
infantryPlus.addEventListener('click', e => {
    let currentAmount = parseInt(amount.innerText, 10) || 0 
    currentAmount += -3
    amount.innerText = currentAmount 
    let currentValue = parseInt(infantryUnit.innerText.split(': ')[1], 10) || 0;
     currentValue += 1;
     infantryUnit.innerText = `Infantry: ${currentValue}`;

    if(currentAmount < 0) {
        amount.style.color = 'red'
       }
    else {
        amount.style.color = 'black'
    }
});
infantryMinus.addEventListener('click', e => {
    let currentAmount = parseInt(amount.innerText, 10) || 0 
    currentAmount += 3
    let amountTotal = amount.innerText = currentAmount

    let currentValue = parseInt(infantryUnit.innerText.split(': ')[1], 10) || 0;
    currentValue += -1;
    infantryUnit.innerText = `Infantry: ${currentValue}`;
});
