const { app } = require("electron")

//get the open and close buttons
const OpenMenu = document.getElementById("OpenMenu")
const CloseMenu = document.getElementById("CloseMenu")
//Menu and Background Shadow
const Menu = document.getElementById("Menu")
const Shadow = document.getElementById("Shadow")
// Get all the buttons
const Leave = document.getElementById("Leave")

window.onload = function() {

    Menu.style.display = "none"
    Shadow.style.display = "none"

}

OpenMenu.onclick = function(){

Menu.style.display = "block"
Shadow.style.display = "block"

}

CloseMenu.onclick = function(){

    Menu.style.display = "none"
    Shadow.style.display = "none"
    
}

// Button functions

Leave.onclick = function(){

    window.close()

}

