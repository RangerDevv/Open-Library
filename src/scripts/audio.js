let SongList = [
    {
        "name": "SFRecords - Summer Lofi ",
        "src": "../../../../assets/music/tunetank.com_3743_5-am_by_danyvin.mp3",
        "volume": 0.5
    },
    {
        "name": "SFRecords - Summer Lofi ",
        "src": "../../../../assets/music/tunetank.com_4043_summer-lofi_by_sfrecords.mp3",
        "volume": 0.5
    }
];

let currentSong = 0;
let audio = document.getElementById("audio");
let Song = SongList[currentSong].src;
let playButton = document.getElementById("Playpause");
let Previous = document.getElementById("Previous");
let Next = document.getElementById("Next");
let Volume = document.getElementById("Volume");
let VolumeSlider = document.getElementById("VolumeSlider");
let playing = false;

playButton.onclick =  function PlayMusic() {
    if (playing==false) {
        // make the audio play from the SongList array
        audio.src = SongList[currentSong].src;
        audio.volume = SongList[currentSong].volume;
        audio.play();
        playButton.lastChild.src = "../../../../assets/images/Pause.svg";
        playing = true;
    } else {
        audio.pause();
        playButton.firstChild.src = "../../../../assets/images/Play.svg";
        playing = false;
    }
}

audio.onended = function NextSong() {
    currentSong++;
    if (currentSong >= SongList.length) {
        currentSong = 0;
    }
    audio.src = SongList[currentSong].src;
    audio.volume = SongList[currentSong].volume;
    audio.play();
}

Previous.onclick = function PreviousSong() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = SongList.length - 1;
    }
    audio.src = SongList[currentSong].src;
    audio.volume = SongList[currentSong].volume;
    audio.play();
}

Next.onclick = function NextSong() {
    currentSong++;
    if (currentSong >= SongList.length) {
        currentSong = 0;
    }
    audio.src = SongList[currentSong].src;
    audio.volume = SongList[currentSong].volume;
    audio.play();
}