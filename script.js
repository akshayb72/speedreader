console.log("Happy Testing");
console.log("Happy Hunting");
let mode = false;
const text = document.getElementById('text');
let time = 60000;
let wpm = 100;

let temp = 0;
let index = 0; 
let interval;

var wordLen = 0;
var timeTaken = 0 ;

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
    wordLen = words.length;
    document.getElementById("wordCount").textContent = wordLen;   
    timeTaken = wordLen/wpm;
    document.getElementById("min").textContent=timeTaken.toFixed(2);
    //console.log(wpm);

    interval = setInterval(function() {
        if (index < words.length) {
            //one word at a time
            if(words[index].length < 5 && typeof words[index+1] !=='undefined') //replace word with min word length and may be  add max word length
            {
                document.getElementById("text").textContent = words[index]+" "+words[index+1];
                index = index + 2; 
                document.getElementById("indexCurrent").textContent=index;
                document.getElementById("indexIn").value=index;
                document.getElementById("progress").textContent = index+"/"+wordLen;
            }
            
            else
            {
                document.getElementById("text").textContent = words[index];
                index++; 
                document.getElementById("indexCurrent").textContent=index;
                document.getElementById("indexIn").value=index;
                document.getElementById("progress").textContent = index+"/"+wordLen;
            }
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


// Total Time Taken

function stopTimer() {
    clearInterval(timerInterval);
  }

function startTimer() {
    startTime = Date.now();

    timerInterval = setInterval(updateTimer, 1000);
  }

  function updateTimer() {
    let elapsedTime = Date.now() - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    document.getElementById('timer').textContent = `${hours}:${minutes}:${seconds}`;
  }


function f2Pause(event)
{
  if(event.key === 'F2')
    {
        togglePause();
    }
    else
    {
    }
}
document.addEventListener('keydown',f2Pause);
