 // ===== Nav Toggle e Dropdowns =====
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.getElementById('main-menu');

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('menu-open');
    });

    document.querySelectorAll('.has-sub > .submenu-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('open');
      });
    });

    // ===== Controles de acessibilidade =====
    const body = document.body;
    let fontSize = 1.1;

    document.getElementById('aumentar-fonte').addEventListener('click', () => {
      fontSize += 0.1;
      body.style.fontSize = fontSize + 'rem';
    });

    document.getElementById('diminuir-fonte').addEventListener('click', () => {
      fontSize = Math.max(0.8, fontSize - 0.1);
      body.style.fontSize = fontSize + 'rem';
    });

    document.getElementById('reset-fonte').addEventListener('click', () => {
      fontSize = 1.1;
      body.style.fontSize = fontSize + 'rem';
    });

    document.getElementById('alto-contraste').addEventListener('click', () => {
      body.classList.toggle('alto-contraste');
    });

    const daltonismoBtn = document.getElementById('daltonismo-btn');
    const daltonismoMenu = document.querySelector('.daltonismo-menu');

    daltonismoBtn.addEventListener('click', () => {
      daltonismoMenu.parentElement.classList.toggle('open');
      daltonismoBtn.setAttribute('aria-expanded', daltonismoMenu.parentElement.classList.contains('open'));
    });

    daltonismoMenu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const tipo = btn.dataset.daltonismo;
        alert(`Simulando: ${tipo} (implemente filtros CSS/SVG)`);
        daltonismoMenu.parentElement.classList.remove('open');
        daltonismoBtn.setAttribute('aria-expanded', 'false');
      });
    });