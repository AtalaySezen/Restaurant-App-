//Konsola db.json datalarını yazdırma;
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


//Validasyonlar

//Telefon validasyonu
document.getElementById('contact-input').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  InputContact.val().replace(/^0+/, '+90');
});
//Email validasyonu
function validateEmail(){

}


//Time input validasyonu


//Date input validasyonu




console.log(InputTime)

const popUp = document.getElementById('popup-thanks');
const popupHeader = document.getElementById('popup-header');
const popupPtag = document.getElementById('popup-p');

function verifyForm() {

  popupHeader.innerHTML = "Rezervasyon yaptırdığınız için teşekkürler.";
  popupPtag.innerHTML = "Çok yakında görüşmek üzere";
  popUp.classList.remove('hide-popup');

  // inputs = document.getElementsByTagName("input");
  // for (var i = 1, len = inputs.length; i < len; i++) {
  //   input = inputs[i];
  //   if (!input.value || InputEmail.value.length < 1 || InputTime.value == "") {
  //     input.focus();
  //     popupHeader.innerHTML = "Lütfen Tüm Alanları Doldurunuz";
  //     popupPtag.innerHTML = "Teşekkür ederiz";
  //     popUp.classList.remove('hide-popup')
  //     break;
  //   }
  //   else {
  //     popupHeader.innerHTML = "Rezervasyon yaptırdığınız için teşekkürler.";
  //     popupPtag.innerHTML = "Çok yakında görüşmek üzere";
  //     popUp.classList.remove('hide-popup');
  //     let Inputelements = document.getElementsByTagName("input");
  //     for (let ii = 0; ii < Inputelements.length; ii++) {
  //         Inputelements[ii].value = "";

  //     }

  //Datayı json server`a gönderme;
  fetch("http://localhost:3000/posts", {
    method: "POST",
    body: JSON.stringify({
      Müşteri: InputName.value,
      Telefon: InputContact.value,
      eposta: InputEmail.value,
      Tarih: InputDate.value,
      Saat: InputTime.value,
      Tür: InputSelect.value
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(json => console.log(json));
}
//   }
// }

//Close butonuna tıklayınca kapatır. 
const closePopup = document.getElementById('close-popup');

closePopup.addEventListener('click', () => {
  popUp.classList.add('hide-popup');

});