const content = document.querySelector("#content");

function makeAboutLoad(){
    const text_content = document.createElement("div");
    text_content.className = "text-content";
    const mission = document.createElement("h1");
    mission.textContent ="Our Mission"
    text_content.appendChild(mission);

    const goalText = document.createElement("p");
    goalText.textContent = "We aspire to serve the absolute highest quality fish and provide the best service to our customers... blah blah blah"
    text_content.appendChild(goalText);

    content.append(text_content);
}

function aboutButtonLoad(){
    const aboutBtn = document.querySelector(".about");

    aboutBtn.addEventListener("click", () => {
        while(content.firstChild){
            content.removeChild(content.lastChild);
        }
        makeAboutLoad();
    });
}

export {aboutButtonLoad};