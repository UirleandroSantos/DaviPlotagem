const botaoAbrirMenu = document.querySelector("#abrir");
const botaoFecharMenu = document.querySelector("#fechar");
const botaoModoDark = document.querySelector("#modoDark");
const botaoModoLight = document.querySelector("#modoLight");

const corpo = document.querySelector("#corpo");
const sidebar = document.querySelector("#sidebar");

botaoAbrirMenu.addEventListener('click', () => {
    botaoAbrirMenu.style.display = 'none';
    botaoFecharMenu.style.display = 'flex';
    sidebar.classList.add('mostrarSidebar');
    sidebar.classList.remove('fecharSidebar');
});

botaoFecharMenu.addEventListener('click', () => {
    botaoFecharMenu.style.display = 'none';
    botaoAbrirMenu.style.display = 'flex';
    sidebar.classList.remove('mostrarSidebar');
    sidebar.classList.add('fecharSidebar');
});

botaoModoDark.addEventListener('click', () => {
    botaoModoDark.style.display = 'none';
    botaoModoLight.style.display = 'flex';
    corpo.classList.add('modoDark');
    corpo.classList.remove('modoLight');
});

botaoModoLight.addEventListener('click', () => {
    botaoModoLight.style.display = 'none';
    botaoModoDark.style.display = 'flex';
    corpo.classList.remove('modoDark');
    corpo.classList.add('modoLight');
});