
function convertToJSON() {
    const editorText = document.getElementById('textEditor').innerHTML;
    const htmltoJSON = JSON.parse(JSON.stringify(editorText));

    function saveFile(html) {
        const anchor = document.createElement('a');
        const blob = new Blob([JSON.stringify(html, null, 2)], { type: 'application/json' });
        anchor.href = window.URL.createObjectURL(blob);
        anchor.download = 'savedHtml.json';
        anchor.style.display = "none";
        anchor.target = "_blank";
        anchor.click();
        document.body.appendChild(anchor);
        document.body.removeChild(anchor);
    }
    saveFile(htmltoJSON)
}


function uploadJSON() {
        const reader = new FileReader();
        reader.addEventListener('load', function () {
            document.getElementById('textEditor').innerHTML = JSON.parse(this.result);
        });
        reader.readAsText(document.getElementById('myJSON').files[0])
}

function addStyles(style) {
    document.execCommand(style);
}

