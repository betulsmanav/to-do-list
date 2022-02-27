const inputText = document.querySelector(".input");
const addButton = document.querySelector(".add-btn");
const form = document.querySelector(".form");
const ul = document.querySelector("ul");
// console.log(inputText);

const createTask = (task) => {
    return `
    <div class="list">
            <li class="task">
              ${task}
            </li>
            <button class="delete-btn">X</button>
          </div>
          `
}


const counter = () => {
    let taskCount = ul.getElementsByClassName("list").length;
    let spanCount = document.querySelector("#task-count");
    spanCount.innerHTML = taskCount;
    console.log(spanCount.innerHTML);

}
window.addEventListener("load", () => {
    counter();
    
})

addButton.addEventListener("click", e => {
    e.preventDefault();
    if (inputText.value !="") {
        ul.innerHTML += createTask(inputText.value);
        form.reset();
        counter();

    } else {
        alert("bos task eklenemez.")
    };
        

});

ul.addEventListener("click", e => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    counter();

    }
    if (e.target.classList.contains("task")) {
        e.target.parentElement.style.background = "lightgray";
    }
       
});

