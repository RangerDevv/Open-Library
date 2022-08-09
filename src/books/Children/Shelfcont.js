let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");
let Shelf3 = document.getElementById("Shelf3");

let BookList =  [
    {
        "title": "American Fairytale",
        "author": " L. Frank Baum",
        "src": "./Books/American_Fairy_Tales/Bookinfo.html"
    }
]

let AmericanFairyTale = CloneBook.cloneNode(true);
AmericanFairyTale.setAttribute("href", BookList[0].src);
Shelf1.appendChild(AmericanFairyTale);
AmericanFairyTale.firstChild.firstChild.innerText = BookList[0].title;
AmericanFairyTale.firstChild.lastChild.innerText = BookList[0].author;