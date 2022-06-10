//Aos Özelliği çalıştırılması;
AOS.init();

//Logo`ya tıklayınca anasayfaya yönlendirmesi:
document.getElementById('hrefLogo').addEventListener('click',()=>{
    window.location.href="./index.html"
    console.log("Yönlendiriliyor")
  })
  
//Şu an ki mevcut yılı alma:
const yearInfo = new Date().getFullYear();
document.getElementById('year').innerHTML = yearInfo + " Atalay";