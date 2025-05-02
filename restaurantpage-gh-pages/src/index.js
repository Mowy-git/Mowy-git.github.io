import "./styles.css";
import homeTab from './home.js';
import menuTab from './menu.js';
import aboutTab from './about.js';

let clearContent = () => content.innerHTML = "";

console.log("it's working");

const content = document.querySelector("#content");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

homeTab();

document.getElementById("home").addEventListener("click", () => {
    clearContent();
    homeTab();
});

document.getElementById("menu").addEventListener("click", () => {
    clearContent();
    menuTab();
});

document.getElementById("about").addEventListener("click", () => {
    clearContent();
    aboutTab();
});



