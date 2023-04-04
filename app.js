const input = document.querySelector("#todo-input");
const addButton = document.querySelector("#todo-button");
const todoList = document.querySelector("#todo-list");
// console.log(object)
let todos = JSON.parse(localStorage.getItem("todos")) || [];
renderSavedTodos();

function renderSavedTodos() {
  todos.forEach((todo) => {
    createTodo(todo)
  })
}



window.onload = function () {
  input.focus();
};

function createTodo(todo) {
  const { id, isDone, content } = todo;
 
  todoList.innerHTML += `
  <li id=${id} class='${isDone ? 'checked' : ''} '>

  <i class="check fa-sharp fa-solid fa-check"></i>
  <p>${content}</p>
  <i class="delete fa-sharp fa-solid fa-trash"></i>
  </li>`;
}

addButton.addEventListener("click", () => {
  // console.log(todoList.innerHTML)
  if (!input.value) {
    alert("Please enter a to-do")
  } else {
    const todoObject = {
      id: new Date().getTime(),
      isDone: false,
      content:input.value,
    }
    todos.push(todoObject)
    localStorage.setItem('todos',JSON.stringify(todos))
    createTodo(todoObject)
    input.value = "";
    
  }
});

todoList.addEventListener('click', (e) => {
  // console.log(e.target.parentElement)
  const id = e.target.parentElement.getAttribute('id');

  if (e.target.classList.contains('delete')) {
    todos = todos.filter((todo) => todo.id != id);
    localStorage.setItem('todos', JSON.stringify(todos));
    e.target.parentElement.remove()
  }

  if (e.target.classList.contains('check')) {
    todos.map((todo, index) => {
      if (todo.id == id) {
        todos[index].isDone = !todos[index].isDone;
      }
    });
    localStorage.setItem('todos',JSON.stringify(todos))
    if (e.target.parentElement.classList.contains('checked')) {
      e.target.parentElement.classList.remove('checked')
    } else {
      e.target.parentElement.classList.add('checked')
        
    }
  }
 
 
})

input.addEventListener('keydown', (e) => {
  // console.log(e.target)
    if (e.code == 'Enter') {
      addButton.click()
  }
})

