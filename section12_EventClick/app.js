let peragraphElement = document.body.querySelector('p');
function changeparagraphText(){
    peragraphElement.textContent = 'Clicked';
    
}
peragraphElement.addEventListener('click',changeparagraphText);

let inputElement = document.querySelector('input');
function retrieveUserInput(event){
    let entered = inputElement.value;
    console.log(entered);
    console.log(event);
}
inputElement.addEventListener('input',retrieveUserInput);