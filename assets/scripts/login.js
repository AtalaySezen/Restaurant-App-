//Input domları
const loginBtn = document.getElementById('login-btn');
const userInput = document.getElementById('username');
const passwordInput = document.getElementById('password');



loginBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log("clicked")
})










//Admin paneli için dark mode
const body = document.querySelector("body");
const check = document.getElementById("check");



check.addEventListener('click', getDark);


localCheck()

//Renkler buraya kayıt oluyor yeni bir ekleme yapılacağı zaman

function localCheck() {
  if (localStorage.getItem('darkMode') === "true") {
    // document.getElementsByTagName("input")[0].style.borderColor = "#FFF";
    let aTags = document.getElementsByTagName("input");
    for (let i = 0, all = aTags.length; i < all; i++) {
      aTags[i].classList.remove('black-input');
    }
    document.body.style.backgroundColor = "#181A1B";
    document.getElementsByTagName("label")[0].style.color = "white";
    document.getElementsByTagName("label")[1].style.color = "white";
    document.getElementById('login-btn').classList.remove('login');
    document.getElementById('form-admin').classList.remove('form-black')
  } else {
    // document.getElementsByTagName("input")[0].style.borderColor = "black";
    document.body.style.backgroundColor = "#FFF";
    let aTags = document.getElementsByTagName("input");
    for (let i = 0, all = aTags.length; i < all; i++) {
      aTags[i].classList.add('black-input');
    }
    document.getElementsByTagName("label")[0].style.color = "black";
    document.getElementsByTagName("label")[1].style.color = "black";
    document.getElementById('login-btn').classList.add('login');
    document.getElementById('form-admin').classList.add('form-black')

  }
}

//Dark mode geçiş
function getDark() {
  if (localStorage.getItem('darkMode') === "true") {
    localStorage.setItem('darkMode', "false");
    document.getElementsByTagName("label")[0].style.color = "black";
    document.getElementsByTagName("label")[1].style.color = "black";
    document.getElementById('login-btn').classList.add('login');
    document.body.style.backgroundColor = "white";
    document.getElementById('form-admin').classList.add('form-black')
    let aTags = document.getElementsByTagName("input");
    for (let i = 0, all = aTags.length; i < all; i++) {
      aTags[i].classList.add('black-input');
      }
  } else {
    localStorage.setItem('darkMode', "true");
    document.getElementsByTagName("label")[0].style.color = "#FFF";
    document.getElementsByTagName("label")[1].style.color = "#FFF";
    document.body.style.backgroundColor = "black";
    document.getElementById('login-btn').classList.remove('login');
    let aTags = document.getElementsByTagName("input");
    document.getElementById('form-admin').classList.remove('form-black')

    for (let i = 0, all = aTags.length; i < all; i++) {
      aTags[i].classList.remove('black-input');
    }
  }
}