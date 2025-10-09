const botaoSim = document.getElementById('sim');
const botaoNao = document.getElementById('nao');
const mensagem = document.getElementById('mensagem');

botaoSim.addEventListener('click', () => {
    mensagem.textContent = "Aaaawn 💕 obrigada! você fez a escolha certa 😍"
});

botaoNao.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - botaoNao. offserWidth);
     const y = Math.random() * (window.innerWidth - botaoNao. offsetHeight);

     botaoNao.style.position = 'absolute';
     botaoNao.style.left= `${x}px`;
     botaoNao.style.top= `${y}px`;

});