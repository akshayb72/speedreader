console.log("Happy Testing");
console.log("Happy Hunting");
let mode = false;
const text = document.getElementById('text');
let time = 60000;
let wpm = 100;

let temp = 0;
let index = 0; 
let interval;

document.getElementById("numField").value = 120;
document.getElementById("indexIn").value = 0;

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

function startReading() 
{
    var text = document.getElementById("areaText").value.trim(); 
    var words = text.split(/\s+/); 
    var wpm = parseInt(document.getElementById("numField").value); 
    var delay = 60000 / wpm; 
    
    //console.log(wpm);

    interval = setInterval(function() {
        if (index < words.length) {
            //one word at a time
           document.getElementById("text").textContent=words[index];


            index++;  

            document.getElementById("indexCurrent").textContent=index;
            document.getElementById("indexIn").value=index;
            // two words at a time 
           //document.getElementById("text").textContent = words[index]+" "+words[index+1];
           //index+=2; 
           //console.log(index);
        } 
        else if(index >= words.length){
            clearInterval(interval);
            index=0;
            document.getElementById("text").textContent ="Start Reading";
        }
    }, delay);
}

function togglePause() 
{

    if (interval) {
        clearInterval(interval);
        interval = null; 
        document.getElementById("pause").textContent = "Resume"; 
    }

    else {
        startReading(); 
        document.getElementById("pause").textContent = "Pause"; 
    }

}

function stopReading() 
{

    clearInterval(interval); 
    index = 0; 
    document.getElementById("text").textContent = "Start Reading"; 
    document.getElementById("pause").textContent = "Pause"; 

}

// Text Index and position changing

function goTo()
{
    index = document.getElementById("indexIn").value;
    document.getElementById.value =index;
//    console.log(index);
    clearInterval(interval);
    interval=null;
    if(document.getElementById("pause").textContent === "Resume")
    {
        document.getElementById("pause").textContent = "Pause";
        startReading();     

    }
    else if( document.getElementById("pause").textContent === "Pause")
    {
        startReading();    
    }
    else
    {

    }
}
