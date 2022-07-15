let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");
let Shelf3 = document.getElementById("Shelf3");

let BookList =  [
    {
        "title": "About Open Library",
        "author": "John Doe",
        "pages": "666",
        "src": "./Books/About_Open_Library/Bookinfo.html",   
    },
    {
        "title": "Another Tutorial",
        "author": "John Doe",
        "pages": "666",
        "src": "./Books/Tutorial/TestBook.html"
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "pages": "0987",
        "src": "./Books/Tutorial/TestBook.html"
    }
]

let TutorialBook = CloneBook.cloneNode(true);
TutorialBook.setAttribute("href", BookList[0].src);
Shelf3.appendChild(TutorialBook);
TutorialBook.firstChild.firstChild.innerText = BookList[0].title;
TutorialBook.firstChild.lastChild.innerText = BookList[0].author;
TutorialBook.firstChild.classList.remove("h-28");
TutorialBook.firstChild.classList.add("h-32");

let AnotherBook = CloneBook.cloneNode(true);
AnotherBook.setAttribute("href", BookList[1].src);
Shelf2.appendChild(AnotherBook);
AnotherBook.firstChild.firstChild.innerText = BookList[1].title;
AnotherBook.firstChild.lastChild.innerText = BookList[1].author;

let HarryBook = CloneBook.cloneNode(true);
HarryBook.setAttribute("href", BookList[2].src);
Shelf1.appendChild(HarryBook);
HarryBook.firstChild.firstChild.innerText = BookList[2].title;
HarryBook.firstChild.lastChild.innerText = BookList[2].author;
HarryBook.firstChild.classList.remove("h-28");
HarryBook.firstChild.classList.add("h-32");