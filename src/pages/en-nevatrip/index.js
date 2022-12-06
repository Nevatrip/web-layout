import '../../scss/pages/en-nevatrip.scss';

import { dropDownMenu } from "./../../js/drop-down-menu/drop-down-menu.js"

function ready() {

    // выпадающее меню (desktop), бургер-меню (mobile)
    dropDownMenu();
}

function load() {

    document.body.classList.remove("preload");
}

window.addEventListener("load", load);

document.addEventListener("DOMContentLoaded", ready);