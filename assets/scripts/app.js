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
  const randomUser = "https://randomuser.me/api/?results=5000";

  const image = document.getElementById('random-image');
  const image2 =document.getElementById('random2');
  const image3 = document.getElementById('random3');
  const image4 = document.getElementById('random34');


  const pTag = document.getElementById('pTag');
  const pTag2 = document.getElementById('pTag2');
  const pTag3 = document.getElementById('pTag3');
  const pTag4 = document.getElementById('pTag4');


  fetch(randomUser)
  .then(response=>response.json())
  .then(data=>{
    console.log(data);
    let randomUser2 = data.results;
    image.src = data.results[0].picture.large;
    pTag.innerHTML = `
      <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
    `;

   image2.src = data.results[1].picture.large;
   pTag2.innerHTML = `<p> ${data.results[1].name.first} ${data.results[1].name.last}</p>`;
   
   image3.src = data.results[2].picture.large;
   pTag3.innerHTML = `<p> ${data.results[2].name.first} ${data.results[2].name.last}</p>`;

   image4.src = data.results[3].picture.large;
   pTag4.innerHTML = `<p> ${data.results[3].name.first} ${data.results[3].name.last}</p>`;

  })
  .catch(e=>{
    console.log("Bir hata oluştu ya da çok fazla istekte bulunduk :)", e);
  })

  


  //