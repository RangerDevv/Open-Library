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

previous.addEventListener("click", function () {
    if (currentshelf == 1) {
        console.log("You are on the first shelf");
    }
     else if (currentshelf == 2) {
        Bookshelf1.style.display = "block";
        Bookshelf2.style.display = "none";
        currentshelf = 1;
        current.innerText = "Current Shelf: 1";
    }
});

next.addEventListener("click", function () {
    if (currentshelf == 1) {
        Bookshelf1.style.display = "none";
        Bookshelf2.style.display = "block";
        currentshelf = 2;
        current.innerText = "Shelf 2";
    }
    else if (currentshelf == 2) {
        console.log("You are on the last shelf");
        current.innerText = "Shelf 2";
    }
});
