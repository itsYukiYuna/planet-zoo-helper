// Menu Function
const navbar = document.querySelector('nav');

function openMenu() {
    if (!navbar) return;
    navbar.classList.add('show');
    document.body.classList.add('menu-open');
}
function closeMenu() {
    if (!navbar) return;
    navbar.classList.remove('show');
    document.body.classList.remove('menu-open');
}

window.openMenu = openMenu;
window.closeMenu = closeMenu;