//childNodes: содержит коллекцию дочерних узлов

// firstChild: возвращает первый дочерний узел текущего узла

// lastChild: возвращает последний дочерний узел текущего узла

// previousSibling: возвращает предыдущий элемент, который находится на одном уровне с текущим

// nextSibling: возвращает следующий элемент, который находится на одном уровне с текущим

// ownerDocument: возвращает корневой узел документа

// parentNode: возвращает элемент, который содержит текущий узел

// nodeName: возвращает имя узла

// nodeType: возвращает тип узла в виде числа

// nodeValue: возвращает или устанавливает значение узла в виде простого текста
 var articleDiv = document.querySelector("div.article");
// var nodes = articleDiv.childNodes;
// console.log(nodes);
// for(var i=0; i<nodes.length;i++){
 
//     var type = "";
//     if(nodes[i].nodeType===1)
//         type="элемент";
//     else if(nodes[i].nodeType===2)
//         type="атрибут";
//     else if(nodes[i].nodeType===3)
//         type="текст";
//         else if(nodes[i].nodeType===8)
//         type="comment";
//     console.log(nodes[i].nodeName + ": " + type);
// }
////////////////////
//  var node = articleDiv.firstChild;
// console.log(node.nodeName);
// while((node=node.nextSibling)!==null){
 
//     console.log(node.nodeName);
// }
// let x=document.querySelector('.demo');
// console.log(x);
//////////////////////
// var node = articleDiv.lastChild;
// console.log(node.nodeName);
// // обращаемся к предыдующему узлу, пока он определен
// while((node=node.previousSibling)!==null){
 
//     console.log(node.nodeName);
// }
//createElement(elementName),createTextNode(text)
// var elem = document.createElement("h2");
// console.log( typeof elem);
// var elemText = document.createTextNode("Привет мир");
// // or elem.textContent = "Привет мир";
// elem.appendChild(elemText);
// //articleDiv.prepend(elem);//prepend
//var firstElem = articleDiv.firstChild.nextSibling;
// console.log(firstElem);
// elem.className='text';
// elem.className+=' text2';
// console.log();
//insertAdjacentHTML(position, text)    //https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// // добавляем элемент в блок div перед первым узлом
//articleDiv.insertBefore(elem, firstElem);
//////////clone
// var newArticleDiv = articleDiv.cloneNode(true);
// // // добавляем в конец элемента body
// document.body.appendChild(newArticleDiv);
// console.log(newArticleDiv);
// ////////////remove
// var removableNode = document.querySelectorAll(".article p");
// removableNode.removeAll();///?????

///////////replace
// var oldNode = document.querySelectorAll("div.article p")[0];
// // // создаем элемент
//  var newNode = document.createElement("h2");
// // // создаем для него текст
//  var elemText = document.createTextNode("Привет мир");
// // // добавляем текст в элемент в качестве дочернего элемента
// newNode.appendChild(elemText);
// // // заменяем старый узел новым
// articleDiv.replaceChild(newNode, oldNode);
/////////////tagName
// function getChildren(elem){
     
//     for(var i in elem.childNodes){
     
//         if(elem.childNodes[i].nodeType===1){
         
//             console.log(elem.childNodes[i].tagName);
//             getChildren(elem.childNodes[i]);
//         }
//     }
// }
// var root = document.documentElement;
// console.log(root.tagName);
// getChildren(root);
//////////////Attribute
// var articleDiv = document.querySelector("div.article");
// // получаем атрибут style
// var styleValue = articleDiv.getAttribute("style");
// console.log("До изменения атрибута: " + styleValue);
// // удаляем атрибут
// articleDiv.removeAttribute("style");
// // добавляем заново атрибут style
// articleDiv.setAttribute("style", "color:blue;");
// styleValue = articleDiv.getAttribute("style");
// console.log("После изменения атрибута: " + styleValue);
////////////////off
// var rect = document.getElementById("rect");
// console.log("offsetHeight: " + rect.offsetHeight);
// console.log("offsetWidth: " + rect.offsetWidth);
// console.log("clientHeight: " + rect.clientHeight);
// console.log("clientWidth: " + rect.clientWidth);///???????
////////////getBoundingClientRect().
var rect = document.getElementById("rect");
var clientRect  = rect.getBoundingClientRect();
console.log(clientRect);
clientRect.top=parseInt('50');
console.log(("top: " + clientRect.top));
console.log("bottom: " + clientRect.bottom);
console.log("left: " + clientRect.left);
console.log("right: " + clientRect.right);
//////////////////style class
// var articleDiv = document.querySelector("div.article");
// var root = document.documentElement;
// root.style.color = "blue";
// root.style.fontFamily = "Verdana";
	
// articleDiv.className = "";
// document.write(root.style.color);


// /////////////////
//articleDiv.classList.remove("article");
// // добавляем класс
// articleDiv.classList.add("blueStyle");
// // переключаем класс
// let but=document.querySelector('button');
// but.addEventListener('click',function(){
//     articleDiv.classList.toggle("article");
// })
