let navItems = ["filter", "settings"];


export default function Nav() {
    let nav = document.createElement("nav");
    nav.classList.add("nav");
    let logo = document.createElement("div");
    logo.classList.add("logo");
    logo.innerHTML = `<h1><i class="fa-solid fa-rectangle-list"></i> TODO</h1>`;
    nav.appendChild(logo);
    let filter = document.createElement("select")
    navItems.forEach((item) => {
        let navItem = document.createElement("button");
        navItem.classList.add("nav-item", item);
        navItem.innerHTML = item;
        nav.appendChild(navItem);
        if(item == "filter"){
        filter.classList.add("filter");
        nav.appendChild(filter);
        let filterOptions = ["All", "Today", "This Week"];
        filterOptions.forEach(option => {
            let filterOption = document.createElement("option");
            filterOption.innerHTML = option;
            filterOption.value = option;
            filter.appendChild(filterOption);
        }
        );
    };
    });
    document.body.appendChild(nav);
    return filter;
    }
