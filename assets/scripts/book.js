//Logo`ya tıklayınca anasayfaya yönlendirmesi:
document.getElementById('hrefLogo').addEventListener('click', () => {
  window.location.href = "./index.html"
  console.log("Yönlendiriliyor")
})

// fetch("http://localhost:3000/posts", {

//   method: "POST",

//   body: JSON.stringify({
//     Müşteri: "Aybars",
//     Telefon: "05344141212",
//     eposta: "deneme@gmail.com",
//     Tarih: "25.05.2022",
//     Saat: 1900,
//     Tür: "Eğlence"
//   }),

//   headers: {
//     "Content-type": "application/json; charset=UTF-8"
//   }
// })
//   .then(response => response.json())
//   .then(json => console.log(json));


  fetch("./db.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })

//Form input değerlerinin hepsinin alınması:
const InputName = document.getElementById('name-input');
const InputContact = document.getElementById('contact-input');
const InputEmail = document.getElementById('email');
const InputDate = document.getElementById('date-input');
const InputTime = document.getElementById('time-input');
const InputSelect = document.getElementById('type-reserv');

console.log(InputTime)

function verifyForm(){
  inputs = document.getElementsByTagName("input");
  for(var i = 0, len = inputs.length; i < len; i++) {
      input = inputs[i];
      if(!input.value) {
          input.focus();
          alert("Lütfen İnput alanlarını doldurunuz");
          break;
      }
  }
}
