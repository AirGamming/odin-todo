import style from '/src/css/main.css';
import Main from '/src/pages/main.js';
// import * as favicon from '/favicon.ico';

Main();

const reset = document.createElement("button");
reset.classList.add("reset");
reset.innerHTML = "Reset"
document.body.appendChild(reset);

reset.addEventListener("click", () => {
    localStorage.clear();
}
);