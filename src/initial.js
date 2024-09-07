import sushiImage from "./images/sashimi.jpg"

const content = document.querySelector("#content");

function initialLoad(){
    const text_content = document.createElement("div");
    text_content.className = "text-content"
    const title = document.createElement("h1");
    title.textContent = "Sushi Sushi";
    text_content.appendChild(title); 
    const description = document.createElement("p");
    description.textContent = "Fresh Fresh Sushi Sushi";
    text_content.appendChild(description);
    content.appendChild(text_content);

    const image = document.createElement("img");
    image.src = sushiImage;
    image.alt = "sushi_image"
    content.appendChild(image);
}

function homeButtonLoad(){
    const homeBtn = document.querySelector(".home");

    homeBtn.addEventListener("click", () =>{
        while(content.firstChild){
            content.removeChild(content.lastChild);
        }
        initialLoad();
    });
}

export {initialLoad, homeButtonLoad};

