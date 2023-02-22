import today from "../scripts/today";

let navItems = ["today","this week", "projects", "settings"];


export default function Nav() {
    let nav = document.createElement("nav");
    nav.classList.add("nav");
    let logo = document.createElement("div");
    logo.classList.add("logo");
    logo.innerHTML = `<h1><i class="fa-solid fa-rectangle-list"></i> TODO</h1>`;
    nav.appendChild(logo);
    navItems.forEach((item) => {
        let navItem = document.createElement("button");
        navItem.classList.add("nav-item");
        navItem.innerHTML = item;
        nav.appendChild(navItem);
    });
    document.body.appendChild(nav);
    }
