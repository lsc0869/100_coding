let peragraphElement = document.body.querySelector('p');
function changeparagraphText(){
    peragraphElement.textContent = 'Clicked';
    
}
peragraphElement.addEventListener('click',changeparagraphText);