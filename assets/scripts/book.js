//Logo`ya tıklayınca anasayfaya yönlendirmesi:
document.getElementById('hrefLogo').addEventListener('click',()=>{
    window.location.href="./index.html"
    console.log("Yönlendiriliyor")
  })

fetch("http://localhost:3000/posts", {
     
    method: "POST",
     
    body: JSON.stringify({
        id: 15,
        title: "deneme",
        author: "atalay"
    }),
     
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
.then(response => response.json()) 
.then(json => console.log(json));


//Form input değerlerinin hepsinin alınması:
