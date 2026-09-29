function about(){
    const contentDiv = document.querySelector("#content");

    function createHeadline(){
        const heading = document.createElement("h2");
        heading.innerHTML = "Delicious Food, Unforgettable Moments.";
        contentDiv.appendChild(heading);
    }

    function contact(){
        const para = document.createElement("p");
        para.innerHTML = "Contact us at fakeRestaurant@gmail.com"
        contentDiv.appendChild(para);
    }

    const load = () => {
        createHeadline();
        contact();
    }

    return { load };
}

export const aboutPage = about();