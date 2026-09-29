function home(){
    const contentDiv = document.querySelector("#content");
    const heading = document.createElement("h2");

    function headline() {
        contentDiv.appendChild(heading);
        heading.innerHTML = "Welcome to Olive Garden!";
    }

    function fancyQuote(){
        const div = document.createElement("div");
        contentDiv.appendChild(div);
        const para = createParaWithContent('"The business of feeding people is the most amazing business in the world"')
        div.appendChild(para);
    }

    function timing(){
        const div = document.createElement("div");
        const heading = document.createElement("h3");
        heading.innerHTML = "Hours"
        contentDiv.appendChild(div);
        div.appendChild(heading);
        div.appendChild(createParaWithContent("sunday: 10am - 7pm"));
        div.appendChild(createParaWithContent("monday: 7am - 7pm"));
        div.appendChild(createParaWithContent("tuesday: 7am - 7pm"));
        div.appendChild(createParaWithContent("wednesday: 7am - 7pm"));
        div.appendChild(createParaWithContent("thursday: 7am - 7pm"));
        div.appendChild(createParaWithContent("friday: 7am - 7pm"));
        div.appendChild(createParaWithContent("saturday: closed!!"));

    }

    function location(){
        const div = document.createElement("div");
        contentDiv.appendChild(div);
        const heading = document.createElement("h3");
        heading.innerHTML = "Location";
        div.appendChild(heading);
        div.appendChild(createParaWithContent("4th avenue downtown NYC"))
    }

    function createParaWithContent(content){
        const para = document.createElement("p");
        para.innerHTML = content;
        return para;
    }

    const load = () => {
        headline();
        fancyQuote();
        timing();
        location();
    }

    return { load };
}

export const homePage = home();