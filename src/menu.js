function menu(){
    const contentDiv = document.querySelector("#content");

    function createMenuHeadline(){
        const heading = document.createElement("h2");
        contentDiv.append(heading);
        heading.innerHTML = "Menu";
    }

    function createH3(content){
        const heading = document.createElement("h3");
        heading.innerHTML = content;
        return heading;
    }

    function createParaWithContent(content){
        const para = document.createElement("p");
        para.innerHTML = content;
        return para;
    }

    const load = () => {
        createMenuHeadline();
        contentDiv.appendChild(createH3("Starters"));
        contentDiv.appendChild(createParaWithContent("chicken wings"));
        contentDiv.appendChild(createParaWithContent("crispy corn"));
        contentDiv.appendChild(createH3("Main Course"));
        contentDiv.appendChild(createParaWithContent("Medium steak"));
        contentDiv.appendChild(createParaWithContent("Texas Brisket"));
    }

    return { load };
}


export const menuPage = menu();