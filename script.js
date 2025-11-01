fetch('chunks.html')
.then(r => r.text())
.then(html =>{
    const tempDiv = document.createElement ('div');
    tempDiv.innerHTML = html;
    const meni = tempDiv.querySelector ('#meni');

    document.getElementById ('meni'). innerHTML = html;
})
.catch(err => console.error('Миша все хуйня:' , err));

document.addEventListener("DOMContentLoaded" , function(){
const form = document.getElementById("reviewForm");
const status = document.getElementById("status");
 if (!form) return;
    form.addEventListener ("submit"), async function (event) {
     event.preventDefault();
     const formData = new FormData (form);
     status.textContent= "⌛️";
     try{ 
        const responce = await fetch("https://httpbin.org/post"{
        method: "POST",
        body: formData
        });
     if (responce.ok){
        status.textContent = "❤️";
        form.reser();
     } else
        status.textContent = "😭";
     }
    
     catch (error){
        status.textContent = "Xxxx" + error.message;
     }
 };

  