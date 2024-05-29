// tabs
const showTab = (tabLink) => {
    const tab = tabLink.closest('.tabs');

    if (tabLink.classList.contains('tab-active')) {
        return;
    }

    const targetId = tabLink.dataset.targetId;
    const tabContentItem = tab.querySelector(`.projects-tab-content__item[data-id="${targetId}"]`);

    if (tabContentItem) {
        const tabBtnActive = tab.querySelector('.tab-active');
        tabBtnActive.classList.remove('tab-active');

        const tabShow = tab.querySelector('.tab-show');
        tabShow.classList.remove('tab-show');
        tabLink.classList.add('tab-active');
        tabContentItem.classList.add('tab-show');
    }
}

document.addEventListener('click', (e) => {
    if (e.target && !e.target.closest('.projects-tab-navigation__item')) {
        return;
    }
    const tabLink = e.target.closest('.projects-tab-navigation__item');
    showTab(tabLink);
});

const tabLink = document.querySelectorAll('#tabs .projects-tab-navigation__item');
showTab(tabLink[0]);

// slider
const swiperActions = new Swiper('.projects-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
    },
    keyboard: true,
});