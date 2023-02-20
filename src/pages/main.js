import Nav from "./components/nav";
import MenuBar from "./components/menuBar";
import popupAdd from "./components/popupAdd";


//
//Paceholder for todolist
//

export default function Main() {
    Nav();
    MenuBar();
    let todoitems = [];
    if(document.cookie){
        todoitems = document.cookie.split(";").map((todo) => {
            return JSON.parse(todo.split("=")[1]);
        }
        );
    }
    let content = document.createElement("main");
    document.body.appendChild(content);
    let todoList = document.createElement("div");
    todoList.classList.add("todo-list");
    content.appendChild(todoList);
    let headers = document.createElement("div");
    headers.classList.add("headers");

    let headerTitle = document.createElement("h3");
    headerTitle.classList.add("header-text");
    headerTitle.textContent = "done?";
    let headerContent = document.createElement("h3");
    headerContent.classList.add("header-text");
    headerContent.textContent = "Title & Description";
    let headerDate = document.createElement("h3");
    headerDate.classList.add("header-text");
    headerDate.textContent = "Due Date";
    let headerRemove = document.createElement("h3");
    headerRemove.classList.add("header-text");
    headerRemove.textContent = "Remove";
    headers.append(headerTitle, headerContent, headerDate, headerRemove);
    todoList.appendChild(headers);
    todoitems.forEach((todo) => {
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoList.appendChild(todoItem);


        let todoText = document.createElement("div");
        todoText.classList.add("todo-text");

        let todoTitle = document.createElement("h3");
        todoTitle.classList.add("todo-title");
        todoTitle.textContent = todo.title;

        let todoContent = document.createElement("p");
        todoContent.classList.add("todo-content");
        todoContent.textContent = todo.content;

        let todoDueDate = document.createElement("p");
        todoDueDate.classList.add("todo-due-date");
        
        todoDueDate.textContent = todo.dueDate.split("-").reverse().join(".");

        let todoDone = document.createElement("input");
        todoDone.setAttribute("type", "checkbox");
        todoDone.classList.add("todo-done");
        if (todo.done) {
            todoDone.setAttribute("checked", "");
        }else{
            todoDone.removeAttribute("checked");
        }
        let todoRemove = document.createElement("button");
        todoRemove.classList.add("todo-remove");
        todoRemove.innerHTML = `<i class="fa-solid fa-x"></i>`;
        todoRemove.addEventListener("click", () => {
            todoItem.remove();
        });
        todoText.append(todoTitle, todoContent);
        todoItem.append(todoText, todoDueDate, todoDone, todoRemove);
    }
    )
    let button = document.createElement("button");
    button.classList.add("add-todo");
    button.textContent = "+ Add Todo";
    todoList.appendChild(button);
    button.addEventListener("click", popupAdd);
}
