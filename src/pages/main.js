import Nav from "./components/nav";
import MenuBar from "./components/menuBar";
import popup from "./components/popup";
import  today  from "./scripts/today";


export default function Main(filterOption){
    let filter = Nav();
    MenuBar();
    let todoitems = localStorage.getItem("defaultTodo");
    if (todoitems == null) {
        todoitems = [];
    }else{
        todoitems = JSON.parse(todoitems);
        if(filterOption == "Today"){
            todoitems.filter(todo => {
                console.log(todo.dueDate, today())
                if (filterOption == "Today") {
                    return todo.dueDate == today();
                }
            })
        }
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
    
    let headerEdit = document.createElement("h3");
    headerEdit.classList.add("header-text");
    headerEdit.textContent = "Edit";

    let headerRemove = document.createElement("h3");
    headerRemove.classList.add("header-text");
    headerRemove.textContent = "Remove";
    headers.append(headerTitle, headerContent, headerDate, headerEdit, headerRemove);
    todoList.appendChild(headers);
    
    todoitems.forEach(todo => {

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
        todoDone.addEventListener("click", () => {
            let todoitems = localStorage.getItem("defaultTodo");
            todoitems = JSON.parse(todoitems);
            todoitems.forEach(todo => {
                if (todo.title == todoTitle.textContent) {
                    todo.done = !todo.done;
                    }
            });
            localStorage.setItem("defaultTodo", JSON.stringify(todoitems));
        });

        let todoRemove = document.createElement("button");
        todoRemove.classList.add("todo-remove");
        todoRemove.innerHTML = `<i class="fa-solid fa-x"></i>`;
        todoRemove.addEventListener("click", () => {
            todoItem.remove();
            let todoitems = localStorage.getItem("defaultTodo");
            todoitems = JSON.parse(todoitems);
            todoitems.splice(todoitems.indexOf(todo), 1);
            localStorage.setItem("defaultTodo", JSON.stringify(todoitems));
        });
        
        let todoEdit = document.createElement("button");
        todoEdit.classList.add("todo-edit");
        todoEdit.innerHTML = `<i class="fa-solid fa-edit"></i>`;
        todoEdit.addEventListener("click", e => {
            let todoitems = localStorage.getItem("defaultTodo");
            todoitems = JSON.parse(todoitems);
            let helper = e.target.parentNode.querySelector(".todo-title").textContent; 
            todoitems.forEach(todo => {
                if (todo.title == helper) {
                    popup("edit", todoitems.indexOf(todo));
                }
            }
            )
        });


        todoText.append(todoTitle, todoContent);
        todoItem.append(todoText, todoDueDate, todoDone, todoRemove, todoEdit);
    }
    )
    let button = document.createElement("button");
    button.classList.add("add-todo");
    button.textContent = "+ Add Todo";
    todoList.appendChild(button);
    button.addEventListener("click", () => {
        popup("add");
    });
    console.log(todoitems)
    return filter
}
