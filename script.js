console.log("Happy Testing");
console.log("Happy Hunting");
let mode = false;
const text = document.getElementById('text');
let time = 60000;
let wpm = 120;
function toggleDarkmode() {
    const body = document.getElementById('bodyMode');
    const toggleButton = document.getElementById('toggleMode');

    if (mode ===false)
    {
        body.style.backgroundColor = "#000000"
        body.style.color = "#ffffff"
        mode = true;
    }
    else if(mode === true)
    {
        body.style.backgroundColor = "#ffffff"
        body.style.color = "#000000"
        mode = false;
    }
}


function readPrompt(wpm) {
    let text = ["hi", "try","bye"];
    const paragraph = document.getElementById("text"); 

    let index = 0; 

    function writeWord() {
        if (index < text.length) {
            const word = text[index];
            const span = document.createElement("span");
            span.textContent = word;

            paragraph.textContent = '';

            paragraph.appendChild(span);

            index++; 

            setTimeout(writeWord, 60000/120); 
        }
    }

    writeWord();
}

