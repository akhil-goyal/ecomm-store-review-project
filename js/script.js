let openMenu = document.querySelector(".menu-bar");
let closeMenu = document.querySelector('.menu-close');

let buttonFilters = document.querySelector('.button-filters');
let filterFields = document.querySelector('.filter-options');

openMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "17em";
});

closeMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "0";
});

buttonFilters.addEventListener('click', () => {
    filterFields.classList.toggle('filter-options');
});