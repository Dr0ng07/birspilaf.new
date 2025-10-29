fetch('chunks.html')
.then(r => r.text())
.then(html =>{
    const tempDiv = document.createElement ('div');
    tempDiv.innerHTML = html;
    const meni = tempDiv.querySelector ('#meni');

    document.getElementById ('meni'). innerHTML = html;
})
.catch(err => console.error('Миша все хуйня:' , err));