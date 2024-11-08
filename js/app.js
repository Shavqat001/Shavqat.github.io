let listItems = document.querySelectorAll('.main-header__link');

listItems.forEach(item => {
    item.addEventListener('click', function (event) {
        event.preventDefault();

        // Get the <a> tag inside the clicked <li> and retrieve its href
        const link = this.querySelector('a');
        const targetId = link ? link.getAttribute('href') : '';

        // Check if it's the home section or an empty hash
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