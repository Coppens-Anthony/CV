const placeholderTextInput = "anthonycoppens04@gmail.com";
const placeholderTextTextarea = "Je vous contacte afin de...";
const input = document.getElementById("email");
const textarea = document.getElementById("message");
let indexInput = 0;
let indexTextarea = 0;
let typingIntervalInput;
let typingIntervalTextarea;

function typePlaceholderInput() {
    if (indexInput === 0) input.placeholder = "";

    if (indexInput < placeholderTextInput.length) {
        input.placeholder += placeholderTextInput.charAt(indexInput);
        indexInput++;
    } else {
        clearInterval(typingIntervalInput);
        setTimeout(startTypingInput, 1500);
        indexInput = 0;
    }
}
function typePlaceholderTextarea() {
    if (indexTextarea === 0) textarea.placeholder = "";

    if (indexTextarea < placeholderTextTextarea.length) {
        textarea.placeholder += placeholderTextTextarea.charAt(indexTextarea);
        indexTextarea++;
    } else {
        clearInterval(typingIntervalTextarea);
        setTimeout(startTypingTextarea, 1500);
        indexTextarea = 0;
    }
}

function startTypingInput() {
    typingIntervalInput = setInterval(typePlaceholderInput, 200);
}
function startTypingTextarea() {
    typingIntervalTextarea = setInterval(typePlaceholderTextarea, 200);
}

function stopTypingInput() {
    clearInterval(typingIntervalInput);
    input.placeholder = placeholderTextInput;
    indexInput = 0;
}


function stopTypingTextarea() {
    clearInterval(typingIntervalTextarea);
    textarea.placeholder = placeholderTextTextarea;
    indexTextarea = 0;
}

input.addEventListener("blur", startTypingInput);
textarea.addEventListener("blur", startTypingTextarea);

input.addEventListener("focus", stopTypingInput);
textarea.addEventListener("focus", stopTypingTextarea);

window.addEventListener("load", () => {
    startTypingInput();
    startTypingTextarea();
});






