let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");

let BookList =  [
    {
        "title": "Amogus - The Book of Amogus",
        "author": "John Doe",
        "pages": "666",
        "src": "./Books/Tutorial/Shelf.html"    
    },
    {
        "title": "Harry Potter and the Sorcerer's Stone",
        "author": "J.K. Rowling",
        "pages": "0987",
        "src": "./Books/Tutorial/TestBook.html"
    }
]

let AmogusBook = CloneBook.cloneNode(true);
AmogusBook.setAttribute("href", BookList[0].src);
Shelf2.appendChild(AmogusBook);
AmogusBook.firstChild.firstChild.innerText = BookList[0].title;
AmogusBook.firstChild.lastChild.innerText = BookList[0].author;

let Newbook = CloneBook.cloneNode(true);
Newbook.setAttribute("href", BookList[1].src);
Shelf2.appendChild(Newbook);
Newbook.firstChild.firstChild.innerText = BookList[1].title;
Newbook.firstChild.lastChild.innerText = BookList[1].author;
