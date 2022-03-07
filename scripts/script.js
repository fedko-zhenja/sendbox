// const element = document.createElement("div");
// element.innerText = 'hello';
// const root = document.getElementById('root');
// root.appendChild(element);




const root = document.getElementById('root');

const toDoList = document.createElement("div");

const input = document.createElement("input");
input.placeholder = "ToDo";

function onAddButtonClick() {
    console.log(input.value)
    const newToDo = document.createElement("li");
    newToDo.innerText = input.value;
    textList.append(newToDo); 
}

const addButton = document.createElement("button");
addButton.innerText = "Add";
addButton.onclick = onAddButtonClick

const titleList = document.createElement("p");
titleList.innerText = "List";

const textList = document.createElement("ul");
const firstToDo = document.createElement("li");
firstToDo.innerText = "First To Do"
textList.append(firstToDo);

toDoList.append(input, addButton,titleList, textList);

root.append(toDoList);


