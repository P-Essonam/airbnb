export function sp() {

    const elPrev = document.querySelector('.btn1')
    const elNext = document.querySelector('.btn2')

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 12,
        spaceBetween: 20,
        fade: true,
        speed: 500,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        grid: {
            rows: 1,
        },
        mousewheel: {
            forceToAxis: true,
        },
        
        // on: {
        //     init() {
        //         elPrev.classList.toggle('hidden');
        //     },
        // },

      });

      var swiper1 = new Swiper(".mySwiper1", {
        effect: "cube",
        grabCursor: true,
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 10,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
      });

}