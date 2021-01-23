let openMenu = document.querySelector(".menu-bar");
let closeMenu = document.querySelector('.menu-close');

let buttonFilters = document.querySelector('.button-filters');
let filterFields = document.querySelector('.filter-options');

let userIcon = document.querySelector('.user-image');

openMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "17em";
});

closeMenu.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "0";
});

buttonFilters.addEventListener('click', () => {
    filterFields.classList.toggle('filter-options');
});

userIcon.addEventListener('click', () => {
    document.querySelector(".side-bar").style.width = "17em";
});