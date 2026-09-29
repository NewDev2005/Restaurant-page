import { page } from "./home.js";
import { menuPage } from "./menu.js";


function initialPageLoad(){
    page.pageLoad();
}

function enableMenuBtn(){
    const menuBtn = document.querySelector(".navigation-bar").children[1];
    
    menuBtn.addEventListener("click", () => {
        removeAllChildNodes();
        menuPage.load();
    });
    
}


function removeAllChildNodes(){
    const contenDiv = document.querySelector("#content");

    while (contenDiv.hasChildNodes()){
        contenDiv.removeChild(contenDiv.lastChild);
    }
}
export { initialPageLoad, enableMenuBtn };