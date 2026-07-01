import "./styles.css";
import loadHomePage from "./modules/main.js";
import loadMenuPage from "./modules/menu.js";
import loadAboutPage from "./modules/about.js";

loadHomePage();

const homeButton = document.querySelector("#home-btn");
const menuButton = document.querySelector("#menu-btn");
const aboutButton = document.querySelector("#about-btn");
const content = document.querySelector("#content");

homeButton.addEventListener("click", function(){
    content.innerHTML = "";
    loadHomePage();
});

menuButton.addEventListener("click", function(){
    content.innerHTML = "";
    loadMenuPage();
});

aboutButton.addEventListener("click", function(){
    content.innerHTML = "";
    loadAboutPage();
});