// ===== BOTÕES DE ACESSIBILIDADE =====
const body = document.body;

// Aumentar fonte
document.getElementById('aumentar-fonte').addEventListener('click', () => {
    const style = window.getComputedStyle(body);
    let currentSize = parseFloat(style.fontSize);
    body.style.fontSize = (currentSize + 2) + 'px';
});

// Diminuir fonte
document.getElementById('diminuir-fonte').addEventListener('click', () => {
    const style = window.getComputedStyle(body);
    let currentSize = parseFloat(style.fontSize);
    if(currentSize > 8) body.style.fontSize = (currentSize - 2) + 'px';
});

// Reset fonte
document.getElementById('reset-fonte').addEventListener('click', () => {
    body.style.fontSize = '1.1rem';
});

// Alto contraste
document.getElementById('alto-contraste').addEventListener('click', () => {
    body.classList.toggle('alto-contraste');
});

// Dropdown Daltonismo
const daltonismoBtn = document.getElementById('daltonismo-btn');
const daltonismoDropdown = document.querySelector('.daltonismo-dropdown');

daltonismoBtn.addEventListener('click', () => {
    daltonismoDropdown.classList.toggle('open');
});

// Fechar dropdown se clicar fora
document.addEventListener('click', (e) => {
    if(!daltonismoDropdown.contains(e.target)){
        daltonismoDropdown.classList.remove('open');
    }
});

// Daltonismo - apenas exemplo visual (você pode ajustar cores conforme necessidade)
document.querySelectorAll('.daltonismo-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const tipo = link.dataset.daltonismo;
        alert(`Simulador de ${tipo} ativado!`); // substituir por lógica real
        daltonismoDropdown.classList.remove('open');
    });
});

// ===== SCROLL SUAVE COM NAV FIXO =====
const navHeight = document.querySelector('nav').offsetHeight;

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offsetTop = target.offsetTop - navHeight + 10; // ajuste fino
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    });
});
