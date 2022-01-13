
function chooseRandom(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const choice = arr[random];
    return choice;
}

let audio;
const sounds = ["ahooga-horn.mp3","airplane-ding-dong-sound-effect.mp3","answering-machine-beep-sound-effect.mp3","boing-sound-effect.mp3","Cow-moo-sound.mp3","ding-noise-sound-effect.mp3","Ding-sound-effect.mp3","doorbell-ding-dong-sound-effect.mp3","Duck-quack.mp3","fortnite-death-sound.mp3","grindr-notification-sound.mp3","Human Male Fart Short.mp3"];
function playSound() {
    const soundChoice = chooseRandom(sounds);
    audio = new Audio("assets/sounds/"+ soundChoice);
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

const dataMat = [];


async function populatePage(csvfile) {
    await readCSV(csvfile);
    console.log(dataMat);
    dataMat.forEach(async month => {
        const parent = document.querySelector("ol");
        await createList(month, parent);
        for (i = 2; i < month.length; i++) {
            const file = month[i];
            await createHTML(csvfile, file, month);
            console.log('add file here');
        }
        console.log('populated');   
    });
}

async function readCSV(csvfile) {
    const response = await fetch(csvfile);
    const data = await response.text();

    const table = data.split('\n');
    table.pop();
    table.forEach(row => {
        const columns = row.split(',');
        dataMat.push(columns);
    });
    console.log("read");
}

async function createList(row, pElement) {
    const month = document.createElement("li");
    const date = row[1] + '/' + row[0];
    //month.innerHTML = date;
    month.className = 'folder d' + row[0] + '-' + row[1];

    pElement.appendChild(month);
}

async function createHTML(csvfile, column, row) {
    const folder = csvfile.split("_", 1);
    let entry;
    let element;
    let pname;
    switch(folder[0]) {
        case "art":
            element = document.createElement("img");
            element.src = "assets/art/" + row[0] + "/" + row[1] + "/" + column;
            element.className = 'image';
            break;

        case "notes":
            pname = column.split(".")
            element = document.createElement("li");
            element.class = "entry";
        
            entry = document.createElement("a");
            entry.href = "assets/notes/" + row[0] + "/" + row[1] + "/" + column;
            entry.innerText = pname[0] + "/" + pname[1] + "/" + pname[2] + " " + pname[4] + "" + pname[3] + ": " + pname[5]
            entry.className = 'note';

            element.appendChild(entry);
            break;

        case "photos":
            element = document.createElement("img");
            element.src = "assets/photos/" + row[0] + "/" + row[1] + "/" + column;
            element.className = 'image';
            break;

        case "music":
            pname = column.split(".")
            element = document.createElement("li");
            element.class = "entry";
        
            entry = document.createElement("a");
            entry.href = "assets/music/" + row[0] + "/" + row[1] + "/" + column;
            entry.innerText = pname[0] + "/" + pname[1] + "/" + pname[2] + " " + pname[4] + " " + pname[3] + " " + pname[5]
            entry.className = 'audio';

            element.appendChild(entry);
            break;
    }

    document.querySelector('.d' + row[0] + '-' + row[1]).appendChild(element);
}