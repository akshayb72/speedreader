console.log("Happy Testing");
console.log("Happy Hunting");
let mode = false;
const textContainer = document.getElementById('text');

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

function readPrompt()
{
    let text = ["hi","bye"];

    text.forEach((word,index) => {
        const span = document.createElement('span');
        span.textContent = word + ' ';

        
    // Assign different colors based on index
    if (index % 2 === 0) {
        span.style.color = 'red';
    } else {
        span.style.color = 'red';
    }
    console.log(textContainer,span);
        textContainer.textContent(span);

    });
}
