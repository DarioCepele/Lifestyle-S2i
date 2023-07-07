import { createChart } from './JS/chart'
import { apiCall } from './JS/apiCall';
import { article } from './JS/article';
import { createErrorCard } from './JS/error';
import './style.css';


// Event listener for the button

const btn = document.querySelector("#btn");
btn.addEventListener("click", function(){
    let text = document.querySelector("#text");
    let inputValue = text.value;

    controlInput(inputValue);
    clearInput(text);
})

//function to resize input
function resizeInput(text){
    let finalText = text.toLowerCase().split(' ').join('-');
    return finalText;
}

//function to control input & make api call

async function controlInput(value){
    let chart = document.querySelector("#acquisitions");
    if (value == "" || chart != null) {
        console.log("nessun input")
    }else{
        
        try{
            const response = await apiCall("https://api.teleport.org/api/urban_areas/slug:" + resizeInput(value) + "/scores/", "GET") //API CALL
            let obj = response.categories;
            article(response); // Added article section
            addingStyle(); // style for the canvas
            removeChild(); // remove error card
            createChart(obj, resizeInput(value)); // create the chart
            window.scroll(0, 962);
        }
        catch (error){  //catch error
            const errorCard = createErrorCard(error);
            document.body.appendChild(errorCard);
            console.log(error)
        }
    }
}


function clearInput(text){
    let val = text.value = "";
    return val;
}


function removeChild(){
    let child = document.querySelector(".error-card")
    if(child === null){
    } else{
        document.body.removeChild(child);
    }
}

function addingStyle(){
    let first = document.querySelector("#firstDiv");
    let canvas = document.querySelector("#canvas");
    first.classList.add("grid")
    canvas.classList.add("canvas")
}
