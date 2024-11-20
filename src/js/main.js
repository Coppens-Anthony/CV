const placeholderTextInput = "anthonycoppens04@gmail.com";
const placeholderTextTextarea = "Je vous contacte afin de...";
const input = document.getElementById("email");
const textarea = document.getElementById("message");
let indexInput = 0;
let indexTextarea = 0;
let typingIntervalInput;
let typingIntervalTextarea;

// Fonction pour animer le placeholder de l'input
function typePlaceholderInput() {
    if (indexInput === 0) input.placeholder = ""; // Réinitialiser le placeholder au début de l'animation

    if (indexInput < placeholderTextInput.length) {
        input.placeholder += placeholderTextInput.charAt(indexInput);
        indexInput++;
    } else {
        clearInterval(typingIntervalInput);
        setTimeout(startTypingInput, 1500); // Pause avant de recommencer la boucle (1,5 seconde ici)
        indexInput = 0;
    }
}

// Fonction pour animer le placeholder du textarea
function typePlaceholderTextarea() {
    if (indexTextarea === 0) textarea.placeholder = ""; // Réinitialiser le placeholder au début de l'animation

    if (indexTextarea < placeholderTextTextarea.length) {
        textarea.placeholder += placeholderTextTextarea.charAt(indexTextarea);
        indexTextarea++;
    } else {
        clearInterval(typingIntervalTextarea);
        setTimeout(startTypingTextarea, 1500); // Pause avant de recommencer la boucle (1,5 seconde ici)
        indexTextarea = 0;
    }
}

// Fonction pour démarrer l'animation de l'input
function startTypingInput() {
    typingIntervalInput = setInterval(typePlaceholderInput, 200);
}

// Fonction pour démarrer l'animation du textarea
function startTypingTextarea() {
    typingIntervalTextarea = setInterval(typePlaceholderTextarea, 200);
}

// Fonction pour arrêter l'animation de l'input
function stopTypingInput() {
    clearInterval(typingIntervalInput); // Arrête l'animation
    input.placeholder = placeholderTextInput; // Affiche le texte complet
    indexInput = 0; // Réinitialiser l'index
}

// Fonction pour arrêter l'animation du textarea
function stopTypingTextarea() {
    clearInterval(typingIntervalTextarea); // Arrête l'animation
    textarea.placeholder = placeholderTextTextarea; // Affiche le texte complet
    indexTextarea = 0; // Réinitialiser l'index
}

input.addEventListener("blur", startTypingInput);
textarea.addEventListener("blur", startTypingTextarea);

input.addEventListener("focus", stopTypingInput);
textarea.addEventListener("focus", stopTypingTextarea);

window.addEventListener("load", () => {
    startTypingInput();
    startTypingTextarea();
});
