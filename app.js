/*
Musi rendoerować nowy elent w liście
Pobieranie treści z inputa / sprawdzanie czy input nie jest pusty
Tworzy nowe elementy
Dodaje li => treść zadania, ikona, button EDIT, ikona
*/
let todoInput; // input
let errorInfo; // info o braku treści
let addBtn; // przcisk ADD
let ulList; // lista zadań, tagi UL
let newTodo; // nowe zadanie
let popup; // popup
let popupInfo; // tekst w popupie
let todoToEdit; //edytowany todo
let popupInput; // input w popup
let popupAddBtn; // popup dodaj
let popupCloseBtn; //popup zamknij

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};

const prepareDOMElements = () => {
  todoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todolist ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCloseBtn = document.querySelector(".cancel");
};

const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addNewTodo);
  ulList.addEventListener("click", checkClick);
  popupCloseBtn.addEventListener("click", closePopUp);
  popupAddBtn.addEventListener("click", changeTodoText);
};

const addNewTodo = () => {
  if (todoInput.value !== "") {
    newTodo = document.createElement("li");
    newTodo.textContent = todoInput.value;
    createToolsArea();

    ulList.append(newTodo);

    todoInput.value = "";
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "Wpisz treś zadania!";
  }
};

const createToolsArea = () => {
  const toolsPanel = document.createElement("div");
  toolsPanel.classList.add("tools");
  newTodo.append(toolsPanel);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  toolsPanel.append(completeBtn, editBtn, deleteBtn);
};

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    e.target.closest("li").classList.toggle("completed");
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editTooDo(e);
  } else if (e.target.matches(".delete")) {
    deleteTodo(e);
  }
};

const editTooDo = (e) => {
  todoToEdit = e.target.closest("li");
  popupInput.value = todoToEdit.firstChild.textContent;
  popup.style.display = "flex";
};

const closePopUp = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};

const changeTodoText = () => {
  if (popupInput.value !== "") {
    todoToEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
    popupInfo.textContent = "";
  } else {
    popupInfo.textContent = "Podaj treść!";
  }
};

const deleteTodo = (e) => {
  e.target.closest("li").remove();

  const allTodos = ulList.querySelectorAll("li");

  if (allTodos.lenght === 0) {
    errorInfo.textContent = "Brak zadań na liście";
  }
};

document.addEventListener("DOMContentLoaded", main);
