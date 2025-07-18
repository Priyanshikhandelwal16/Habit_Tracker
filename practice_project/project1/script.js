document.addEventListener("DOMContentLoaded", () => {
const taskinput = document.querySelector("#Task-input")
const btn = document.querySelector("#btn")
const tasklist = document.querySelector("#Task-list")

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

tasks.forEach((task) => renderTask(task));

btn.addEventListener("click", () => {
   const taskText = taskinput.value.trim();
   if(taskText=="") return;
   const newTask = { 
    id:Date.now(),
    text:taskText,
    completed: false,
   }
   tasks.push(newTask)
    saveTasks()
    renderTask(newTask)
   taskinput.value = ""
   console.log(tasks)
})

function renderTask(task){
    const li = document.createElement('li')
    li.setAttribute("data-id", task.id)
    if(task.completed) li.classList.add("completed")
    li.innerHTML = `
       <span>${task.text}</span>
       <button>delete</button>
    `;
    li.addEventListener("click", (e)=>{
        if(e.target.tagName == "BUTTON") return
            task.completed = !task.completed;
        li.classList.toggle("completed")
         saveTasks();
})
  
li.querySelector("button").addEventListener('click' , (e) =>{
    e.stopPropagation();
    tasks = tasks.filter((t) => t.id ===task.id)
    li.remove()
    saveTasks()
})
  
    tasklist.appendChild(li)
}

function saveTasks(){
    localStorage.setItem("tasks" , JSON.stringify(tasks))
}

})