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
})