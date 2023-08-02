function redirectToOtherPage() {
    // Altere a URL abaixo para a p�gina para a qual deseja redirecionar.
    window.location.href = "../index.html";
}

// Fun��o para mover o bot�o "M�vel" para uma posi��o aleat�ria
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

// Fun��o auxiliar para gerar um n�mero aleat�rio dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Impede que o bot�o "M�vel" seja clicado enquanto estiver em movimento
let isMoving = false;
document.getElementById('movingButton').addEventListener('click', (event) => {
    event.stopPropagation();
    if (!isMoving) {
        moveButton();
        isMoving = true;
        setTimeout(() => {
            isMoving = false;
        }, 1000); // Define um intervalo de 1 segundo antes que o bot�o possa se mover novamente
    }
});
