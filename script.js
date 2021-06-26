
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');
// const cButton = document.querySelector('.check-btn')
//var itemCountSpan = document.getElementById('item-count')
//var uncheckedCountSpan = document.getElementById('unchecked-count')
//const listElement = document.querySelectorAll('.todo_item')

todoButton.addEventListener("click", newTodo);
list.addEventListener("click", checkboxToggle);

function newTodo(e) {
  e.preventDefault();
  //todo DIV
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo-container');
  //todo LI 
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  if(todoInput.value === ""){
     return null
  }

  //checkButton
  const checkbox = document.createElement('button');
  checkbox.innerHTML = '<i class = "fas fa-check"></i>';
  checkbox.classList.add('check-btn');
  todoDiv.appendChild(checkbox);

  list.appendChild(todoDiv)
  todoInput.value = ""
  counter()
  // checkStatus()
}

function checkboxToggle(e) {
  const myTodo = e.target
  if (myTodo.classList[0] === "check-btn") {
    const completed = myTodo.parentElement;
    completed.classList.toggle("completedItem");
  }
}

function counter() {
  let c = document.getElementById('todo-list').childElementCount;
  document.getElementById('item-count').innerHTML = c;
}
