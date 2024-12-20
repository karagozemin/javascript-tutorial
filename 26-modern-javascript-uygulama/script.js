const textInputDOM = document.getElementById("todo-input");
const btnaddTodoDOM = document.querySelector("#add-todo");
const todosDOM = document.querySelector("#todos");
const btnClearDOM = document.querySelector("#clear");

class Storage {
  static addTodoStorage(todoArr) {
    let storage = localStorage.setItem("todo", JSON.stringify(todoArr));
    return storage;
  }
  static getStorage() {
    let storage =
      localStorage.getItem("todo") === null
        ? []
        : JSON.parse(localStorage.getItem("todo"));
    return storage;
  }
}

let todoArr = Storage.getStorage();

// const {...rest} = todoArr[0];
// console.log(rest);

btnaddTodoDOM.addEventListener("click", (e) => {
  e.preventDefault();
  let id = todoArr.length + 1;
  let title = textInputDOM.value;
  const todo = new Todo(id, title);
  todoArr = [...todoArr, todo];
  console.log(todoArr);
  // todoArr.push(todo);
  todoArr.reverse();
  UI.alert("Todo eklendi!");
  UI.clearInput();
  UI.displayTodos();
  // add to localStorage
  Storage.addTodoStorage(todoArr);
});

class Todo {
  constructor(id, title) {
    this.id = id;
    this.title = title;
  }
}

class UI {
  static displayTodos() {
    let result = "";

    if (todoArr.length === 0) {
      todosDOM.innerHTML = "Liste Boş!";
    } else {
      todoArr.map((item) => {
        result += `<li 
         class="flex justify-between border border-2 px-4 py-3 flex items-center justify-between font-bold"
     >
     <span>${item.title}</span>
     <button class="text-red-400 remove" data-id="${item.id}">Sil</button>
     </li>
     `;
      });
      todosDOM.innerHTML = result;
    }
  }
  static clearInput() {
    textInputDOM.value = "";
  }

  static removeTodo() {
    todosDOM.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove")) {
        e.target.parentElement.remove();
        let btnId = e.target.dataset.id;
        UI.removeArrayTodo(btnId);
      }
    });
  }

  static removeArrayTodo(id) {
    todoArr = todoArr.filter((item) => item.id !== +id);
    Storage.addTodoStorage(todoArr);
    UI.displayTodos();
    UI.alert("Todo Silindi");
  }

  static clearTodos() {
    btnClearDOM.addEventListener("click", () => {
      todoArr = [];
      Storage.addTodoStorage(todoArr);
      UI.displayTodos();
      UI.alert("Liste temizlendi");
    });
  }

  static alert(text) {
    window.alert(text);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  UI.removeTodo();
  UI.displayTodos();
  UI.clearTodos();
});

//   todos.splice(deletedId, 1);
//   displayTodos();
// }
// function clearTodos() {
//   todos.splice(0, todos.length);
//   displayTodos();
// }
// displayTodos();
