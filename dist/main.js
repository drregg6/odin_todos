!function(e){var t={};function n(o){if(t[o])return t[o].exports;var d=t[o]={i:o,l:!1,exports:{}};return e[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var d in e)n.d(o,d,function(t){return e[t]}.bind(null,d));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=10)}([function(e,t,n){const o=n(2);e.exports={folders:[{name:"default",todos:[],id:o()}]}},function(e,t,n){const o=n(6),d=n(0).folders;e.exports={getTodos:function(e){return e.todos},getTodo:function(e,t){let n=e.todos;for(let e=0;e<n.length;e++)if(n[e].id===t)return n[e];return"No todo found"},addTodo:function(e,t,n,r,i="default"){let l,s=new o(e,t,n,r,i);for(let e=0;e<d.length;e++)d[e].name===i&&(l=d[e]);return l.todos.push(s),l},deleteTodo(e,t){let n;for(let t=0;t<d.length;t++)e===d[t].id&&(n=d[t]);let o=n.todos,r=-1;for(let e=0;e<o.length;e++)o[e].id===t&&(r=o.indexOf(o[e]));return-1!==r&&o.splice(r,1),o}}},function(e,t,n){var o=n(11),d=n(12);e.exports=function(e,t,n){var r=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var i=(e=e||{}).random||(e.rng||o)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t)for(var l=0;l<16;++l)t[r+l]=i[l];return t||d(i)}},function(e,t,n){const o=n(7),d=n(0).folders;e.exports={getFolder:function(e){for(let t=0;t<d.length;t++)if(d[t].id===e)return d[t];return"No folder found"},addFolder:function(e){e=e.toLowerCase();const t=new o(e);return d.push(t),d},removeFolder:function(e){let t;for(let n=0;n<d.length;n++)d[n].id===e&&(t=d.indexOf(d[n]));return void 0!==t&&0!==t&&d.splice(t,1),d}}},function(e,t){e.exports=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},function(e,t){e.exports=function(e){let t=e.split(" ");for(let e=0;e<t.length;e++)t[e]=t[e].charAt(0).toUpperCase()+t[e].slice(1);return t.join(" ")}},function(e,t,n){const o=n(2);e.exports=class{constructor(e,t,n,d,r="default",i=!1){this.title=e,this.desc=t,this.dueDate=n,this.priority=d,this.isComplete=i,this.folder=r,this.id=o()}todoMethod(){console.log("Hi from Todo")}get title(){return this._title}set title(e){this._title=e}get desc(){return this._desc}set desc(e){this._desc=e}get dueDate(){return this._dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}get isComplete(){return this._isComplete}set isComplete(e){this._isComplete=e}get folder(){return this._folder}set folder(e){this._folder=e}}},function(e,t,n){const o=n(2);e.exports=class{constructor(e){this.name=e,this.todos=[],this.id=o()}getTodos(){return this.todos}addTodo(e){this.todos.push(e)}getId(){return this.id}get name(){return this._name}set name(e){this._name=e}}},function(e,t,n){const o=document.querySelector(".content"),d=n(0).folders,r=n(14),i=n(4);e.exports={displayFolder:function(e){i(o),d.map(e=>{o.appendChild(r(e))});for(let t=0;t<d.length;t++)d[t].name===e&&(i(o),o.appendChild(r(d[t])))}}},function(e,t,n){const o=document.querySelector(".content"),d=n(1).addTodo,r=n(4),i=n(8).displayFolder;e.exports={displayNewTodo:function(e){let t=e.title,n=e.desc,l=e.duedate,s=e.priority.toLowerCase(),a=e.folder.toLowerCase();d(t,n,l,s,a),r(o),o.appendChild(i())},displayFullTodo:function(e){console.log(e);const t=document.querySelectorAll(".expand");[...e.children].forEach(e=>{if(e.classList.contains("expand")){if(e.classList.contains("hidden"))for(let e=0;e<t.length;e++)t[e].classList.remove("show"),t[e].classList.add("hidden");e.classList.toggle("show"),e.classList.toggle("hidden")}})}}},function(e,t,n){const o=n(0).folders,d=n(3).addFolder,r=n(3).removeFolder,i=n(1).deleteTodo,l=n(13).displayNav,s=n(8).displayFolder,a=n(9).displayNewTodo,c=n(9).displayFullTodo,u=document.querySelector("#new-folder-input");document.querySelector("#new-folder-submit").addEventListener("click",(function(){o.length<5?""!==u.value?d(u.value):alert("Input needs a value"):alert("Too many folders, please delete one"),l(),s(),u.value=""})),document.addEventListener("click",(function(e){if(e.target&&e.target.classList.contains("todo")&&(console.log([...e.target.children]),c(e.target)),e.target&&e.target.classList.contains("delete-button")){let t=e.target.parentNode.parentNode.dataset.id;console.log(r(t)),s(),l()}if(e.target&&e.target.classList.contains("folder")){let t=e.target.innerText.toLowerCase();s(t)}if(e.target&&e.target.classList.contains("new-todo-h2")){let t=e.target.nextSibling;t.classList.toggle("hidden"),t.classList.toggle("show")}if(e.target&&e.target.classList.contains("add-new-todo")){let t,n={},d=e.target.parentNode.parentNode.parentNode.dataset.id,r=[...e.target.parentNode.childNodes];for(let e=0;e<r.length;e++)if(r[e].className&&"new-todo-input"===r[e].className){let t=r[e].id,o=r[e].value;n[t]=o}for(let e=0;e<o.length;e++)o[e].id===d&&(t=o[e].name);n.folder=t,a(n)}if(e.target&&e.target.classList.contains("complete-todo")){let t=e.target.parentNode.parentNode,n=t.parentNode,o=t.dataset.id,d=n.dataset.id;i(d,o),s()}})),window.onload=function(){l(),s()}},function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var o=new Uint8Array(16);e.exports=function(){return n(o),o}}else{var d=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),d[t]=e>>>((3&t)<<3)&255;return d}}},function(e,t){for(var n=[],o=0;o<256;++o)n[o]=(o+256).toString(16).substr(1);e.exports=function(e,t){var o=t||0,d=n;return[d[e[o++]],d[e[o++]],d[e[o++]],d[e[o++]],"-",d[e[o++]],d[e[o++]],"-",d[e[o++]],d[e[o++]],"-",d[e[o++]],d[e[o++]],"-",d[e[o++]],d[e[o++]],d[e[o++]],d[e[o++]],d[e[o++]],d[e[o++]]].join("")}},function(e,t,n){const o=document.querySelector(".nav"),d=n(0).folders,r=n(4),i=n(5);e.exports={displayNav:function(){l();for(let e=0;e<d.length;e++){let t=i(d[e].name),n=document.createElement("li");n.setAttribute("id",t),n.classList.add("folder"),n.innerText=t,o.appendChild(n)}}};const l=()=>{r(o);const e=document.createElement("li");e.setAttribute("id","all"),e.classList.add("folder"),e.innerText="Show All Folders",o.appendChild(e)}},function(e,t,n){const o=n(15),d=n(16),r=n(5);e.exports=function(e){let t=document.createElement("ul");t.classList.add("todos"),t.setAttribute("data-id",e.id);let n=document.createElement("button");n.classList.add("delete-button"),n.innerText="X";let i=document.createElement("li");return i.classList.add("project-title"),i.innerHTML=`<h1>${r(e.name)}</h1>`,i.prepend(n),t.appendChild(i),e.todos.forEach(e=>{let n=document.createElement("li");n.classList.add(`${e.priority}`),n.classList.add("todo"),n.setAttribute("data-id",e.id);let o=document.createElement("div"),r=document.createElement("div"),i=d(e);o.classList.add("task"),r.classList.add("due-date"),o.innerText=e.title,r.innerText=e.dueDate,n.appendChild(o),n.appendChild(r),n.appendChild(i),t.appendChild(n)}),t.appendChild(o()),t}},function(e,t){e.exports=function(){const e=document.createElement("li");e.classList.add("new-todo-li");const t=document.createElement("h2");t.classList.add("new-todo-h2"),t.innerText="Add a new Todo";const n=document.createElement("div");return n.classList.add("hidden"),n.classList.add("new-todo"),n.innerHTML='<label for="title">Title</label>\n  <input id="title" name="title" class="new-todo-input" type="text" placeholder="TODO" />\n  <label for="desc">Description</label>\n  <textarea id="desc" name="desc"  placeholder="Go to this place and take part in this activity" class="new-todo-input"></textarea>\n  <label for="duedate">Due Date</label>\n  <input id="duedate" name="input" type="text" placeholder="MM/DD/YYYY" class="new-todo-input">\n  <label for="priority">Priority</label>\n  <input id="priority" name="priority" type="text" placeholder="Low / Medium / High" class="new-todo-input">\n  <input class="add-new-todo" type="submit" value="Submit" />',e.appendChild(t),e.appendChild(n),e}},function(e,t,n){const o=n(5);e.exports=function(e){let t=o(e.priority),n=e.desc,d=document.createElement("div");d.classList.add("expand"),d.classList.add("hidden");let r=document.createElement("p"),i=document.createElement("desc"),l=document.createElement("button");return l.classList.add("complete-todo"),r.innerText=`Priority - ${t}`,i.innerText=`${n}`,l.innerText="Complete?",d.appendChild(r),d.appendChild(i),d.appendChild(l),d}}]);