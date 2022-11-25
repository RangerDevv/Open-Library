let CloneBook = document.getElementById("TestBook");
let Shelf1 = document.getElementById("Shelf1");
let Shelf2 = document.getElementById("Shelf2");
let Shelf3 = document.getElementById("Shelf3");

let BookList =  [
]


let i = 0;

while (i < BookList.length) {
    let newbook = CloneBook.cloneNode(true);
    newbook.setAttribute("href", BookList[i].src);
    BookList[i].shelf.appendChild(newbook);
    newbook.firstChild.firstChild.innerText = BookList[i].title;
    newbook.firstChild.lastChild.innerText = BookList[i].author;
    i++;
}