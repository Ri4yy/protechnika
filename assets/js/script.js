document.addEventListener('DOMContentLoaded', () => {
    let html  = document.querySelector('html'),
        menu = document.querySelector('.header-mobile'),
        btnMenu = document.querySelector('.btn-menu');

    btnMenu.addEventListener('click', (e) => {
        html.classList.toggle('no-scroll')
        
        menu.classList.toggle('active')
        btnMenu.classList.toggle('btn-menu--open')
    })

    function resize() {
        let width = window.innerWidth;

        if (width > 992) {
            html.classList.remove('no-scroll')
            menu.classList.remove('active')
            btnMenu.classList.remove('btn-menu--open')
        } else if(width <= 992) {
            if(catalogToggle) {
                catalogToggle.classList.remove('active')
            }
            catalogMenu.classList.remove('active')
        } else {
            return
        }
    }

    // Mobile menu
    let menuToggle = document.querySelector('.header-mobile__menu-item__toggle')

    menuToggle.addEventListener('click', (e) => {
        let menuContainer = e.target.closest('.header-mobile__menu-item')

        menuToggle.classList.toggle('active')
        menuContainer.querySelector('.header-mobile__menu-body').classList.toggle('active')
    })


    // Catalog menu
    let catalogToggle = document.querySelector('.dropdown-toggle'),
        catalogMenu = document.querySelector('.menu-dropdown')

    catalogToggle.addEventListener('click', (e) => {
        catalogToggle.classList.toggle('active')
        catalogMenu.classList.toggle('active')
    })  

    let sidebarBtn = document.querySelectorAll('.menu-dropdown__sidebar-link')
    
    sidebarBtn.forEach(btn => {
        btn.addEventListener('click', (e) => {

            if(btn.classList.contains('active')) {
                // ajax request
                
            } else {
                sidebarBtn.forEach((btn) => {
                    btn.classList.remove('active')
                })

                btn.classList.add('active')
            }
        })
    });

    window.addEventListener('resize', resize)
    resize()

    function tabs(wrapperMain, wrapperTab, wrapperContent, activeTab, activeContent) {
        $(wrapperTab).on('click', 'li:not('+activeTab+')', function () {
            $(this)
                .addClass(activeTab).siblings().removeClass(activeTab)
                .closest(wrapperMain).find(wrapperContent).removeClass(activeContent).eq($(this).index()).addClass(activeContent);
        });
    }
    tabs('.tabs', '.tabs__list', '.tabs__content', 'active-tab', 'active');

   
    let btnProperties = document.querySelectorAll('.properties-list__item-toggle')

    btnProperties.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            let propList = e.target.closest('.properties-list').querySelectorAll('.properties-list__item')
            let propItem = e.target.closest('.properties-list__item')
            let card = e.target.closest('.main-catalog-card')

            if(propItem.classList.contains('active')) {
                propItem.classList.remove('active')
                card.classList.remove('active')

            } else {
                propList.forEach((list) => {
                    list.classList.remove('active')
                })

                propItem.classList.add('active')
                card.classList.add('active')
            }
        })
    })

    // scrollbar
    let propCard = document.querySelectorAll('.swiper-products__slide .products-card .properties-card'),
        catalogPropCard = document.querySelectorAll('.catalog-list__item .products-card .properties-card'),
        menuCard = document.querySelector('.menu-dropdown__content'),
        sidebarCard = document.querySelector('.menu-dropdown__sidebar');

    propCard.forEach((card) => {
        new SimpleBar(card, {
            autoHide: false,
            scrollbarMaxSize: 42,
            classNames: {
                track: 'simplebar-track simplebar-track__card'
            }
        });
    })
    catalogPropCard.forEach((card) => {
        new SimpleBar(card, {
            autoHide: false,
            scrollbarMaxSize: 42,
            classNames: {
                track: 'simplebar-track simplebar-track__catalog-card'
            }
        });
    })
    new SimpleBar(menuCard, {
        scrollbarMaxSize: 80,
        classNames: {
            track: 'simplebar-track simplebar-track__content'
        }
    });
    new SimpleBar(sidebarCard, {
        autoHide: false,
        scrollbarMaxSize: 80,
        classNames: {
            track: 'simplebar-track simplebar-track__menu'
        }
    });

    // DropDown
    let dropdownToggle = document.querySelector('.header-contacts__dropdown-toggle'),
        dropdownContent = document.querySelector('.header-contacts__dropdown-content');

    dropdownToggle.addEventListener('click', (e) => {
        dropdownToggle.classList.toggle('active')
        dropdownContent.classList.toggle('active')
    })

    // Modal
    function showModal(btnOpen, modalBody) {
        btnOpen.click(function () {
            modalBody.addClass('active');
            $('html').addClass('no-scroll');
            return false;
        });

        $(document).keydown(function (e) {
            if (e.keyCode === 27) {
                e.stopPropagation();
                modalBody.removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        modalBody.click(function (e) {
            if ($(e.target).closest('.modal__wrapper').length == 0) {
                $(this).removeClass('active');
                $('html').removeClass('no-scroll');
            }
        });

        $('.close-modal').click((e) => {
            modalBody.removeClass('active');
            $('html').removeClass('no-scroll');
        })
    }

    showModal($('.fast-view-btn'), $('.fast-fiew-modal'));
    showModal($('.form-modal-open'), $('.form-modal'));

    // Фильтр в каталоге
    let filter = document.querySelector('.catalog__side'),
    filterOpen = document.querySelector('.filter-panel__btn'),
    filterClose = document.querySelector('.filter__close');
    
    if(filter) {
        filterOpen.addEventListener('click', (e) => {
            filter.classList.add('open')
            html.classList.add('no-scroll')
        })

        filterClose.addEventListener('click', (e) => {
            filter.classList.remove('open')
            html.classList.remove('no-scroll')
        })
    }

    // Скрытие свойств фильтре, если их больше 4
    const categories = document.querySelectorAll('.filter-category__list');

    categories.forEach(category => {
        const items = category.querySelectorAll('.filter-properties__list');
        const showMoreButtonContainer = category.querySelector('.filter-category__more');
        const maxVisibleItems = 4;
        let isShowingAll = false;

        function updateVisibility() {
            let hiddenCount = 0;

            items.forEach((item, index) => {
                if (index < maxVisibleItems) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                    hiddenCount++;
                }
            });

            if (showMoreButtonContainer) {
                if (hiddenCount > 0) {
                    showMoreButtonContainer.style.display = 'block';
                    showMoreButtonContainer.innerHTML = `Показать больше (<span>${hiddenCount}</span>)`;
                } else {
                    showMoreButtonContainer.style.display = 'none';
                }
            }
        }

        function showAllItems() {
            items.forEach(item => {
                item.style.display = 'block';
            });

            if (showMoreButtonContainer) {
                showMoreButtonContainer.textContent = 'Скрыть';
            }
        }

        if (showMoreButtonContainer) {
            showMoreButtonContainer.addEventListener('click', function () {
                isShowingAll = !isShowingAll;

                if (isShowingAll) {
                    showAllItems();
                } else {
                    updateVisibility();
                }
            });
        } 

        updateVisibility();
    });

    // Показать больше "Бренды"
    let brands = document.querySelectorAll('.brands__item'),
        brandsBtn = document.querySelector('.brands__more');

    const showItem = 4;
    let btnStatus = true;


    function updateVisibilityBrands() {
        brands.forEach((item, index) => {
            if (index < showItem) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    brandsBtn.addEventListener('click', () => {
        if(btnStatus) {
            brands.forEach(item => {
                item.style.display = 'block';
            });
            brandsBtn.textContent = 'Развернуть';
            btnStatus = false;
        } else {
            updateVisibilityBrands()
            brandsBtn.textContent = 'Скрыть';
            btnStatus = true;
        }
    })

    // Fancybox
    function fancybox(container) {
        Fancybox.bind(`[data-fancybox="${container}"]`, {
            compact: false,
            contentClick: "iterateZoom",
            Images: {
                Panzoom: {
                    maxScale: 2,
                },
            },
            wheel: "slide",
            Toolbar: {
                display: {
                    left: [
                        "infobar",
                    ],
                    middle: [],
                    right: [
                        "iterateZoom",
                        "close",
                    ],
                }
            }
        });
    }
    fancybox('fast-view')
    fancybox('products')
    fancybox('gallery')

    // Fancybox.bind('[data-fancybox="fast-view"]', {
    //     compact: false,
    //     contentClick: "iterateZoom",
    //     Images: {
    //         Panzoom: {
    //             maxScale: 2,
    //         },
    //     },
    //     wheel: "slide",
    //     Toolbar: {
    //         display: {
    //             left: [
    //                 "infobar",
    //             ],
    //             middle: [],
    //             right: [
    //                 "iterateZoom",
    //                 "close",
    //             ],
    //         }
    //     }
    // });

    // Видеоплеер
    $('.click-for-video').click(function () {
        $(this).css('display', 'none')
        $('.video__btn').css('display', 'none');
        $(this).closest('.video__body').addClass('full-screen')

        $('.video__iframe').css('display', 'block');
        $('.video__iframe iframe').prop('src', 'https://rutube.ru/play/embed/7b5dd092b11ab240ae91c036845a774e/');
    });
})