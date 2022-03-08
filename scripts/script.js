// const element = document.createElement("div");
// element.innerText = 'hello';
// const root = document.getElementById('root');
// root.appendChild(element);




const root = document.getElementById('root');

const toDoList = document.createElement("div");
toDoList.classList.add("container");

const input = document.createElement("input");
input.placeholder = "ToDo";
input.classList.add("input");

function onAddButtonClick() {
    const newToDo = document.createElement("li");
    
    if (input.value == "" ) {
        alert ("Вы ничего не ввели!")
    } else {
        newToDo.innerText = input.value;
        input.value = "";
        textList.append(newToDo); 
    }
}

const addButton = document.createElement("button");
addButton.innerText = "Add";
addButton.onclick = onAddButtonClick;
addButton.classList.add("add_Button");



const titleList = document.createElement("p");
titleList.innerText = "List";

const textList = document.createElement("ul");
textList.classList.add("text_List");

const firstToDo = document.createElement("li");
firstToDo.innerText = "First To Do"
textList.append(firstToDo);

toDoList.append(input, addButton,titleList, textList);

root.append(toDoList);


