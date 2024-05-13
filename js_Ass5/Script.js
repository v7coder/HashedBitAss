//Q1
function displayRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (21 + 21) - 21);
    
    const numParagraph = document.getElementById("num");
    numParagraph.textContent = randomNumber;

    const feedbackDiv = document.createElement("div");
    feedbackDiv.textContent = randomNumber < 0 ? "Cold" : "Hot";
    document.body.appendChild(feedbackDiv);
}

//Q2
function ageChange(e) {
    let age = e.target.value;
    const errorsHolder = document.getElementById("errors-holder");
    const submitButton = document.querySelector("form button[type='submit']");

    errorsHolder.textContent = "";

    if (age === "" || age < 5) {
        errorsHolder.textContent = age === "" ? "Please choose age" : "You need to be atleast 5 years old to participate";
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

//Q3
  document.addEventListener("DOMContentLoaded", function() {
    const todoForm = document.getElementById("todoForm");
    const todoInput = document.getElementById("todoInput");
    const addButton = document.getElementById("addButton");
    const todoList = document.getElementById("todoList");

 
    todoForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
      addTodo();
    });

    function addTodo() {
      const todoText = todoInput.value.trim();
      if (todoText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `
          <span class="todo-item">${todoText}</span>
          <button class="complete-btn">Complete</button>
          <button class="trash-btn">Delete</button>
        `;
        todoList.appendChild(li);
        todoInput.value = "";
      } else {
        alert("Please enter a valid todo.");
      }
    }

    todoList.addEventListener("click", function(event) {
      if (event.target.classList.contains("complete-btn")) {
        const todoItem = event.target.parentElement.querySelector(".todo-item");
        todoItem.classList.toggle("completed");
      }
    });

    
    todoList.addEventListener("click", function(event) {
      if (event.target.classList.contains("trash-btn")) {
        const todoItem = event.target.parentElement;
        todoItem.remove();
      }
    });
  });