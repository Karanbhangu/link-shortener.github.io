function shorten(){
    let link = document.getElementById("link").value;
    const api = `https://api.shrtco.de/v2/shorten?url=${link}/very/long/link.html`;
    fetch(api).then(response=>{
        return response.json();
    }).then(data=>{
        console.log(data);
        if(link.length > 18){
           link =  link.slice(0, 18) + "...";
        }
        document.getElementById("mainlinked").innerHTML += `    <div class="box">
        <div class="mainlink"><p>${link}</p></div>
        <div class="maininfo"><p>${data.result.short_link}</p><button >👈Your link</button></div>
      </div>
  `
    })
}
function copy(text){
    navigator.clipboard.readText().then(
        clipText => document.querySelector(".editor").innerText = clipText);
}