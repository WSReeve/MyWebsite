
function chooseRandom(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const choice = arr[random];
    return choice;
}

let audio;
const sounds = ["ahooga-horn.mp3","airplane-ding-dong-sound-effect.mp3","answering-machine-beep-sound-effect.mp3","boing-sound-effect.mp3","Cow-moo-sound.mp3","ding-noise-sound-effect.mp3","Ding-sound-effect.mp3","doorbell-ding-dong-sound-effect.mp3","Duck-quack.mp3","fortnite-death-sound.mp3","grindr-notification-sound.mp3","Human Male Fart Short.mp3"];
function playSound() {
    const soundChoice = chooseRandom(sounds);
    audio = new Audio("assets/sounds"+ soundChoice);
    audio.play();
}

const colors = ["red","green","blue","yellow","purple","pink"];
const list = document.querySelectorAll(".color");
function colorChanger() {
    for(const item of list) {
        let newId = chooseRandom(colors);
        item.id = newId;
    }
}