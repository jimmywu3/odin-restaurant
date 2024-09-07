const content = document.querySelector("#content");

function makeMenuPage(){
    const text_content = document.createElement("div");
    text_content.className = "text-content";
    const titleSashimi = document.createElement("h1");
    titleSashimi.textContent = "Sashimi";
    text_content.appendChild(titleSashimi);

    const textSashimi1 = document.createElement("p");
    textSashimi1.textContent = "Salmon -- 3.99";
    text_content.appendChild(textSashimi1);

    const textSashimi2 = document.createElement("p");
    textSashimi2.textContent = "Tuna -- 4.99";
    text_content.appendChild(textSashimi2);

    const textSashimi3 = document.createElement("p");
    textSashimi3.textContent = "Yellowtail -- 5.99";
    text_content.appendChild(textSashimi3);

    text_content.className = "text-content";
    const titleNigiri = document.createElement("h1");
    titleNigiri.textContent = "Nigiri";
    text_content.appendChild(titleNigiri);

    const textNigiri1 = document.createElement("p");
    textNigiri1.textContent = "Salmon -- 3.99"
    text_content.appendChild(textNigiri1);

    const textNigiri2 = document.createElement("p");
    textNigiri2.textContent = "Tuna -- 4.99"
    text_content.appendChild(textNigiri2);

    const textNigiri3 = document.createElement("p");
    textNigiri3.textContent = "Yellowtail -- 5.99"
    text_content.appendChild(textNigiri3);

    content.appendChild(text_content);
}

function menuButtonLoad(){
    const menuBtn = document.querySelector(".menu");

    menuBtn.addEventListener("click", () => {
        while(content.firstChild){
            content.removeChild(content.lastChild);
        }
        makeMenuPage();
    });
}

export {menuButtonLoad}

