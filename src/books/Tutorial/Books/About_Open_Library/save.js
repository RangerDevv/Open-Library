import { localStorage } from '../../../../../node_modules/electron-browser-storage/index.js';
let Notebtn = document.getElementById("Notebtn");
let Noteinput = document.getElementById("Noteinput");
let Noteclose = document.getElementById("Noteclose");
let Notes = document.getElementById("Notes");
let Opened = false;

window.onload = function() {
    // make the window fullscreen
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
};
Notebtn.addEventListener('click',function(){
    if(Opened){
        Notes.classList.add('hidden');
        Opened = false;
        // Load the contents of Notes.txt into the textarea
        app.on('ready', async () => {
            let data = await localStorage.get('Notes');
            Noteinput.innerText = data;
        });

    }else{
        Notes.classList.remove('hidden');
        Opened = true;
        // Save the contents of the textarea to Notes.txt persistently
        app.on('ready', async () => {
            await localStorage.set('Notes', Noteinput.innerText);
        });
    }
});