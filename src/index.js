import style from '/src/css/main.css';
import Main from '/src/pages/main.js';
import today from './pages/scripts/today';
// import * as favicon from '/favicon.ico';

let filter = Main();
console.log(filter)
filter.addEventListener("change" ,item  =>{
    console.log("change" , item.target.value)
    if(item.target.value == "All"){
        console.log("all")
        filter = Main();
    }else if(item.target.value == "Today"){
        filter = Main("Today");
        console.log("today")
    }else if(item.target.value == "This Week"){
        filter = Main("This week");
        console.log("this week")
    }
})
