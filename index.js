// function toJSON(event) {
//     event.preventDefault();
//     const data = new FormData(event.target);
//     const value =  Object.fromEntries(data.entries());
//     const blob = new Blob([JSON.stringify(value, null, 2)], {type : 'application/json'});
//     const anchor = document.createElement('a');
//     anchor.download = 'savedFile.json';
//     anchor.href = window.URL.createObjectURL(blob);
//     anchor.target ="_blank";
//     anchor.style.display = "none";
//     document.body.appendChild(anchor);
//     anchor.click();
//     document.body.removeChild(anchor)
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', toJSON);



// function addFile() {
//     document.getElementById('uploadButton').addEventListener('click', function() {
//         const reader = new FileReader();
//         const file = document.querySelector('input').files[0];

//         reader.addEventListener('load', function() {
//             const textArea = document.getElementById('textEditor');
//             textArea.value = reader.result;
//         })
//         reader.readAsText(file);
//     })
// }
// addFile()

function HtmltoJson() {
    const htmlToRender = document.getElementById('htmlToSerialize').outerHTML;
    const htmltoJSON = JSON.parse(JSON.stringify(htmlToRender));
    console.log(typeof(htmltoJSON))

    saveToJson(htmltoJSON)
    
    //document.getElementById("output").innerHTML = htmlToRender;
}

HtmltoJson()

function saveToJson(h) {
    const downloadButton = document.getElementById('saveButton');
    downloadButton.addEventListener('click', function() {
        const blob = new Blob([JSON.stringify(h, null, 2)], {type : 'application/json'});
        const anchor = document.createElement('a');
        anchor.download = 'savedHtml.json';
        anchor.href = window.URL.createObjectURL(blob);
        anchor.target ="_blank";
        anchor.style.display = "none";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor)
    })
}

function uploudJSON () {
    const renderButton = document.getElementById('renderingHTML');
    renderButton.addEventListener('click', function() {
        const reader = new FileReader();
        reader.addEventListener('load', function() {
            document.getElementById('output').innerHTML = JSON.parse(this.result);
        });
        reader.readAsText(document.getElementById('myJSON').files[0])
    })
}

uploudJSON()