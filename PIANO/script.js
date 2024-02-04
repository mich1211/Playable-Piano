const PianoKeys = document.querySelectorAll(".Piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

const allKeys = [];
const audioFiles = {
    c: new Audio("tunes/tunes/c.wav"),
    wSharp: new Audio("tunes/tunes/w#.wav"),
    d: new Audio("tunes/tunes/d.wav"),
    eSharp: new Audio("tunes/tunes/e#.wav"),
    e: new Audio("tunes/tunes/e.wav"),
    f: new Audio("tunes/tunes/f.wav"),
    tSharp: new Audio("tunes/tunes/t#.wav"),
    g: new Audio("tunes/tunes/g.wav"),
    ySharp: new Audio("tunes/tunes/y#.wav"),
    a: new Audio("tunes/tunes/a.wav"),
    uSharp: new Audio("tunes/tunes/u#.wav"),
    b: new Audio("tunes/tunes/b.wav"),
    cDot: new Audio("tunes/tunes/c..wav"),
    oSharp: new Audio("tunes/tunes/o#.wav"),
    dDot: new Audio("tunes/tunes/d..wav"),
    pSharp: new Audio("tunes/tunes/p#.wav"),
    eDot: new Audio("tunes/tunes/e..wav"),
};

const playTune = (key) => {
   const audio =audioFiles[key];
   audio.currentTime = 0; 
    audio.play(); 

    const clickedKey = document.querySelector(`[data-key="${key}"]`); 
    clickedKey.classList.add("active");

    setTimeout(() => { 
        clickedKey.classList.remove("active");
    }, 150);
}

PianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); 
    key.addEventListener("click", () => playTune(key.dataset.key));
});

const handleVolume = (e) => {
    const volume = e.target.value;
    Object.values(audioFiles).forEach(audio => {
        audio.volume = volume;
    });
}

const showHideKeys = () => {
    PianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);