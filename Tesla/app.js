const openMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop active';
    document.querySelector('aside').className = 'active';
}
const closeMenu = () => {
    document.querySelector('.backdrop').className = 'backdrop';
    document.querySelector('aside').className = '';
}

//  clicking menu
document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();

}
//  clicking X
document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}
//  clicking on blur background
document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}


