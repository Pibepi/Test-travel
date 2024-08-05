document.addEventListener('DOMContentLoaded', function () {
    // Ініціалізація Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1268: {
                slidesPerView: 3,
                spaceBetween: 10
            }
        }
    });

    // Ініціалізація усіх компонентів Materialize
    M.AutoInit();

    // Ініціалізація каруселі
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: false,
        indicators: true
    });

    // Додавання класу активності кнопкам
    document.querySelectorAll('.btnTours').forEach(button => {
        button.addEventListener('click', function () {
            document.querySelectorAll('.btnTours').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
