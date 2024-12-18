document.addEventListener('DOMContentLoaded', () => {
    // let menu = document.querySelector('.menu'),
    // btnMenu = document.querySelector('.btn-menu');

    // btnMenu.addEventListener('click', (e) => {
    //     menu.classList.toggle('menu--open')

    //     btnMenu.classList.toggle('btn-menu--open')
    // })

    // function resize() {
    //     let width = window.innerWidth;

    //     if (width > 768) {
    //         menu.classList.remove('menu--open')
    //         btnMenu.classList.remove('btn-menu--open')
    //     } else {
    //         return
    //     }
    // }

    // window.addEventListener('resize', () => {
    //     resize()
    // })
    // resize()


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
})