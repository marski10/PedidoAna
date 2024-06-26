function redirectToOtherPage() {
    // Altere a URL abaixo para a p�gina para a qual deseja redirecionar.
    window.location.href = "./certeza/certeza.html";
}

function redirectToYesPage() {
    // Altere a URL abaixo para a p�gina para a qual deseja redirecionar.
    window.location.href = "./aceitou/aceitou.html";
}


function emitheart2s() {
    const heart2Container = document.querySelector('.heart2-container');

    for (let i = 0; i < 100; i++) {
        const heart2 = document.createElement('div');
        heart2.classList.add('heart2');
        heart2.style.left = Math.random() * 100 + 'vw';
        heart2.style.setProperty('--randomX', Math.random());
        heart2.style.animationDelay = Math.random() * 0.5 + 's';
        
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        svg.innerHTML = `<path d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.18 2 9.5 2 7.42 3.25 5.53 5.34 4.6C6.2 4.18 7.1 4 8 4c1.54 0 3.08 .59 4.24 1.76L12 7.25l1.76-1.49C14.92 4.59 16.46 4 18 4c.9 0 1.8 .18 2.66 .6C20.75 5.53 22 7.42 22 9.5c0 3.68-3.4 6.86-8.55 10.54L12 21.35z"/>`;

        heart2.appendChild(svg);
        heart2Container.appendChild(heart2);

         // �ltimo cora��o criado
         if (i === 99) {
            heart2.addEventListener('animationend', () => {
                // Redirecionar para a outra p�gina ap�s a anima��o
                redirectToYesPage();
            });
        } else {
            heart2.addEventListener('animationend', () => {
                heart2.remove();
            });
    }
}
}
