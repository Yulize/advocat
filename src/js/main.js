var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    autoplay: {
        delay: 2500,
    },
    loop: true,
    breakpoints:{
        1024:{
            slidesPerView: 3,
        },
        991:{
            slidesPerView: 3,
        }
    }
});

$('ul.directions__list').on('click', 'li:not(.active)', function() {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.directions__content').removeClass('active').eq($(this).index()).addClass('active');
});

var swiperStaff = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    loop: true,
    breakpoints:{
        1024:{
            slidesPerView: 3,
        }
    }
});
