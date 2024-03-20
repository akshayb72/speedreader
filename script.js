console.log("Happy Testing");
console.log("Happy Hunting");
let mode = false;
const text = document.getElementById('text');
let time = 60000;
let wpm = 120;

let index = 0; 
let paused = false;


function lightMode() 
{
const toggle = document.getElementById('toggleMode');

toggle.innerHTML = '';
const sun = `  <svg width="30" height="30" style ="color:black;">
<circle cx="15" cy="15" r="6" fill="currentColor" />

<line
  id="ray"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  x1="15"
  y1="1"
  x2="15"
  y2="4"
></line>

<use href="#ray" transform="rotate(45 15 15)" />
<use href="#ray" transform="rotate(90 15 15)" />
<use href="#ray" transform="rotate(135 15 15)" />
<use href="#ray" transform="rotate(180 15 15)" />
<use href="#ray" transform="rotate(225 15 15)" />
<use href="#ray" transform="rotate(270 15 15)" />
<use href="#ray" transform="rotate(315 15 15)" />
</svg> `;

toggle.insertAdjacentHTML('beforeend',sun);

}

function setInitialImage() {
    const body = document.body;
    const computedStyle = window.getComputedStyle(body);
    const backgroundColor = computedStyle.backgroundColor;

    const toggle = document.getElementById('toggleMode');


    // Check if the default background color is black or white
    if (backgroundColor === "rgb(0, 0, 0)") { // Black background
        lightMode();
    } else {
        darkMode();
    }
}
window.onload = setInitialImage;

function toggleDarkmode() {
    var toggleButton = document.getElementById('toggleMode');

    const body = document.getElementById('bodyMode');

    const computedStyle = window.getComputedStyle(body);
    const backgroundColor = computedStyle.backgroundColor;

    if(backgroundColor === "rgb(0, 0, 0)")
    {
        mode = true;
    }
    else
    {
        mode = false;
        
    }

    if (mode ===false)
    {
        body.style.backgroundColor = "#000000" //Black background
        body.style.color = "#ffffff" // white text
        mode = true;
        lightMode();
    }
    else if(mode === true)
    {
        body.style.backgroundColor = "#ffffff" // white background
        body.style.color = "#000000" // black text

        mode = false;
        darkMode();
    }
}


function darkMode()
{
    const toggle = document.getElementById('toggleMode');

    toggle.innerHTML = '';
    moon=`        <svg width="30" height="30" style="">
    <path
      fill="currentColor"
      d="
        M 23, 5
        A 12 12 0 1 0 23, 25
        A 12 12 0 0 1 23, 5"
    />
  </svg>
 `;
    toggle.insertAdjacentHTML('beforeend',moon);

}

function getWPMvalue(event)

{
event.preventDefault();

}

function togglePause() {
    paused = !paused; // Toggle pause state
}

function readPrompt() {

    const textArea = document.getElementById("areaText");
    const text = textArea.value.split(/\s+/);

    const paragraph = document.getElementById("text"); 

    function writeWord() {
        if (index < text.length) {
            const word = text[index];
            const span = document.createElement("span");
            span.textContent = word;

            paragraph.textContent = '';

            paragraph.appendChild(span);

            index++; 

            setTimeout(writeWord, 60000/wpm); 
        }
    }
    //console.log("wpm",wpm);
    writeWord();
}
