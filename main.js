let allElement = (document.querySelectorAll);
let header = document.getElementById('page-header');
header.textContent = "New DOM Layout";


let para1 = document.getElementById('para1');
para1.textContent = 'The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure'

let para2 = document.getElementById('para2');
para2.textContent = 'The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.'

let para4 = document.getElementById("para4");

 
let addButton = document.getElementById("btn");

addButton.addEventListener('click', () => {
    return para4.textContent = 'The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.'
})

document.getElementById("red").className = "bg-danger";


document.getElementById("blue").className = "bg-primary";

document.getElementById("yellow").className = "bg-warning";

document.getElementById("green").className = "bg-success";

document.getElementById("black").className = "bg-dark";


