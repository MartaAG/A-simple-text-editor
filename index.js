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
    document.getElementById('uploadButton').addEventListener('click', function() {
        const reader = new FileReader();
        const file = document.querySelector('input').files[0];

        reader.addEventListener('load', function() {
            const textArea = document.getElementById('textEditor');
            textArea.value = reader.result;
        })
        reader.readAsText(file);
    })
}

addFile()