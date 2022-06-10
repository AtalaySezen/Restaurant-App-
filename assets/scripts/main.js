//Aos Özelliği çalıştırılması;
AOS.init();

//Logo`ya tıklayınca anasayfaya yönlendirmesi:
document.getElementById('hrefLogo').addEventListener('click', () => {
  window.location.href = "./index.html"
  console.log("Yönlendiriliyor")
})

//Şu an ki mevcut yılı alma:
const yearInfo = new Date().getFullYear();
document.getElementById('year').innerHTML = yearInfo + " Atalay";

//Hamburger Menü CSS
const hamburgerButton = document.getElementById('hamburgerButton');
const mobileLinks = document.getElementById('mobileLinks');

hamburgerButton.addEventListener('click', function showMenu() {
  hamburgerButton.classList.toggle('change')
  mobileLinks.classList.toggle('hide');
})

//Close butonuna tıklayınca kapatır. 
const closePopup = document.getElementById('close-popup');

closePopup.addEventListener('click', () => {
  popUp.classList.add('hide-popup');
});