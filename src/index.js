import style from '/src/css/main.css';
import Main from '/src/pages/main.js';
import today from './pages/scripts/today';
import Nav from '/src/pages/components/nav.js';
import MenuBar from '/src/pages/components/menuBar.js';


let filter = Nav();
MenuBar();
Main();
filter.addEventListener("change" ,item  =>{
    if(item.target.value == "All"){
        filter = Main();
    }else if(item.target.value == "Today"){
        filter = Main("Today");
    }else if(item.target.value == "This Week"){
        filter = Main("This week");
    }
})
