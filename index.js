
function downloadFile(){
    const text = document.getElementById('textEditor').value;
    const blob = new Blob([text], { type: "text/plain"});
    const anchor = document.createElement('a');
    anchor.download = 'savedFile.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor)
}

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