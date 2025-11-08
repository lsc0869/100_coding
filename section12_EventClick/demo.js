let producyNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaing-chars');

let maxAllowedChars = producyNameInputElement.maxLength;


function updateRemaining(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;

    let remainingCharacters = maxAllowedChars - enteredTextLength;

    remainingCharsElement.textContent = remainingCharacters;
    if(remainingCharacters === 0) {
        remainingCharsElement.classList.add('error');
        producyNameInputElement.classList.add('error');
    }
    else if (remainingCharacters <= 10){
        remainingCharsElement.classList.add('warning');
        producyNameInputElement.classList.add('warning');
        remainingCharsElement.classList.remove('error');
        producyNameInputElement.classList.remove('error');
    }
    
    else{
        remainingCharsElement.classList.remove('error', 'warning');
        producyNameInputElement.classList.remove('error', 'warning');
    }
}



producyNameInputElement.addEventListener('input',updateRemaining);