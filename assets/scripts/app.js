//Anasayfa Javascript 
let countDownDate = new Date("July 10, 2022 00:00:00").getTime();

let x = setInterval(function () {

  //Bugünün tarihlerinin alınması
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
//Dom elementleri
const image = document.getElementById('random-image');
const image2 = document.getElementById('random2');
const image3 = document.getElementById('random3');
const image4 = document.getElementById('random4');


const pTag = document.getElementById('pTag');
const pTag2 = document.getElementById('pTag2');
const pTag3 = document.getElementById('pTag3');
const pTag4 = document.getElementById('pTag4');

//Fetch isteği
fetch(randomUser)
  .then(response => response.json())
  .then(data => {
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
  .catch(e => {
    console.log("Bir hata oluştu ya da çok fazla istekte bulunduk :)", e);
  })



//Kullanıcı kayıt olunca popup gösterme ve kapatma
const subscribeBtn = document.getElementById('mail-btn');
const popUp = document.getElementById('popup-thanks');



//Kayıt ol input`u Mail Validasyonu: 

function checkEmail() {
  let mailInput = document.getElementById('mail-input');

  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let alertMail = document.getElementById('alert-mail');

  if (!reg.test(mailInput.value)) {
    alertMail.innerHTML = "Girdiğiniz mail adresi hatalı ya da eksik."
    setTimeout(function () { alertMail.innerHTML = "En güncel haberleri almak için." }, 5000);
    mailInput.focus;
    return false;
  } else {
    //Kayıt ol tıklayınca popup gösterilmesi;
    popUp.classList.remove('hide-popup');
  }
}

//Fonksiyonun çalıştıırlması
subscribeBtn.addEventListener('click', checkEmail);



//Close butonuna tıklayınca kapatır. 
const closePopup = document.getElementById('close-popup');

closePopup.addEventListener('click', () => {
  popUp.classList.add('hide-popup');
});
