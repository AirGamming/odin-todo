import style from '/src/css/main.css';
import Main from '/src/pages/main.js';
import today from './pages/scripts/today';
// import * as favicon from '/favicon.ico';

let filter = Main();
console.log(filter)
filter.addEventListener("change", item  =>{
    if(item == "all"){
        filter = Main();
    }else if(item == "today"){
        filter = Main("Today");
    }else if(item == "this week"){
        filter = Main("This week");
    }
})
