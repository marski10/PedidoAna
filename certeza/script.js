function redirectToOtherPage() {
 
    window.location.href = "../index.html";
}

function moveButton() {
    const movingButton = document.getElementById('movingButton');
    const buttonWidth = movingButton.offsetWidth;
    const buttonHeight = movingButton.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Gera posi��es aleat�rias para o bot�o
    const randomX = getRandomNumber(buttonWidth, windowWidth - buttonWidth);
    const randomY = getRandomNumber(buttonHeight, windowHeight - buttonHeight);

    // Define a posi��o do bot�o de acordo com as coordenadas aleat�rias
    movingButton.style.left = randomX + 'px';
    movingButton.style.top = randomY + 'px';
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let isMoving = false;
document.getElementById('movingButton').addEventListener('click', (event) => {
    event.stopPropagation();
    if (!isMoving) {
        moveButton();
        isMoving = true;
        setTimeout(() => {
            isMoving = false;
        }, 1000);
    }
});
