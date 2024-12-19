import './styles.css';
import loadHomePage from './page-load';
import loadAbout from './about';
import loadMenu from './menu';

document.addEventListener("DOMContentLoaded", loadHomePage);

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Home, Menu, and About Buttons Text Content
        if (button.textContent === "Home") {
            const content = document.querySelector("#content");
            content.innerHTML = "";
            loadHomePage();
        }
        else if (button.textContent === "Menu") {
            const content = document.querySelector("#content");
            content.innerHTML = "";
            loadMenu();
        } else {
            const content = document.querySelector("#content");
            content.innerHTML = "";
            loadAbout();
        }
    });
});
