// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     spaceBetween: 20,
//     enabled: true,

//     breakpoints: {
//         320: {
//             allowTouchMove: true,
//             slidesPerView: 1,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         480: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         768: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 1,
//                 fill: "row",
//             }
//         },
//         1024: {
//             allowTouchMove: true,
//             slidesPerView: 2,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1280: {
//             allowTouchMove: true,
//             slidesPerView: 3,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//         1921: {
//             allowTouchMove: true,
//             slidesPerView: 4,
//             grid: {
//                 rows: 2,
//                 fill: "row",
//             }
//         },
//     },
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
// });

document.addEventListener('DOMContentLoaded', () => {
    const swiperBanner = new Swiper('.swiper-banner', {
        // Optional parameters
        slidesPerView: 1,
        enabled: true,
        speed: 1200,
        parallax: true,
        grabCursor: true,
      
        // If we need pagination
        pagination: {
            el: ".banner__counter",
            type: "custom",

            renderCustom: function (swiper, current, total) {
                return `<span class="banner__counter-current">
                            ${current < 10 ? '0' + current : current}
                        </span> 
                        <span class="banner__counter-total">
                            /${total < 10 ? '0' + total : total}
                        </span>`;
              }
        },
      
        navigation: {
            nextEl: '.banner__bottom-next',
            prevEl: '.banner__bottom-prev',
        },
    });

    const swiperProducts = new Swiper('.swiper-products', {
        // Optional parameters
        slidesPerView: 4,
        spaceBetween: 48,
        enabled: true,
        speed: 200,
      
        // If we need pagination
        pagination: {
            el: ".swiper-counter",
            type: "custom",

            renderCustom: function (swiper, current, total) {
                return `<span class="swiper-counter__current">
                            ${current < 10 ? '0' + current : current}
                        </span> 
                        <span class="swiper-counter__total">
                            /${total < 10 ? '0' + total : total}
                        </span>`;
              }
        },
      
        navigation: {
            nextEl: '.swiper-groups-next',
            prevEl: '.swiper-groups-prev',
        },
    });
})