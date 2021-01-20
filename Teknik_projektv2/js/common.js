const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


//Event Listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


function addTodo(event){
    //Prevent form fom submiting 
    event.preventDefault();
    // Create todo div 
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //creat LI 
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo); 
    //Check trash button 
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class= "fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //Appen to list 
    todoList.appendChild(todoDiv);
    //Clear todo Input value
    todoInput.value = "";
}

function deleteCheck(e){
    // the target event returns the element that triggered the event in this case the delte button 
    const item = e.target;
    //Delte Todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation 
        todo.classList.add("fall");
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
        
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
        
// Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
}
}
}
}