!function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t,o){const r=o(2);e.exports={folders:[{name:"default",todos:[{title:"Take out trash",desc:"Remove trash from every room and bring outside",dueDate:"09/14/2019",priority:"high",folder:"default",isComplete:!1},{title:"Walk dog",desc:"Get Sophie walkin' and poopin'",dueDate:"09/20/2019",priority:"high",folder:"default",isComplete:!1},{title:"Meal prep",desc:"Lunches need to be made for the week",dueDate:"09/10/2019",priority:"medium",folder:"default",isComplete:!1}],id:r()},{name:"javascript",todos:[{title:"TODOs App",desc:"Complete the TODO App",dueDate:"10/01/2019",priority:"medium",folder:"javascript",isComplete:!1},{title:"Work on Algorithms",desc:"Algorithms need to be completed by interviews",dueDate:"12/30/2019",priority:"low",folder:"javascript",isComplete:!1},{title:"Weather App",desc:"Begin work on the weather app using React and APIs",dueDate:"11/01/2019",priority:"low",folder:"javascript",isComplete:!1}],id:r()},{name:"ruby",todos:[{title:"Pick up syntax",desc:"Syntax should be similar to Javascript. Take a look and learn a little",dueDate:"10/31/2019",priority:"low",folder:"ruby",isComplete:!1},{title:"Ruby on Rails",desc:"Practice a Rails app",dueDate:"11/01/2019",priority:"low",folder:"ruby",isComplete:!1}],id:r()}],folder:null,todos:[],todo:null}},function(e,t,o){const r=o(4),n=o(0).folders;e.exports={getTodos:function(e){return e.todos},getTodo:function(e,t){let o=e.todos;for(let e=0;e<o.length;e++)if(o[e].id===t)return o[e];return"No todo found"},addTodo:function(e,t,o,i,d="default"){let l,s=new r(e,t,o,i,d);for(let e=0;e<n.length;e++)n[e].name===d&&(l=n[e]);return l.todos.push(s),l},deleteTodo(e,t){let o,r=e.todos;for(let e=0;e<r.length;e++)r[e].id===t&&(o=r.indexOf(r[e]));return o&&r.splice(o,1),r}}},function(e,t,o){var r=o(8),n=o(9);e.exports=function(e,t,o){var i=t&&o||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var d=(e=e||{}).random||(e.rng||r)();if(d[6]=15&d[6]|64,d[8]=63&d[8]|128,t)for(var l=0;l<16;++l)t[i+l]=d[l];return t||n(d)}},function(e,t,o){const r=o(5),n=o(0).folders;e.exports={getFolder:function(e){for(let t=0;t<n.length;t++)if(n[t].id===e)return n[t];return"No folder found"},addFolder:function(e){const t=new r(e);return n.push(t),n},removeFolder:function(e,t){let o;for(let r=0;r<e.length;r++)e[r].id===t&&(o=e.indexOf(e[r]));return void 0!==o&&e.splice(o,1),e}}},function(e,t,o){const r=o(2);e.exports=class{constructor(e,t,o,n,i="default",d=!1){this.title=e,this.desc=t,this.dueDate=o,this.priority=n,this.isComplete=d,this.folder=i,this.id=r()}todoMethod(){console.log("Hi from Todo")}get title(){return this._title}set title(e){this._title=e}get desc(){return this._desc}set desc(e){this._desc=e}get dueDate(){return this.dueDate}set dueDate(e){this._dueDate=e}get priority(){return this._priority}set priority(e){this._priority=e}get isComplete(){return this._isComplete}set isComplete(e){this._isComplete=e}get folder(){return this._folder}set folder(e){this._folder=e}}},function(e,t,o){const r=o(2);e.exports=class{constructor(e){this.name=e,this.todos=[],this.id=r()}getTodos(){return this.todos}addTodo(e){this.todos.push(e)}getId(){return this.id}get name(){return this._name}set name(e){this._name=e}}},function(e,t,o){const r=document.querySelector(".content"),n=o(0).folders,i=o(10),d=o(11);e.exports={displayFolder:function(e){d(r),n.map(e=>{r.appendChild(i(e))});for(let t=0;t<n.length;t++)n[t].name===e&&(d(r),r.appendChild(i(n[t])))}}},function(e,t,o){const r=o(0).folders;o(0).folder;o(4),o(5),o(3).getFolder;const n=o(3).addFolder,i=(o(3).removeFolder,o(1).addTodo,o(1).getTodos,o(1).getTodo,o(1).deleteTodo,o(12).displayNav),d=o(6).displayFolder;document.querySelectorAll(".todo").forEach(e=>{e.addEventListener("click",(function(){console.log("I feel you")}))});const l=document.querySelector("#new-folder-input");document.querySelector("#new-folder-submit").addEventListener("click",(function(){r.length<5?n(l.value):alert("Too many folders, please delete one"),i(),d(),l.value=""})),document.querySelector("#test").addEventListener("click",(function(e){})),document.querySelectorAll(".folder").forEach(e=>{e.addEventListener("click",(function(e){let t=e.target.innerText.toLowerCase();d(t)}))}),window.onload=function(){i(),d()}},function(e,t){var o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(o){var r=new Uint8Array(16);e.exports=function(){return o(r),r}}else{var n=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),n[t]=e>>>((3&t)<<3)&255;return n}}},function(e,t){for(var o=[],r=0;r<256;++r)o[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,n=o;return[n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],"-",n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]],n[e[r++]]].join("")}},function(e,t){e.exports=function(e){let t=document.createElement("ul");t.classList.add("todos");let o=document.createElement("li");return o.classList.add("project-title"),o.innerHTML=`<h1>${e.name}</h1>`,t.appendChild(o),e.todos.forEach(e=>{let o=document.createElement("li");o.classList.add(`${e.priority}`);let r=document.createElement("div"),n=document.createElement("div");r.classList.add("task"),n.classList.add("due-date"),r.innerText=e.title,n.innerText=e.dueDate,o.appendChild(r),o.appendChild(n),t.appendChild(o)}),t}},function(e,t){e.exports=function(e){for(;e.firstChild;)e.removeChild(e.firstChild)}},function(e,t,o){const r=document.querySelector(".nav"),n=o(0).folders,i=o(11);e.exports={displayNav:function(){i(r);const e=document.createElement("li");e.setAttribute("id","all"),e.classList.add("folder"),e.innerText="show all folders",r.appendChild(e);for(let e=0;e<n.length;e++){let t=n[e].name,o=document.createElement("li");o.setAttribute("id",t),o.classList.add("folder"),o.innerText=t,r.appendChild(o)}}}}]);