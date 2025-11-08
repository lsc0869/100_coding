const calculatesumButton = document.querySelector('#calculator button');

function calculatesum(){
    const userNumberElement = document.getElementById('user-number');
    const enteredNumber = userNumberElement.value;

    let sumUpToNumber = 0;

    for(let i = 0; i<= enteredNumber; i++){
        sumUpToNumber =sumUpToNumber +i;
    }
    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUpToNumber
    outputResultElement.style.display ='block';
}


calculatesumButton.addEventListener('click', calculatesum);

//Highlight

const HighlightLinkButton = document.querySelector('#highlight-links button');

function HighlightLik(){
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElement of anchorElements){
        anchorElement.classList.add('highlight');
    }
}
HighlightLinkButton.addEventListener('click',HighlightLik);

//Display user data

const dummyUserdate = {
    firstName: 'Max',
    lastName: 'Schwarzmuller',
    age: 32
};

const displayUserDateButtonElement = document.querySelector('#user-data button');

function displayUserData(){
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML ='';
    for (const key in dummyUserdate){
        const newUserDataListElement = document.createElement('li');
        const outputText = key.toUpperCase() + ':' +dummyUserdate[key];
        newUserDataListElement.textContent = outputText;
        outputDataElement.append(newUserDataListElement);
    }
}
displayUserDateButtonElement.addEventListener('click', displayUserData);


//rol Dice

const rollDiceBtnElement = document.querySelector('#statistics button');

function rollDice(){
return Math.floor(Math.random() * 6) + 1;
}
function deriveNumberofDiceRoll(){
    const targetnumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');

    const enteredNumber = targetnumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberofRolls = 0;

    while(!hasRolledTargetNumber){
        const rolledNumber = rollDice();
        // const rolledNumber = rollDice();
        // if(rolledNumber == enteredNumber){
        //     hasRolledTargetNumber = true;
        // }
        numberofRolls++;
        const newRollListElement = document.createElement('li');
        const outputText = 'Roll' + numberofRolls + ':' + rolledNumber;
        newRollListElement.textContent = outputText;
        diceRollsListElement.append(newRollListElement);
        hasRolledTargetNumber = rolledNumber ==enteredNumber;
    }
    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enteredNumber;
    outputTotalRollsElement.textContent = numberofRolls;
}
rollDiceBtnElement.addEventListener('click', deriveNumberofDiceRoll);