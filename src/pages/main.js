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
    
    document.body.appendChild(content)
}
