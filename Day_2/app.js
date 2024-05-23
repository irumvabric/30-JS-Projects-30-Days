const input = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function AddTask(){
    if(input.value ===""){
        alert("Please enter a task");
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
    }

    input.value = "";
}