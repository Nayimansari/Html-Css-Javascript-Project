const inputBox = document.querySelector('#inputBox');
const listContainer = document.querySelector('#list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('you must write somthing')
    } else {
        // here creat list tag and add text of input box
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // here creat and add cross icon in span
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);

        // here creat a span and add inside edit icon
        
    }
    inputBox.value = '';
    saveData()
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheke");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem('data');
}
showTask();