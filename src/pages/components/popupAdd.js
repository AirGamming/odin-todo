import today from "../scripts/today";

export default function popupAdd(){
    
    let popupBackground = document.createElement("div");
    popupBackground.classList.add("popup-background");
    
    let popup = document.createElement("div");
    popup.classList.add("popup");
    
    let popupTitle = document.createElement("h2");
    popupTitle.classList.add("popup-title");
    popupTitle.textContent = "Add Todo";
    
    let popupForm = document.createElement("form");
    popupForm.classList.add("popup-form");
    
    let popupClose = document.createElement("button");
    popupClose.classList.add("popup-close");
    popupClose.innerHTML = `<i class="fa-solid fa-x"></i>`;
    popupClose.addEventListener("click", () => popupBackground.remove());
    
    let popupInputTitle = document.createElement("input");
    popupInputTitle.classList.add("popup-input-title");
    popupInputTitle.setAttribute("type", "text");
    popupInputTitle.setAttribute("placeholder", "Title");
    popupInputTitle.setAttribute("required", "");
    
    let popupInputDescription = document.createElement("input");
    popupInputDescription.classList.add("popup-input-description");
    popupInputDescription.setAttribute("type", "text");
    popupInputDescription.setAttribute("placeholder", "Description");
    
    let popupInputDate = document.createElement("input");
    popupInputDate.classList.add("popup-input-date");
    popupInputDate.setAttribute("type", "date");
    popupInputDate.setAttribute("placeholder", "Date");
    popupInputDate.setAttribute("value", today());
    popupInputDate.setAttribute("required", "");
    
    let popupInputSubmit = document.createElement("button");
    popupInputSubmit.classList.add("popup-input-submit");
    popupInputSubmit.setAttribute("type", "submit");
    popupInputSubmit.textContent = "Add";
    
    popupForm.append(popupInputTitle, popupInputDescription, popupInputDate, popupInputSubmit);
    popup.append(popupTitle, popupForm, popupClose);
    popupBackground.appendChild(popup);
    document.body.appendChild(popupBackground);

    popupForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let todo = {
            title: popupInputTitle.value,
            content: popupInputDescription.value,
            dueDate: popupInputDate.value,
            done: false
        }
        document.cookie = `todo=${JSON.stringify(todo)},expires=Thu, 18 Dec 2021 12:00:00 UTC; path=/; sameSite=strict`;
        popupBackground.remove();
    }
    );
};