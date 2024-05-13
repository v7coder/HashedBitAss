//Q1
function swapTheme() {
    const Val = document.getElementById("app");
    const swapButton = document.getElementById("swap");
   
    Val.classList.toggle("day");
 Val.classList.toggle("night");
   
        swapButton.classList.toggle("button_day");
    swapButton.classList.toggle("button_night");
   
   }

//Q2
function Creatediv(width, height, text) {
    const element = document.getElementById("container");

    const newDiv = document.CreateElement("div");

    newDiv.style.width = width + 'px';
    newDiv.style.height = height + 'px';
    newDiv.style.border = "1px solid black"

    newDiv.textContent = text;

    element.appendChild(newDiv);
    
}



//Q3
function toggleVisibility() {
    let element = document.getElementById("useless-paragraph");
    if(element.style.display === "none"){
        element.style.display = "block";
    }
    else{
        element.style.display = "none";
    }
  }



