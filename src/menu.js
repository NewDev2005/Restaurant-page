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
        contentDiv.appendChild(createParaWithContent("Chicken salad"));
        contentDiv.appendChild(createParaWithContent("Asparagus wrapped in bacon"));
        contentDiv.appendChild(createParaWithContent("Duck, chicken and sour cherry terrine"));
        contentDiv.appendChild(createH3("Main Course"));
        contentDiv.appendChild(createParaWithContent("Creamy Garlic Shrimp Parmesan"));
        contentDiv.appendChild(createParaWithContent("Sheldon's meemaw's brisket"));
        contentDiv.appendChild(createParaWithContent("Deep fried chicken"));
        contentDiv.appendChild(createH3("Desserts"));
        contentDiv.appendChild(createParaWithContent("Froot Loops"));
        contentDiv.appendChild(createParaWithContent("Fancy Pudding"));
    }

    return { load };
}


export const menuPage = menu();