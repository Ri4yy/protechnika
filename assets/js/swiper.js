document.addEventListener('DOMContentLoaded', () => {
    const swiperBanner = new Swiper('.swiper-banner', {
        slidesPerView: 1,
        enabled: true,
        speed: 1200,
        parallax: true,
        grabCursor: true,
      
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

    const swiperEmployees = new Swiper('.swiper-employees', {
        slidesPerView: 4,
        spaceBetween: 48,
        enabled: true,
        speed: 200,

        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 38
            },
            769: {
                slidesPerView: 2.6,
                spaceBetween: 28
            },
            960: {
                slidesPerView: 3,
                spaceBetween: 52
            },
        },
      
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

    const swiperProducts = new Swiper('.swiper-products', {
        slidesPerView: 4,
        spaceBetween: 48,
        enabled: true,
        speed: 200,

        breakpoints: {
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            660: {
                slidesPerView: 2.5,
                spaceBetween: 28
            },


            800: {
                slidesPerView: 3,
                spaceBetween: 28
            },
            960: {
              slidesPerView: 3.5,
              spaceBetween: 32
            },
            1120: {
              slidesPerView: 4,
              spaceBetween: 48
            }
        },
      
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

    const swiperFastView = new Swiper('.swiper-fast-view', {
        speed: 200,
      
        pagination: {
          el: '.swiper-pagination',
        },
      
        navigation: {
          nextEl: '.swiper-fast-view__btn--next',
          prevEl: '.swiper-fast-view__btn--prev',
        },
      
        scrollbar: {
          el: '.swiper-scrollbar',
        },
    });

    const swiperProduct = new Swiper('.swiper-product', {
        speed: 200,
      
        pagination: {
          el: '.swiper-pagination',
        },
    });

    const swiperGallery = new Swiper('.swiper-gallery', {
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 50,
            depth: 200,
            modifier: 1,
            slideShadows: false
        },

        breakpoints: {
            320: {
                allowTouchMove: true,
                slidesPerView: 1,
                initialSlide: 0,
            },
            480: {
                allowTouchMove: true,
                slidesPerView: 2.5
            },
            768: {
                allowTouchMove: true,
                slidesPerView: 3
            },
            1024: {
                allowTouchMove: true,
                slidesPerView: 3
            },
            1280: {
                allowTouchMove: true,
                slidesPerView: 3
            },
            1921: {
                allowTouchMove: true,
                slidesPerView: 4
            },
        },
        
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const swiperReview = new Swiper('.swiper-review', {
        spaceBetween: 40,

        breakpoints: {
            320: {
                allowTouchMove: true,
                slidesPerView: 1,
                initialSlide: 0,
            },
            480: {
                allowTouchMove: true,
                slidesPerView: 1
            },
            1024: {
                allowTouchMove: true,
                slidesPerView: 2
            },
        },

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

    const btnNextOutside = document.querySelector('.btn-without-container-next');
    const btnPrevOutside = document.querySelector('.btn-without-container-prev');
    
    btnNextOutside.addEventListener('click', () => swiperReview.slideNext());
    btnPrevOutside.addEventListener('click', () => swiperReview.slidePrev());
})