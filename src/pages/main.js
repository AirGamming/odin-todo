import Nav from "./components/nav";
import MenuBar from "./components/menuBar";


let todolist = [
    {
        title: "Today",
        content: "lorem ipsum dolor sit amet",
        dueDate: "2021-09-01",
        done: true,
    },
    {
        title: "This week",
        content: "lorem ipsum dolor sit amet",
        dueDate: "2021-09-01",
        done: false,
    }
]
export default function Main() {
    Nav();
    MenuBar();
    let content = document.createElement("main");
    document.body.appendChild(content);
    let todoList = document.createElement("div");
    todoList.classList.add("todo-list");
    content.appendChild(todoList);
    todolist.forEach((todo) => {
        let todoItem = document.createElement("div");
        todoItem.classList.add("todo-item");
        todoList.appendChild(todoItem);

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

        todoItem.append(todoTitle, todoContent, todoDueDate, todoDone);
    }
    )
    let button = document.createElement("button");
    button.classList.add("add-todo");
    button.textContent = "+ Add Todo";
    todoList.appendChild(button);

}
