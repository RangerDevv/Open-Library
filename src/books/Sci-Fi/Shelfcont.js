let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");
let Shelf3 = document.getElementById("Shelf3");

let BookList =  [
    {
        "title": "The Time Machine",
        "author": "H. G. Wells",
        "src": "./Books/The_Time_Machine/Bookinfo.html"
    },
    {
        "title": "The War of the Worlds",
        "author": "H. G. Wells",
        "src": "./Books/The_War_Of_The_Worlds/Bookinfo.html" 
    }
]

let THe_Time_Machine = CloneBook.cloneNode(true);
THe_Time_Machine.setAttribute("href", BookList[0].src);
Shelf1.appendChild(THe_Time_Machine);
THe_Time_Machine.firstChild.firstChild.innerText = BookList[0].title;
THe_Time_Machine.firstChild.lastChild.innerText = BookList[0].author;

let The_War_Of_the_worlds = CloneBook.cloneNode(true);
The_War_Of_the_worlds.setAttribute("href", BookList[1].src);
Shelf1.appendChild(The_War_Of_the_worlds);
The_War_Of_the_worlds.firstChild.firstChild.innerText = BookList[1].title;
The_War_Of_the_worlds.firstChild.lastChild.innerText = BookList[1].author;