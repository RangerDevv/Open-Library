let dropdownbtn = document.getElementById("dropdownbtn");
let dropdown = document.getElementById("Dropdown");
let showing = false;
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let current = document.getElementById("currshelf");
let currentshelf = 1;
let Bookshelf1 = document.getElementById("Bookshelf1");
let Bookshelf2 = document.getElementById("Bookshelf2");

if (dropdownbtn) {
    dropdownbtn.addEventListener("click", function () {
        if (showing) {
            dropdown.style.display = "none";
            showing = false;
            dropdownbtn.firstChild.innerText = "Go to 📚";
            previous.style.display = "block";
            next.style.display = "block";
            current.style.display = "block";
        } else {
            dropdown.style.display = "block";
            showing = true;
            dropdownbtn.firstChild.innerText = "Close ❌";
            previous.style.display = "none";
            next.style.display = "none";
            current.style.display = "none";
        }
    });
}