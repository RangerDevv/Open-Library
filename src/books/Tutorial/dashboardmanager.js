let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");
let Shelf3 = document.getElementById("Shelf3");

let BookList =  [
    {
        "title": "About Open Library",
        "author": "John Doe",
        "pages": "666",
        "src": "./Books/Tutorial/TestBook.html"    
    }
]

let TutorialBook = CloneBook.cloneNode(true);
TutorialBook.setAttribute("href", BookList[0].src);
Shelf3.appendChild(TutorialBook);
TutorialBook.firstChild.lastChild.innerText = BookList[0].title;
