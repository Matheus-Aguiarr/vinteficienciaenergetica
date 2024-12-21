const menuHamburguer = document.querySelector('.menu-hamburguer');

menuHamburguer.addEventListener('click', () => {
    toggleMenu();
})

const content = document.querySelector('.content');
content.addEventListener('click', () => {
    menuHamburguer.classList.contains('change') ? toggleMenu() : null;
})

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive')
    menuHamburguer.classList.toggle('change');
    menuHamburguer.classList.contains('change') ? nav.style.display = 'block' : nav.style.display = 'none';
}
