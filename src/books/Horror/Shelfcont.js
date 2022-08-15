let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");
let Shelf3 = document.getElementById("Shelf3");

let BookList =  [
    {
        "title": "Metamor\nphosis",
        "author": "Franz Kafka",
        "src": "./Books/Metamorphosis/Bookinfo.html"
    }
]

let Metamorphosis = CloneBook.cloneNode(true);
Metamorphosis.setAttribute("href", BookList[0].src);
Shelf1.appendChild(Metamorphosis);
Metamorphosis.firstChild.firstChild.innerText = BookList[0].title;
Metamorphosis.firstChild.lastChild.innerText = BookList[0].author;