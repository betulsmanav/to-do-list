const ekleBtn = document.querySelector('#liveToastBtn')
const input = document.querySelector('#task')
const list = document.querySelector('#list')

let todos = JSON.parse(localStorage.getItem('todos')) || [];
renderSaved();
function renderSaved() {
    todos.forEach((todo) => {
        createElement(todo)
    })
}
function createElement(todo) {
    const { id, isDone, content } = todo;
    list.innerHTML +=
    `<li id=${id} class='${isDone ? 'checked' :'' } check'>
        <p>${content}</p>
        <i class="close fa-solid fa-xmark"></i>
    </li>` 
    input.value = '';
}
ekleBtn.addEventListener('click', () => {
    if (!input.value) {
        alert('bos birakma')
    } else {
        const todoObject = {
            id: new Date().getTime(),
            isDone: false,
            content:input.value,
        }
        todos.push(todoObject)
        console.log(todos)
        localStorage.setItem('todos',JSON.stringify(todos) )
        createElement(todoObject);
    }
})


list.addEventListener('click', (e) => {
    const id = e.target.parentElement.getAttribute('id')
    console.log(e.target)
    
    if (e.target.classList.contains('close')) {
        todos = todos.filter((todo) => todo.id != id)
        localStorage.setItem('todos',JSON.stringify(todos) )
        e.target.parentElement.remove()
    } else {
        

        todos.map((todo, index) => {
            // console.log(todo)
            if (todo.id == id) {
                
                todos[index].isDone=!todos[index].isDone
            }
        })
        localStorage.setItem('todos',JSON.stringify(todos) )
        if (e.target.parentElement.classList.contains('checked')) {
            e.target.parentElement.classList.remove('checked')
        
        } else {
            e.target.parentElement.classList.add('checked')
        
        }
    } 
})
        
input.addEventListener('keydown', (e) => {
    e.code=="Enter" && ekleBtn.click()
})
window.onload = () => {
    input.focus()
}   