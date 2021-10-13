const container = document.querySelector('.container');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
let ul = document.createElement('ul');
container.appendChild(ul);
let button;
let enterAllow = false;

const addLi = () => document.createElement('li');

const wipeInput = () => {
    input.value = "";
    input.focus();
}

const btnApagar = (li) => {
    li.innerText += ' ';
    const btnApagar = document.createElement('button');
    btnApagar.innerText = "Apagar";
    btnApagar.setAttribute('class', 'apagar');
    btnApagar.setAttribute('title', 'Apagar esta Tarefa');
    li.appendChild(btnApagar);
}

const saveTask = () => {
    const lis = ul.querySelectorAll('li');
    const liTasks = [];
    for (let task of lis){
        let taskTxt = task.innerText;
        taskTxt = taskTxt.replace('Apagar', '').trim();
        liTasks.push(taskTxt);
    }
    const taskJSON = JSON.stringify(liTasks);
    localStorage.setItem('tasks', taskJSON)
}

const addList = (textoInput) => {
    enterAllow = false;
    const li = addLi();
    li.innerHTML = textoInput;
    ul.appendChild(li);
    wipeInput();
    btnApagar(li);
    saveTask();
}

const checkEnter = () => {
    if (enterAllow === true){ 
        addList(input.value); 
        enterAllow = false; 
    } 
    return;
}

const keyPressed = () => {
    enterAllow = true;
}

input.addEventListener('keypress', function(event){
    if(event.key === "Enter"){
        checkEnter();
        return;
    } 
    keyPressed();
})

btn.addEventListener('click', function (){
    if (!input.value) return;
    checkEnter();
    
})

document.addEventListener('click', function(e){
    const el = e.target;
    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        saveTask();
    } 
})

const addSavedTasks = () => {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);
    for (let task of taskList) {
        addList(task);
    }
}
addSavedTasks();