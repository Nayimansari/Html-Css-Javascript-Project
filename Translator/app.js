const selectTag = document.querySelectorAll('select');
const translateBtn = document.querySelector('#Translate');
const fromText = document.querySelector("#fromText");
const toText = document.querySelector("#toText");
const icons = document.querySelectorAll('.fa-regular, .fa-solid');

selectTag.forEach((tag, id) => {
    for (const countriesCode in countries) {
        let selected;
        if (id == 0 && countriesCode == "en-GB") {
            selected = 'selected';
        } else if (id == 1 && countriesCode == "hi-IN") {
            selected = 'selected';
        }
        let option = `<option value="${countriesCode}"${selected}>${countries[countriesCode]}</option>`;
        tag.insertAdjacentHTML('afterbegin', option);
    }
});

// action translate // 
translateBtn.addEventListener('click', () => {
    let text = fromText.value;
    let trenslateFrom = selectTag[0].value;
    let trenslateTo = selectTag[1].value;

    fetch(`https://api.mymemory.translated.net/get?q=${text}!&langpair=${trenslateFrom}|${trenslateTo}`)
        .then(response => response.json())
        .then(data => {
            toText.value = data.responseData.translatedText;
        })
        .catch(error => console.error('Error:', error));
});

icons.forEach(icon => {
    icon.addEventListener("click", ({ target }) => {
        if (target.classList.contains('fa-copy')) {
            console.log('copy');
        } else if (target.classList.contains('fa-solid')) {
            console.log('speak');
        }
    });
});