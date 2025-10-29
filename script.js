fetch('index.html')
.then(r => r.text())
.then(html =>{
    document.getElementById ('meni'). innerHTML = html;
})
.catch(err => console.error('Миша все хуйня:' , err));