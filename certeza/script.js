function redirectToOtherPage() {
    // Altere a URL abaixo para a página para a qual deseja redirecionar.
    window.location.href = "../index.html";
}

// Função para mover o botão "Móvel" para uma posição aleatória
function moveButton() {
    const movingButton = document.getElementById('movingButton');
    const buttonWidth = movingButton.offsetWidth;
    const buttonHeight = movingButton.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Gera posições aleatórias para o botão
    const randomX = getRandomNumber(buttonWidth, windowWidth - buttonWidth);
    const randomY = getRandomNumber(buttonHeight, windowHeight - buttonHeight);

    // Define a posição do botão de acordo com as coordenadas aleatórias
    movingButton.style.left = randomX + 'px';
    movingButton.style.top = randomY + 'px';
}

// Função auxiliar para gerar um número aleatório dentro de um intervalo
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Impede que o botão "Móvel" seja clicado enquanto estiver em movimento
let isMoving = false;
document.getElementById('movingButton').addEventListener('click', (event) => {
    event.stopPropagation();
    if (!isMoving) {
        moveButton();
        isMoving = true;
        setTimeout(() => {
            isMoving = false;
        }, 1000); // Define um intervalo de 1 segundo antes que o botão possa se mover novamente
    }
});
