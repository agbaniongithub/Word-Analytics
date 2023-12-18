const textareaSelector = document.querySelector(".textarea");
const wordsNumberSelector = document.querySelector(".stat__number--words");
const charactersNumberSelector = document.querySelector('.stat__number--characters');
const facebookNumberSelector = document.querySelector('.stat__number--facebook');
const twitterNumberSelector = document.querySelector('.stat__number--twitter');

const functionForTextarea = () => { 

    //input validation
    if (textareaSelector.value.includes("<script>")) {
        textareaSelector.value = textareaSelector.value.replace("<script>", "");
        alert("Your text cannot include the script tag");
    }

    //determine new numbers
    const numberOfCharacters = textareaSelector.value.length;
    const numberOfTwitter = 280 - textareaSelector.value.length;
    const numberOfFacebook = 2200 - textareaSelector.value.length;
    let numberOfWords = textareaSelector.value.split(' ').length;
    if (textareaSelector.value.length === 0) {
        numberOfWords = 0;
    }
    
    //set new numbers
    charactersNumberSelector.textContent = numberOfCharacters;
    twitterNumberSelector.textContent = numberOfTwitter;
    facebookNumberSelector.textContent = numberOfFacebook;
    wordsNumberSelector.textContent = numberOfWords;

    //visual warning
    if (numberOfTwitter < 0) {
        twitterNumberSelector.classList.add("stat__number--limit");
    }
    else {
        twitterNumberSelector.classList.remove("stat__number--limit");
    }
    if (numberOfFacebook < 0) {
        facebookNumberSelector.classList.add("stat__number--limit");
    }
    else {
        facebookNumberSelector.classList.remove("stat__number--limit");
    }
};

textareaSelector.addEventListener("input", functionForTextarea);
