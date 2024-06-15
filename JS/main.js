const  navMobileMenu = document.querySelector('.navMobileMenu');
const  HamburgerOpen = document.getElementById('hamburgerOpen');
const  HamburgerClose = document.getElementById('hamburgerClose');

HamburgerOpen.addEventListener('click', () => {
    if(navMobileMenu.style.display === 'none'){
        navMobileMenu.style.display = 'block';
        HamburgerOpen.style.display = 'none';
        HamburgerClose.style.display = 'block';
    } else {
        navMobileMenu.style.display = 'none';
        HamburgerOpen.style.display = 'block';
        HamburgerClose.style.display = 'none';
    }
});

HamburgerClose.addEventListener('click', () => {
    if(navMobileMenu.style.display === 'block'){
        navMobileMenu.style.display = 'none';
        HamburgerOpen.style.display = 'block';
        HamburgerClose.style.display = 'none';
    }
});

