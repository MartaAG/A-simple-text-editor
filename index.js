function toJSON(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value =  Object.fromEntries(data.entries());
    const blob = new Blob([JSON.stringify(value, null, 2)], {type : 'application/json'});
    const anchor = document.createElement('a');
    anchor.download = 'savedFile.json';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor)
}

const form = document.querySelector('form');
form.addEventListener('submit', toJSON);



function addFile() {
    const file = document.getElementById('myFile').files[0];

    const reader = new FileReader();
    reader.onload = function (e) {
        const textArea = document.getElementById('textEditor');
        textArea.value = e.target.result;
    };

    reader.readAsText(file);
}

addFile()