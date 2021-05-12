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
    const file = document.querySelector('input').files[0];
    const reader = new FileReader();

    reader.addEventListener('loadend', function() {
        const textArea = document.getElementById('textEditor');
        textArea.innerHTML = reader.result;
    })

    reader.readAsText(file);
}

addFile()