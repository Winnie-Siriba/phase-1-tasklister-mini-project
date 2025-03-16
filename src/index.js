// Create a "close" button and append it to every list item
let todos = document.getElementsByTagName("li");
for (let i = 0; i < todos.length; i++) {
    let button = document.createElement("button");
    let text = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(text);
    todos[i].appendChild(button); 
}

// Add event listener to close buttons
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}

function newTodo(event) {
    event.preventDefault(); // Prevent form submission default behavior

    let li = document.createElement("li");
    let inputVal = document.getElementById("new-task-description").value;
    let txt = document.createTextNode(inputVal);
    li.appendChild(txt);

    if (inputVal === '') {
        alert("You must write something");
    } else {
        document.getElementById("tasks").appendChild(li);
    }

    document.getElementById("new-task-description").value = "";

    // Create a "close" button and append it to the new task
    let button = document.createElement("button");
    let text = document.createTextNode("\u00D7");
    button.className = "close";
    button.appendChild(text);
    li.appendChild(button); // Append button to newly created list item

    // Add event listener to the new close button
    button.onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    };
}

const form = document.getElementById("create-task-form");
form.addEventListener('submit', newTodo);
