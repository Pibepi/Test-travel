document.addEventListener('DOMContentLoaded', function () {
    // Ініціалізація Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
        breakpoints: {
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


    // Ініціалізація каруселі
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
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
M.AutoInit();