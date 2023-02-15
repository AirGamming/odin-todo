

export default function MenuBar() {
    let menuBar = document.createElement("div");
    menuBar.classList.add("menu-bar");
    let menuBarItems = [`<h1><i class="fa-solid fa-bell"></i></h1>`, `<h1><i class="fa-solid fa-gear"></i></h1>`, `<h1><i class="fa-solid fa-user"></i></h1>`];
    menuBarItems.forEach((item) => {
        let menuItem = document.createElement("button");
        menuItem.classList.add("menu-item");
        menuItem.innerHTML = item;
        menuBar.appendChild(menuItem);
    }
    );
    document.body.appendChild(menuBar);

}