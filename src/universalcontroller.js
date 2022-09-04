
let dropdownbtn = document.getElementById("dropdownbtn");
let dropdown = document.getElementById("Dropdown");
let showing = false;
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let current = document.getElementById("currshelf");
let currentshelf = 1;
let Bookshelf1 = document.getElementById("Bookshelf1");
let Bookshelf2 = document.getElementById("Bookshelf2");
let Themebtn = document.getElementById("Themebtn");
let Book = document.getElementById("Book");
let changed = false;

if (dropdownbtn) {
    dropdownbtn.addEventListener("click", function () {
        if (showing) {
            dropdown.style.display = "none";
            showing = false;
            dropdownbtn.firstChild.innerText = "📖Books ↓";
        } else {
            dropdown.style.display = "block";
            showing = true;
            dropdownbtn.firstChild.innerText = "📖Books ↑";
        }
    });
}

Themebtn.addEventListener("click", function() {
    if (changed) {
        document.body.classList.remove("bg-slate-900");
        document.body.classList.add("bg-slate-200");
        Themebtn.innerHTML = "DARK";
        Book.classList.remove("text-white");
        Book.classList.add("text-black");
        changed = false;
    } else {
        document.body.classList.remove("bg-slate-200");
        document.body.classList.add("bg-slate-900");
        Themebtn.innerHTML = "LIGHT";
        Book.classList.remove("text-black");
        Book.classList.add("text-white");
        changed = true;
    }
});