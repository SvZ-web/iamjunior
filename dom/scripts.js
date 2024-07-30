 
/*pirma uzduotis*/
/*{const elementById = document.getElementById('tekstas')
tekstas.style.color = 'green';}

{const elementByQuerySelector = document.querySelector('container')
container.style.width = '200px';
container.style.height = '400px';
container.style.backgroundColor = 'lightgrey';}

{const elementById = document.getElementById('antraste');
antraste.style.fontSize = '12px';}*/


/*antra uzduotis*/

/*{const container = document.getElementById ('container');
    const newElement = document.createElement ('p');
    newElement.textContent = 'naujas sakinys';
    container.appendChild(newElement);}

{const contentDiv = document.getElementById ('container');
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = 'kasdien sekasi vis geriau';
    const oldParagraph = document.getElementById ('tekstas');
    contentDiv.replaceChild (newParagraph, oldParagraph);
}*/

/*trecia uzduotis*/

{const contentDiv = document.getElementById ('container');
    const newParagraph = document.createElement ('p');
    newParagraph.textContent = 'Tekstas pasikeite!';
    const oldParagraph = document.getElementById ('text');
    contentDiv.replaceChild (newParagraph, oldParagraph)}

{const container = document.getElementById ('parentDiv');
const newElement = document.createElement ('span');
newElement.textContent = 'Child Text';
const oldElement = document.getElementById ('childText');
parentDiv.replaceChild(newElement, oldElement);}

{const elementById = document.getElementById('box')
    box.style.backgroundColor = 'green';}

 let changeText = true;
 let replaceChild = true;
 let changeColor = true;
 
 if (changeText === true && replaceChild === true && changeColor === true)
 {const elementById = document.getElementById ('statu');
    statu.innerText = 'Complete';
    statu.style.color = 'green';}
 else {console.log  ("Incomplete");}
