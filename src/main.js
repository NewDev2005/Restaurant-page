import { homePage } from "./home.js";
import { menuPage } from "./menu.js";


function initialPageLoad(){
    homePage.load();
}

function enableMenuBtn(){
    const menuBtn = document.querySelector(".navigation-bar").children[1];
    
    menuBtn.addEventListener("click", () => {
        removeAllChildNodes();
        menuPage.load();
    });
    
}

function enableHomeBtn(){
    const homeBtn = document.querySelector(".navigation-bar").children[0];

    homeBtn.addEventListener("click", () => {
        removeAllChildNodes();
        homePage.load();
    });
}

function removeAllChildNodes(){
    const contenDiv = document.querySelector("#content");

    while (contenDiv.hasChildNodes()){
        contenDiv.removeChild(contenDiv.lastChild);
    }
}
export { initialPageLoad, enableHomeBtn, enableMenuBtn };