!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=9)}([function(e,t,o){const n=o(2);e.exports={folders:[{name:"default",todos:[{title:"Take out trash",desc:"Remove trash from every room and bring outside",dueDate:"09/14/2019",priority:"high",folder:"default",isComplete:!1},{title:"Walk dog",desc:"Get Sophie walkin' and poopin'",dueDate:"09/20/2019",priority:"high",folder:"default",isComplete:!1},{title:"Meal prep",desc:"Lunches need to be made for the week",dueDate:"09/10/2019",priority:"medium",folder:"default",isComplete:!1}],id:n()},{name:"javascript",todos:[{title:"TODOs App",desc:"Complete the TODO App",dueDate:"10/01/2019",priority:"medium",folder:"javascript",isComplete:!1},{title:"Work on Algorithms",desc:"Algorithms need to be completed by interviews",dueDate:"12/30/2019",priority:"low",folder:"javascript",isComplete:!1},{title:"Weather App",desc:"Begin work on the weather app using React and APIs",dueDate:"11/01/2019",priority:"low",folder:"javascript",isComplete:!1}],id:n()},{name:"ruby",todos:[{title:"Pick up syntax",desc:"Syntax should be similar to Javascript. Take a look and learn a little",dueDate:"10/31/2019",priority:"low",folder:"ruby",isComplete:!1},{title:"Ruby on Rails",desc:"Practice a Rails app",dueDate:"11/01/2019",priority:"low",folder:"ruby",isComplete:!1}],id:n()}],folder:null,todos:[],todo:null}},function(e,t,o){const n=o(5),r=o(0).folders;e.exports={getTodos:function(e){return e.todos},getTodo:function(e,t){let o=e.todos;for(let e=0;e<o.length;e++)if(o[e].id===t)return o[e];return"No todo found"},addTodo:function(e,t,o,i,d="default"){let l,s=new n(e,t,o,i,d);for(let e=0;e<r.length;e++)r[e].name===d&&(l=r[e]);return l.todos.push(s),l},deleteTodo(e,t){let o,n=e.todos;for(let e=0;e<n.length;e++)n[e].id===t&&(o=n.indexOf(n[e]));return o&&n.splice(o,1),n}}},function(e,t,o){var n=o(10),r=o(11);e.exports=function(e,t,o){var i=t&&o||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var d=(e=e||{}).random||(e.rng||n)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,t)for(var l=0;l<16;++l)t[i+l]=d[l];return t||r(d)}},function(e,t,o){const n=o(6),r=o(0).folders;e.exports={getFolder:function(e){for(let t=0;t<r.length;t++)if(r[t].id===e)return r[t];return"No folder found"},addFolder:function(e){const t=new n(e);return r.push(t),r},removeFolder:function(e){let t;for(let o=0;o<r.length;o++)r[o].id===e&&(t=r.indexOf(r[o]));return void 0!==t&&0!==t&&r.splice(t,1),r}}},function(e,t){e.exports=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},function(e,t,o){const n=o(2);e.exports=class{constructor(e,t,o,r,i="default",d=!1){this.title=e,this.desc=t,this.dueDate=o,this.priority=r,this.isComplete=d,this.folder=i,this.id=n()}todoMethod(){console.log("Hi from Todo")}get title(){return this._title}set title(e){this._title=e}get desc(){return this._desc}set desc(e){this._desc=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}get isComplete(){return this._isComplete}set isComplete(e){this._isComplete=e}get folder(){return this._folder}set folder(e){this._folder=e}}},function(e,t,o){const n=o(2);e.exports=class{constructor(e){this.name=e,this.todos=[],this.id=n()}getTodos(){return this.todos}addTodo(e){this.todos.push(e)}getId(){return this.id}get name(){return this._name}set name(e){this._name=e}}},function(e,t,o){const n=document.querySelector(".content"),r=o(0).folders,i=o(13),d=o(4);e.exports={displayFolder:function(e){d(n),r.map(e=>{n.appendChild(i(e))});for(let t=0;t<r.length;t++)r[t].name===e&&(d(n),n.appendChild(i(r[t])))}}},function(e,t,o){const n=document.querySelector(".content"),r=o(1).addTodo,i=o(4),d=o(7).displayFolder;e.exports={displayNewTodo:function(e){let t=e.title,o=e.desc,l=e.duedate,s=e.priority.toLowerCase(),a=e.folder.toLowerCase();r(t,o,l,s,a),i(n),n.appendChild(d())},displayFullTodo:function(e){console.log(e);const t=document.querySelectorAll(".expand");[...e.children].forEach(e=>{if(e.classList.contains("expand")){if(e.classList.contains("hidden"))for(let e=0;e<t.length;e++)t[e].classList.remove("show"),t[e].classList.add("hidden");e.classList.toggle("show"),e.classList.toggle("hidden")}})}}},function(e,t,o){const n=o(0).folders,r=(o(5),o(6),o(3).getFolder,o(3).addFolder),i=o(3).removeFolder,d=(o(1).addTodo,o(1).getTodos,o(1).getTodo,o(1).deleteTodo,o(12).displayNav),l=o(7).displayFolder,s=o(8).displayNewTodo,a=o(8).displayFullTodo,c=document.querySelector("#new-folder-input");document.querySelector("#new-folder-submit").addEventListener("click",(function(){n.length<5?r(c.value):alert("Too many folders, please delete one"),d(),l(),c.value=""})),document.querySelector("#test").addEventListener("click",(function(e){console.log("test"),console.log(document.querySelectorAll(".folder"))})),document.addEventListener("click",(function(e){if(e.target&&e.target.classList.contains("todo")&&(console.log([...e.target.children]),a(e.target)),e.target&&e.target.classList.contains("delete-button")){let t=e.target.parentNode.parentNode.dataset.id;console.log(i(t)),l(),d()}if(e.target&&e.target.classList.contains("folder")){let t=e.target.innerText.toLowerCase();l(t)}if(e.target&&e.target.classList.contains("new-todo-h2")){let t=e.target.nextSibling;t.classList.toggle("hidden"),t.classList.toggle("show")}if(e.target&&e.target.classList.contains("add-new-todo")){let t,o={},r=e.target.parentNode.parentNode.parentNode.dataset.id,i=[...e.target.parentNode.childNodes];for(let e=0;e<i.length;e++)if(i[e].className&&"new-todo-input"===i[e].className){let t=i[e].id,n=i[e].value;o[t]=n}for(let e=0;e<n.length;e++)n[e].id===r&&(t=n[e].name);o.folder=t,s(o)}})),window.onload=function(){d(),l()}},function(e,t){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var n=new Uint8Array(16);e.exports=function(){return o(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},function(e,t){for(var o=[],n=0;n<256;++n)o[n]=(n+256).toString(16).substr(1);e.exports=function(e,t){var n=t||0,r=o;return[r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],"-",r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]],r[e[n++]]].join("")}},function(e,t,o){const n=document.querySelector(".nav"),r=o(0).folders,i=o(4);e.exports={displayNav:function(){d();for(let e=0;e<r.length;e++){let t=r[e].name,o=document.createElement("li");o.setAttribute("id",t),o.classList.add("folder"),o.innerText=t,n.appendChild(o)}}};const d=()=>{i(n);const e=document.createElement("li");e.setAttribute("id","all"),e.classList.add("folder"),e.innerText="show all folders",n.appendChild(e)}},function(e,t,o){const n=o(14),r=o(15);e.exports=function(e){let t=document.createElement("ul");t.classList.add("todos"),t.setAttribute("data-id",e.id);let o=document.createElement("button");o.classList.add("delete-button"),o.innerText="X";let i=document.createElement("li");return i.classList.add("project-title"),i.innerHTML=`<h1>${e.name}</h1>`,i.prepend(o),t.appendChild(i),e.todos.forEach(e=>{let o=document.createElement("li");o.classList.add(`${e.priority}`),o.classList.add("todo");let n=document.createElement("div"),i=document.createElement("div"),d=r(e);n.classList.add("task"),i.classList.add("due-date"),n.innerText=e.title,i.innerText=e.dueDate,o.appendChild(n),o.appendChild(i),o.appendChild(d),t.appendChild(o)}),t.appendChild(n()),t}},function(e,t){e.exports=function(){const e=document.createElement("li");e.classList.add("new-todo-li");const t=document.createElement("h2");t.classList.add("new-todo-h2"),t.innerText="Add a new Todo";const o=document.createElement("div");return o.classList.add("hidden"),o.classList.add("new-todo"),o.innerHTML='<label for="title">Title</label>\n  <input id="title" name="title" class="new-todo-input" type="text" placeholder="TODO" />\n  <label for="desc">Description</label>\n  <textarea id="desc" name="desc"  placeholder="Go to this place and take part in this activity" class="new-todo-input"></textarea>\n  <label for="duedate">Due Date</label>\n  <input id="duedate" name="input" type="text" placeholder="MM/DD/YYYY" class="new-todo-input">\n  <label for="priority">Priority</label>\n  <input id="priority" name="priority" type="text" placeholder="Low / Medium / High" class="new-todo-input">\n  <input class="add-new-todo" type="submit" value="Submit" />',e.appendChild(t),e.appendChild(o),e}},function(e,t,o){const n=o(16);e.exports=function(e){let t=n(e.priority),o=e.desc,r=document.createElement("div");r.classList.add("expand"),r.classList.add("hidden");let i=document.createElement("p"),d=document.createElement("desc"),l=document.createElement("button");return i.innerText=`Priority - ${t}`,d.innerText=`${o}`,l.innerText="Complete?",r.appendChild(i),r.appendChild(d),r.appendChild(l),r}},function(e,t){e.exports=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}]);