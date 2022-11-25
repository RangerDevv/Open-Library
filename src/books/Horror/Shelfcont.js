let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");
let Shelf3 = document.getElementById("Shelf3");

let BookList =  [
    {
        "title": "Metamor\nphosis",
        "author": "Franz Kafka",
        "src": "./Books/Metamorphosis/Bookinfo.html",
        "shelf": Shelf1
    },
    {
        "title": "THE VAMPYRE",
        "author": "John William Polidori",
        "src": "./Books/The_Vampyre/Bookinfo.html",
        "shelf" :Shelf2
    }
]

// let Metamorphosis = CloneBook.cloneNode(true);
// Metamorphosis.setAttribute("href", BookList[0].src);
// Shelf1.appendChild(Metamorphosis);
// Metamorphosis.firstChild.firstChild.innerText = BookList[0].title;
// Metamorphosis.firstChild.lastChild.innerText = BookList[0].author;

// let The_Vampyre = CloneBook.cloneNode(true);
// The_Vampyre.setAttribute("href", BookList[1].src);
// Shelf1.appendChild(The_Vampyre);
// The_Vampyre.firstChild.firstChild.innerText = BookList[1].title;
// The_Vampyre.firstChild.lastChild.innerText = BookList[1].author;


let i = 0;

while (i < BookList.length) {
    let newbook = CloneBook.cloneNode(true);
    newbook.setAttribute("href", BookList[i].src);
    BookList[i].shelf.appendChild(newbook);
    newbook.firstChild.firstChild.innerText = BookList[i].title;
    newbook.firstChild.lastChild.innerText = BookList[i].author;
    i++;
}