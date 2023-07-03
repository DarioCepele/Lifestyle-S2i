

const styleSheet = document.createElement("style");     // Style for the article
styleSheet.textContent = `
.article{
    background-color: #e5d0e3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    height: 100vh;
}
.label{
    background-color: white;
    border-radius: 20px;
    font-size: 2rem;
    color: black;
    width: 1270px;
    padding: 2rem;
    font-weight: 400;
}
.score{
    font-size: 3rem;
    background-color: white;
    color: black;
    margin-top: 80px;
    padding: 10px 40px;
    border: 1px solid white;
    border-radius: 10px;
}
.button{
    margin-top: 3rem;
    padding: 13px 40px;
    font-size: 1.5rem;
    background-color: white;
    color: black;
    border: 1px solid white;
    border-radius: 7px;
    font-weight: 600;
}
@media screen and (max-width: 480px) {
    .article {
        display: flex;
        flex-direction: column;
        padding: 19px;
        height: 200vh;
        background-color: white;
    }
    .label {
        font-size: 27px;
        width: 350px;
        font-weight: 500;
    }
    .score{
        background-color: black;
        color: white;
    }
    .button{
        background-color: black;
        color: white;
    }
}
@media (min-width: 480px) and (max-width: 1124px){
    .label {
        font-size: 27px;
        width: 600px;
        font-weight: 500;
    }
}
`;

//function to add paragraph
function paragraph(canvas, response) {
    let label = document.createElement("p")
    label.classList.add("label")
    let text = canvas.appendChild(label);
    return text.innerHTML = response.summary;
}

//function to add score
function score(canvas, response) {
    let score = document.createElement("p")
    score.classList.add("score")
    let scores = canvas.appendChild(score);
    let parsedNumber = response.teleport_city_score.toFixed(2)
    return scores.innerHTML = parsedNumber
}

//function to add reload button
function reloadButton(canvas){
    let button = document.createElement("button")
    button.classList.add("button")
    let btn = canvas.appendChild(button)
    button.addEventListener("click", function(){
        location.reload();
    })
    return btn.innerHTML = "Reload";
}

//function to add article
function article(response){
    let canvas = document.querySelector("#article");
    canvas.classList.add("article")
    paragraph(canvas, response)
    score(canvas, response)
    reloadButton(canvas)
    document.head.appendChild(styleSheet);
}

export {article}
