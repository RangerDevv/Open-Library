let SongList = [
    {
        "name": "SFRecords - Summer Lofi ",
        "src": "../audio/tunetank.com_4043_summer-lofi_by_sfrecords.mp3",
        "volume": 0.5
    },
    {
        "name": "SFRecords - Summer Lofi ",
        "src": "../audio/tunetank.com_4043_summer-lofi_by_sfrecords.mp3",
        "volume": 0.5
    }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let playButton = document.getElementById("Playpause");
let Previous = document.getElementById("Previous");
let Next = document.getElementById("Next");
let Volume = document.getElementById("Volume");
let VolumeSlider = document.getElementById("VolumeSlider");
let playing = false;

playButton.onclick =  function PlayMusic() {
    if (playing==false) {
        audio.play();
        playButton.lastChild.src = "../../../../assets/images/Pause.svg";
        playing = true;
    } else {
        audio.pause();
        playButton.firstChild.src = "../../../../assets/images/Play.svg";
        playing = false;
    }
}