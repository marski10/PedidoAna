function redirectToOtherPage() {
    // Altere a URL abaixo para a página para a qual deseja redirecionar.
    window.location.href = "https://www.example.com";
}

function emitHearts() {
    const heartContainer = document.querySelector('.heart-container');

    for (let i = 0; i < 100; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.setProperty('--randomX', Math.random());
        heart.style.animationDelay = Math.random() * 2 + 's';
        heart.innerText = '??';

        heartContainer.appendChild(heart);
    }
}

// Chamar a função para iniciar a chuva de corações após um pequeno atraso (100ms)
setTimeout(() => {
    emitHearts();
}, 100);

// Redirecionar após 10 segundos
setTimeout(() => {
    redirectToOtherPage();
}, 10000); // 10 segundos
