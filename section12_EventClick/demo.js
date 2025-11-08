let producyNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaing-chars');

let maxAllowedChars = producyNameInputElement.maxLength;


function updateRemaining(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;

}



producyNameInputElement.addEventListener('input',updateRemaining);