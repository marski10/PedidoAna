function redirectToOtherPage() {
    // Altere a URL abaixo para a p�gina para a qual deseja redirecionar.
    window.location.href = "https://youtu.be/BVfiZkPgxbE";
}


function redirectToAccept() {
    // Altere a URL abaixo para a p�gina para a qual deseja redirecionar.
    window.location.href = "https://api.whatsapp.com/send/?phone=5565993515339&text=Oi,eu aceito!!.&type=phone_number&app_absent=0";
}


function emitHearts() {
    const body = document.querySelector('body'); // Seleciona a tag <body>

    for (let i = 0; i < 100; i++) {
        const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.setProperty('--randomX', Math.random());
        heart.style.animationDelay = Math.random() * 1 + 's';

        // Use o SVG fornecido com a cor rosa (#ff1493)
        heart.innerHTML = `<path fill="#ff1493" d="M12 21.35l-1.45-1.32C5.4 16.36 2 13.18 2 9.5 2 7.42 3.25 5.53 5.34 4.6C6.2 4.18 7.1 4 8 4c1.54 0 3.08 .59 4.24 1.76L12 7.25l1.76-1.49C14.92 4.59 16.46 4 18 4c.9 0 1.8 .18 2.66 .6C20.75 5.53 22 7.42 22 9.5c0 3.68-3.4 6.86-8.55 10.54L12 21.35z"/>`;

        body.appendChild(heart); // Adiciona o cora��o diretamente na tag <body>
    }
}

// Chamar a fun��o para iniciar a chuva de cora��es ap�s um pequeno atraso (100ms)
setTimeout(() => {
    emitHearts();
}, 100);


 // Função para iniciar a contagem regressiva
 function startCountdown() {
    var countdownElement = document.getElementById('countdown');
    var count = 6; // Tempo inicial em segundos

    var countdownInterval = setInterval(function() {
        
        if(count === 6){
            countdownElement.textContent = "Se prepare"
        }else{
            countdownElement.textContent = count;
        }
     
      // Atualiza o valor do contador
      
      if (count === 0) {
        clearInterval(countdownInterval); // Para a contagem quando chegar a zero
        countdownElement.textContent = "<3";
      } else {
        count--; // Decrementa o contador
      }
    }, 1000); // Executa a cada 1 segundo
  }

  // Inicia a contagem regressiva quando a página é carregada
  window.onload = function() {
    startCountdown();
  };