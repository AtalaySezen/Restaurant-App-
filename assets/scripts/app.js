//Anasayfa Javascript 

let countDownDate = new Date("July 10, 2022 00:00:00").getTime();

let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter-header").innerHTML = days + "Gün " + hours + "h "
  + minutes + "Dakika" + seconds + "Saniye ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter-header").innerHTML = "Artık Sizlerleyiz!";
  }
}, 1000);

//Hamburger Menü CSS
const hamburgerButton = document.getElementById('hamburgerButton');
const mobileLinks = document.getElementById('mobileLinks');

hamburgerButton.addEventListener('click', function showMenu() {
    hamburgerButton.classList.toggle('change')
    mobileLinks.classList.toggle('hide');
})

//Slider Javascripti burada
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //Random user api ile kişiler
  const randomUser = "https://randomuser.me/api/";

  const image = document.getElementById('random-image');
  const pTag = document.getElementById('pTag');

  fetch(randomUser)
  .then(response=>response.json())
  .then(data=>{
    const randomUser = data.results;
    console.log(randomUser[0])
    image.innerHTML = `
      <img src="${randomUser[0].picture[1]}" alt="">
    `
    pTag.innerHTML = `
      <p>${randomUser[0].email}</p>
    `
  })
  // .catch(e=>{
  //   console.log("Bir Hata Oluştu", e);
  // })