// Получаем все ссылки в навигации
let links = document.querySelectorAll('.main-header__link a');
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');

        if (targetId === '#home' || targetId === '') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } else {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

let i = 45;
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        document.querySelector('.main-header--fixed').style.opacity = '1';
        i += 5;
    } else {
        document.querySelector('.main-header--fixed').style.opacity = '0';
        i -= 5;
    }

    document.querySelector('.cube-1').style = `transform: rotateX(60deg) rotate(${i}deg)`;
    document.querySelector('.cube-2').style = `transform: rotateX(60deg) rotate(${i}deg)`;
    lastScrollTop = scrollTop;
});