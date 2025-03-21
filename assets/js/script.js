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
    tabs('.calculator-tabs', '.calculator-tabs__list', '.calculator-tabs__content', 'active-tab', 'active');

   
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

    function simpleBar(item, options, size, autoHide) {
        item.forEach((card) => {
            new SimpleBar(card, {
                autoHide: autoHide,
                scrollbarMaxSize: size,
                classNames: {
                    track: options
                }
            });
        })
    }
    simpleBar(propCard, 'simplebar-track simplebar-track__card', 42, false);
    simpleBar(catalogPropCard, 'simplebar-track simplebar-track__catalog-card', 42, false);

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

    // propCard.forEach((card) => {
    //     new SimpleBar(card, {
    //         autoHide: false,
    //         scrollbarMaxSize: 42,
    //         classNames: {
    //             track: 'simplebar-track simplebar-track__card'
    //         }
    //     });
    // })
    // catalogPropCard.forEach((card) => {
    //     new SimpleBar(card, {
    //         autoHide: false,
    //         scrollbarMaxSize: 42,
    //         classNames: {
    //             track: 'simplebar-track simplebar-track__catalog-card'
    //         }
    //     });
    // })
    
    // Отображать характеристики, если больше 5
    let showEl = 5;
    let charBtnStatus = true;

    let characteristicList = document.querySelectorAll('.characteristics-list');
    const charBtn = document.querySelector('.characteristics__bottom-btn');

    function updateVisibilityChar(status) {
        characteristicList.forEach((list, index) => {
            let listItems = list.querySelectorAll('.characteristics-list__item');

            if(status) {
                listItems.forEach((item, index) => {
                    item.style.display = 'flex';
                })
            } else {
                listItems.forEach((item, index) => {
                    if (index >= showEl) {
                        item.style.display = 'none';
                    } 
                })
            }
        })
    }

    if(charBtn) {
        charBtn.addEventListener('click', () => {
            if(charBtnStatus) {
                updateVisibilityChar(true)
                charBtn.textContent = 'Скрыть';
                charBtnStatus = false;
            } else {
                updateVisibilityChar(false)
                charBtn.textContent = 'Развернуть';
                charBtnStatus = true;
            }
        })
    }
    

    // DropDown
    let dropdownToggle = document.querySelector('.header-contacts__dropdown-toggle'),
        dropdownContent = document.querySelector('.header-contacts__dropdown-content');

    dropdownToggle.addEventListener('click', (e) => {
        dropdownToggle.classList.toggle('active')
        dropdownContent.classList.toggle('active')
    })

    // Модальное окно
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
    showModal($('.form-leasing-open'), $('.form-leasing'));

    // Скрипт кастомного range поля в фильтре каталога
    let range = document.querySelectorAll(".range");

    range.forEach((inputRange) => {
        let rangeInputFilter = inputRange.querySelectorAll(".range__input input");
        let rangePrice = inputRange.querySelectorAll(".range__price input");
        let rangeSelected = inputRange.querySelector(".range__selected");
        
        rangeInputFilter.forEach((input) => {
            let max = parseInt(rangeInputFilter[1].value);
            let rangeMin = (max / 100) > 1 ? 100 : 1;

            input.addEventListener("input", (e) => {
                let minRange = parseInt(rangeInputFilter[0].value);
                let maxRange = parseInt(rangeInputFilter[1].value);
                if (maxRange - minRange < rangeMin) {
                if (e.target.className === "min") {
                    rangeInputFilter[0].value = maxRange - rangeMin;
                } else {
                    rangeInputFilter[1].value = minRange + rangeMin;
                }
                } else {
                rangePrice[0].value = minRange;
                rangePrice[1].value = maxRange;
                rangeSelected.style.left = (minRange / rangeInputFilter[0].max) * 100 + "%";
                rangeSelected.style.right = 100 - (maxRange / rangeInputFilter[1].max) * 100 + "%";
                }
            });
        });
    
        rangePrice.forEach((input) => {
            input.addEventListener("input", (e) => {
                let minPrice = rangePrice[0].value;
                let maxPrice = rangePrice[1].value;
                if (maxPrice - minPrice >= rangeMin && maxPrice <= rangeInputFilter[1].max) {
                if (e.target.className === "min") {
                    rangeInputFilter[0].value = minPrice;
                    rangeSelected.style.left = (minPrice / rangeInputFilter[0].max) * 100 + "%";
                } else {
                    rangeInputFilter[1].value = maxPrice;
                    rangeSelected.style.right = 100 - (maxPrice / rangeInputFilter[1].max) * 100 + "%";
                }
                }
            });
        });
    })

    // Отображение фильтра на мобильной версии
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
    if(brands.length > 0) {
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
    }

    // Кастомное поле range в калькуляторе 
    const numberInput = document.querySelectorAll('.property-cost');
    const rangeInput = document.querySelectorAll('.property-cost-range');

    rangeInput.forEach(input => {
        input.addEventListener('input', (e) => {
            let parent = e.target.closest('.calculator-input-container')
            parent.querySelector('.property-cost').value = e.target.value;
    
            let target = e.target
            const min = target.min
            const max = target.max
            const val = target.value
            let percentage = (val - min) * 100 / (max - min)
    
            target.style.backgroundSize = percentage + '% 100%'
        });
    })
    numberInput.forEach(input => {
        input.addEventListener('input', (e) => {
            let parent = e.target.closest('.calculator-input-container')

            const value = parseInt(e.target.value, 10);
            if (value >= 0 && value <= 50000000) {
                parent.querySelector('.property-cost-range').value = value;
            }
        });
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
    // fancybox('fast-view')
    // fancybox('products')
    // fancybox('gallery')

    // Видеоплеер
    const videoClick = document.querySelector('.click-for-video');
    const videoBtn = document.querySelector('.video__btn');
    const videoIframeContainer = document.querySelector('.video__iframe');
    const videoIframe = videoIframeContainer.querySelector('iframe');

    if(videoClick) {
        videoClick.addEventListener('click', (e) => {
            e.target.style.display = 'none';
            videoBtn.style.display = 'none';
            e.target.closest('.video__body').classList.add('full-screen');
    
            videoIframeContainer.style.display = 'block';
            videoIframe.setAttribute('src', 'https://rutube.ru/play/embed/7b5dd092b11ab240ae91c036845a774e/');
        });
    }

    // Калькулятор
    const inputs = {
        propertyCost: document.getElementById('value-property'),
        paymentAmount: document.getElementById('payment-amount'),
        termContract: document.getElementById('term-contract')
    };

    const ranges = {
        propertyCost: document.querySelector('.property-cost-range'),
        paymentAmount: document.querySelectorAll('.property-cost-range')[1],
        termContract: document.querySelectorAll('.property-cost-range')[2]
    };

    const outputs = {
        returnNds: document.getElementById('return-nds'),
        taxSavings: document.getElementById('tax-savings'),
        initialPayment: document.getElementById('initial-payment'),
        downPayment: document.getElementById('down-payment'),
        monthlyPayment: document.getElementById('monthly-payment'),
        contractAmount: document.getElementById('contract-amount')
    };

    const scheduleRadios = {
        uniform: document.getElementById('uniform-schedule'),
        descending: document.getElementById('descending-schedule')
    };

    const formatCurrency = (value) => new Intl.NumberFormat('ru-RU').format(Math.round(value)) + ' руб.';
    const formatPercent = (value) => value.toFixed(2) + '%';

    function syncValue(type, value) {
        inputs[type].value = value;
        ranges[type].value = value;
        calculate();
    }

    function sanitizeNumberInput(input) {
        input.value = input.value.replace(/[^\d]/g, '');
    }

    function formatNumberInput(input) {
        let value = input.value.replace(/\s+/g, '');
        if (!isNaN(value) && value !== '') {
            input.value = parseInt(value).toLocaleString('ru-RU');
        }
    }

    function calculate() {
        const propertyCost = parseFloat(inputs.propertyCost.value.replace(/\s+/g, '')) || 0;
        const paymentAmount = parseFloat(inputs.paymentAmount.value) || 0;
        const termContract = parseInt(inputs.termContract.value) || 1;

        const isUniform = scheduleRadios.uniform.checked;

        const initialPayment = propertyCost * (paymentAmount / 100);
        const leasingAmount = propertyCost - initialPayment;

        const returnNds = propertyCost * 0.2;
        const taxSavings = leasingAmount * 0.2 * 0.2;

        const interestRate = isUniform ? 0.0915 : 0.085;
        const totalOverpayment = leasingAmount * interestRate;

        const contractAmount = propertyCost + totalOverpayment;
        const monthlyPayment = (leasingAmount + totalOverpayment) / termContract;

        // Заполняем результаты
        outputs.initialPayment.textContent = formatCurrency(initialPayment);
        outputs.returnNds.textContent = formatCurrency(returnNds);
        outputs.taxSavings.textContent = formatCurrency(taxSavings);
        outputs.downPayment.textContent = formatPercent(interestRate * 100);
        outputs.monthlyPayment.textContent = formatCurrency(monthlyPayment);
        outputs.contractAmount.textContent = formatCurrency(contractAmount);
    }

console.log(inputs)
    // События для инпутов и слайдеров
    Object.keys(inputs).forEach(type => {
        inputs[type].addEventListener('input', () => {
            sanitizeNumberInput(inputs[type]);
            if (type === 'propertyCost') formatNumberInput(inputs[type]);
            syncValue(type, inputs[type].value.replace(/\s+/g, ''));
        });

        ranges[type].addEventListener('input', () => {
            syncValue(type, ranges[type].value);
        });
    });

    // Обработка смены графика
    Object.values(scheduleRadios).forEach(radio => {
        radio.addEventListener('change', calculate);
    });

    // Инициализация при загрузке
    calculate();
})
