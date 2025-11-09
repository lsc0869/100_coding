function openPlayerConfig(event) {
    editedplayer = +event.target.dataset.playerid;
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}
function closePlayerConfig(){
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
     errorsOuptputElement.textContent ='';
     formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim(); //'     Max   ' => 'Max'

    if(!enteredPlayername) {
        event.target.firstElementChild.classList.add('error')
        errorsOuptputElement.textContent = 'Please enter a vaild name!'
        return;
    }
    const updatedPlayerDataElement = document.getElementById('player-'+ editedplayer +'-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedplayer -1].name = enteredPlayername;

    closePlayerConfig();
}