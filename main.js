(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var s=this[d][0];null!=s&&(i[s]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},738:e=>{e.exports=function(e){return e[1]}},668:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(738),r=n.n(o),a=n(705),i=n.n(a)()(r());i.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);"]),i.push([e.id,"*{\n    font-family: 'Roboto', sans-serif;\n    padding: 0;\n    margin: 0;\n}body{\n    display: grid;\n    grid-template-columns: minmax(200px, 0.25fr) 1fr;\n    grid-template-rows: 69px 1fr;\n    width: 100%;\n}.nav{\n    grid-row: span 2;\n    display: flex;\n    flex-direction: column;\n    position: sticky;\n    top: 0;\n    height: 100vh;\n    background-color: rgb(202, 116, 4);\n}.nav-item{\n    background: none;\n    font-size: 1.5rem;\n    font-weight: 800;\n    border: none;\n    padding:  20px;\n    text-transform: uppercase;\n    transition: all 0.3s ease;\n}.nav-item:hover{\n    background-color: rgb(139, 80, 3);\n    color: white;\n    -webkit-text-decoration: underline white 1px;\n            text-decoration: underline white 1px;\n}.logo{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    height: 69px;\n    background-color: rgb(139, 80, 3);\n    color: white;\n}.menu-bar{\n    width: 100%;\n    background-color: rgb(139, 80, 3);\n    height: 69px;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    z-index: 3;\n}.menu-item{\n    background: none;\n    padding: 0;\n    margin: 0;\n    font-size: 0.79rem;\n    border:none;\n    color: white;\n    gap: 20px;\n    width: 44px;\n    height: 44px;\n    margin: 20px;\n}.fa-user{\n    border: white 2px solid;\n    border-radius: 2rem;\n    padding: 5px;\n    width: 2rem;\n    height: 2rem;\n    margin: 0;\n}.todo-list{\n    width: 80%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}.todo-item{\n    display: grid;\n    grid-template-columns: 80px 1fr 1fr 90px 90px;\n    width: 100%;\n    padding: 20px;\n    position: relative;\n    border-bottom: 1px black solid;\n    align-items: center;\n\n}main{\n    display: flex;\n    justify-content: center;\n\n}.todo-text{\n    grid-column: 2;\n}.todo-done{\n    grid-column: 1;\n    /* position: absolute;\n    top: 45px; */\n    border:none;\n    grid-row: 1; \n}.todo-due-date{\n    text-align: center;\n}.todo-edit{\n    grid-column: 4;\n    grid-row: 1; \n    border:none;\n    background-color: rgb(202, 116, 4);\n    color: white;\n    padding: 5px;\n    height: 48px;\n    width: 48px;\n    border-radius: 24px;\n    margin: 10px;\n    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);\n}.todo-edit:hover{\n    background-color: rgb(139, 80, 3);\n}.todo-remove:hover{\n    background-color: rgb(139, 80, 3);\n}.todo-done{\n    grid-column: 1;\n    /* position: absolute;\n    top: 45px; */\n    border:none;\n    grid-row: 1; \n}.todo-due-date{\n    text-align: center;\n}.todo-remove{\n    grid-column: 5;\n    grid-row: 1; \n    border:none;\n    background-color: red;\n    color: white;\n}.todo-edit{\n    grid-column: 4;\n    grid-row: 1; \n    border:none;\n    background-color: rgb(202, 116, 4);\n    color: white;\n}.todo-edit, .todo-remove{\n    padding: 5px;\n    height: 48px;\n    width: 48px;\n    border-radius: 24px;\n    margin: 10px;\n    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.2);\n}\n.todo-edit:hover, .todo-remove:hover{\n    background-color: rgb(139, 80, 3);\n    scale: 1.1;\n}.todo-done{\n    grid-column: 1;\n    border:none;\n    grid-row: 1; \n}.todo-due-date{\n    text-align: center;\n}.add-todo{\n    width: 100%;\n    height: 48px;\n    border-radius: 24px;\n    border: none;\n    font-weight: bold;\n    font-size: 1rem;\n    margin: 24px;\n}.popup-background{\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    display:flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 9999;\n}.popup{\n    background-color: white;\n    height: 50%;\n    width: 50%;\n    border-radius: 20px;\n    padding: 20px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    min-height: 340px;\n}.popup-close{\n    position: absolute;\n    top: 0;\n    right: 0;\n    font-size: 1rem;\n    font-weight: bold;\n    padding: 20px;\n    cursor: pointer;\n    background:none;\n    border: none;\n}.popup-form{\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    gap: 12px;\n    align-items: center;\n}.popup-input-submit, .popup-form input, .popup-input-description{\n    width: 100%;\n    height: 48px;\n    padding: 10px;\n    border-radius: 20px;\n    border: 1px solid;\n}.popup-input-submit{\n    background-color: rgb(202, 116, 4);\n    color: white;\n    font-weight: bold;\n    font-size: 1rem;\n}.headers{\n    display: grid;\n    grid-template-columns: 80px 1fr 1fr 90px 90px;\n    width: 100%;\n    align-items: start;\n    padding: 10px;\n}.overdue{\n    color: red;\n}",""]);const d=i},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},i=[],d=0;d<e.length;d++){var s=e[d],c=o.base?s[0]+o.base:s[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=d,t.splice(d,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var d=n(a[i]);t[d].references--}for(var s=o(e,r),c=0;c<a.length;c++){var l=n(a[c]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),a=n(569),i=n.n(a),d=n(565),s=n.n(d),c=n(216),l=n.n(c),u=n(589),p=n.n(u),m=n(668),f={};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=new Date;t.setDate(t.getDate()+e);var n=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0");return t.getFullYear()+"-"+o+"-"+n}function h(e,t){var n=document.createElement("div");n.classList.add("popup-background");var o=document.createElement("div");if(o.classList.add("popup"),"add"==e){var r=document.createElement("h2");r.classList.add("popup-title"),r.textContent="Add Todo";var a=document.createElement("form");a.classList.add("popup-form");var i=document.createElement("button");i.classList.add("popup-close"),i.innerHTML='<i class="fa-solid fa-x"></i>',i.addEventListener("click",(function(){return n.remove()}));var d=document.createElement("input");d.classList.add("popup-input-title"),d.setAttribute("type","text"),d.setAttribute("placeholder","Title"),d.setAttribute("required","");var s=document.createElement("input");s.classList.add("popup-input-description"),s.setAttribute("type","text"),s.setAttribute("placeholder","Description");var c=document.createElement("input");c.classList.add("popup-input-date"),c.setAttribute("type","date"),c.setAttribute("placeholder","Date"),c.setAttribute("value",v()),c.setAttribute("required","");var l=document.createElement("button");l.classList.add("popup-input-submit"),l.setAttribute("type","submit"),l.textContent="Add",a.append(d,s,c,l),o.append(r,a,i),n.appendChild(o),document.body.appendChild(n),a.addEventListener("submit",(function(e){e.preventDefault();var t=localStorage.getItem("defaultTodo");null!=(t=JSON.parse(t))&&t&&null!=t||(t=[]);var o={title:d.value,content:s.value,dueDate:c.value,done:!1};t.push(o),localStorage.setItem("defaultTodo",JSON.stringify(t)),n.remove(),document.location.reload()}))}else if("edit"==e){var u=localStorage.getItem("defaultTodo"),p=(u=JSON.parse(u))[t],m=document.createElement("h2");m.classList.add("popup-title"),m.textContent="Edit Todo";var f=document.createElement("form");f.classList.add("popup-form");var h=document.createElement("button");h.classList.add("popup-close"),h.innerHTML='<i class="fa-solid fa-x"></i>',h.addEventListener("click",(function(){return n.remove()}));var g=document.createElement("input");g.classList.add("popup-input-title"),g.setAttribute("type","text"),g.setAttribute("placeholder","Title"),g.setAttribute("required",""),g.setAttribute("value",p.title);var b=document.createElement("input");b.classList.add("popup-input-description"),b.setAttribute("type","text"),b.setAttribute("placeholder","Description"),b.setAttribute("value",p.content);var x=document.createElement("input");x.classList.add("popup-input-date"),x.setAttribute("type","date"),x.setAttribute("placeholder","Date"),x.setAttribute("value",p.dueDate),x.setAttribute("required","");var y=document.createElement("button");y.classList.add("popup-input-submit"),y.setAttribute("type","submit"),y.textContent="Edit",f.append(g,b,x,y),o.append(m,f,h),n.appendChild(o),document.body.appendChild(n),f.addEventListener("submit",(function(e){e.preventDefault();var o=localStorage.getItem("defaultTodo");(o=JSON.parse(o))[t].title=g.value,o[t].content=b.value,o[t].dueDate=x.value,localStorage.setItem("defaultTodo",JSON.stringify(o)),n.remove(),document.location.reload()}))}}function g(e){var t=localStorage.getItem("defaultTodo");if(null==t)t=[];else if(t=JSON.parse(t),"Today"==e)t=t.filter((function(e){return e.dueDate==v()}));else if("This week"==e){for(var n=[],o=0;o<7;o++)n.push(v(o));t=t.filter((function(e){return n.includes(e.dueDate)}))}t=t.sort((function(e,t){return e.dueDate>t.dueDate?1:-1}));var r=document.querySelector("main");r&&r.remove();var a=document.createElement("main");document.body.appendChild(a),a.innerHTML="";var i=document.createElement("div");i.classList.add("todo-list"),a.appendChild(i);var d=document.createElement("div");d.classList.add("headers");var s=document.createElement("h3");s.classList.add("header-text"),s.textContent="done?";var c=document.createElement("h3");c.classList.add("header-text"),c.textContent="Title & Description";var l=document.createElement("h3");l.classList.add("header-text"),l.textContent="Due Date";var u=document.createElement("h3");u.classList.add("header-text"),u.textContent="Edit";var p=document.createElement("h3");p.classList.add("header-text"),p.textContent="Remove",d.append(s,c,l,u,p),i.appendChild(d),t.forEach((function(e){var t=document.createElement("div");t.classList.add("todo-item"),i.appendChild(t);var n=document.createElement("div");n.classList.add("todo-text");var o=document.createElement("h3");o.classList.add("todo-title"),o.textContent=e.title;var r=document.createElement("p");r.classList.add("todo-content"),r.textContent=e.content;var a=document.createElement("p");if(a.classList.add("todo-due-date"),a.textContent=e.dueDate.split("-").reverse().join("."),e.dueDate<v()){a.classList.add("overdue");var d=document.createElement("span");d.classList.add("overdue-text"),d.innerHTML="<br> Overdue",a.appendChild(d)}var s=document.createElement("input");s.setAttribute("type","checkbox"),s.classList.add("todo-done"),e.done?s.setAttribute("checked",""):s.removeAttribute("checked"),s.addEventListener("click",(function(){var e=localStorage.getItem("defaultTodo");(e=JSON.parse(e)).forEach((function(e){e.title==o.textContent&&(e.done=!e.done)})),localStorage.setItem("defaultTodo",JSON.stringify(e))}));var c=document.createElement("button");c.classList.add("todo-remove"),c.innerHTML='<i class="fa-solid fa-x"></i>',c.addEventListener("click",(function(){t.remove();var n=localStorage.getItem("defaultTodo");(n=JSON.parse(n)).splice(n.indexOf(e),1),localStorage.setItem("defaultTodo",JSON.stringify(n))}));var l=document.createElement("button");l.classList.add("todo-edit"),l.innerHTML='<i class="fa-solid fa-edit"></i>',l.addEventListener("click",(function(e){var t=localStorage.getItem("defaultTodo");t=JSON.parse(t);var n=e.target.parentNode.querySelector(".todo-title").textContent;t.forEach((function(e){e.title==n&&h("edit",t.indexOf(e))}))})),n.append(o,r),t.append(n,a,s,c,l)}));var m=document.createElement("button");m.classList.add("add-todo"),m.textContent="+ Add Todo",i.appendChild(m),m.addEventListener("click",(function(){h("add")}))}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),t()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;var b,x=["filter","settings"],y=function(){var e=document.createElement("nav");e.classList.add("nav");var t=document.createElement("div");t.classList.add("logo"),t.innerHTML='<h1><i class="fa-solid fa-rectangle-list"></i> TODO</h1>',e.appendChild(t);var n=document.createElement("select");return x.forEach((function(t){var o=document.createElement("button");o.classList.add("nav-item",t),o.innerHTML=t,e.appendChild(o),"filter"==t&&(n.classList.add("filter"),e.appendChild(n),["All","Today","This Week"].forEach((function(e){var t=document.createElement("option");t.innerHTML=e,t.value=e,n.appendChild(t)})))})),document.body.appendChild(e),n}();(b=document.createElement("div")).classList.add("menu-bar"),['<h1><i class="fa-solid fa-bell"></i></h1>','<h1><i class="fa-solid fa-gear"></i></h1>','<h1><i class="fa-solid fa-user"></i></h1>'].forEach((function(e){var t=document.createElement("button");t.classList.add("menu-item"),t.innerHTML=e,b.appendChild(t)})),document.body.appendChild(b),g(),y.addEventListener("change",(function(e){"All"==e.target.value?y=g():"Today"==e.target.value?y=g("Today"):"This Week"==e.target.value&&(y=g("This week"))}))})()})();