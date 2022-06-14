//Input ve button
const loginBtn = document.getElementById('login-btn');
const userInput = document.getElementById('username');
const passwordInput = document.getElementById('password');


loginBtn.addEventListener('click', login)

//Admin user ve pass bilgileri

//Gerekir ise buradan yeni admin generate edebiliriz. 



const alertMessage = document.getElementById('alert-message'); //Danger
const alertSuccess = document.getElementById('alert-success');

function login(e) {
  e.preventDefault();
  if (userInput.value === getUsername & passwordInput.value === getPassword) {
    alertSuccess.classList.remove('none');
    alertSuccess.innerHTML = `Hoşgeldin ${getUsername}`
    setInterval(() => {
    window.location.href = "./admin.html"  //Yönlendirme açmayı unutmayalım.
    }, 1000);
  } else if (userInput.value != getUsername & passwordInput.value != getPassword) {
    alertMessage.classList.remove('none');
    alertMessage.innerHTML = `Hatalı Şifre ya da kullanıcı adı ${getUsername}`
  } else {
    alertMessage.classList.remove('none');
    alertMessage.innerHTML = `Hatalı Şifre  ${getUsername}`
  }
}


let getUsername = (localStorage.getItem("userAdmin", username));
let getPassword = (localStorage.getItem("passAdmin", password));

console.log("------------------------")
console.log(getPassword, getUsername)













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
    check.style.color = "white"
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
    check.style.color = "black"
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
    check.style.color = "black"

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
    check.style.color = "white"
    document.body.style.backgroundColor = "black";
    document.getElementById('login-btn').classList.remove('login');
    let aTags = document.getElementsByTagName("input");
    document.getElementById('form-admin').classList.remove('form-black')

    for (let i = 0, all = aTags.length; i < all; i++) {
      aTags[i].classList.remove('black-input');
    }
  }
}