
//Form input değerlerinin hepsinin alınması:
const InputName = document.getElementById('name-input');
const InputContact = document.getElementById('contact-input');
const InputEmail = document.getElementById('email');
const InputDate = document.getElementById('date-input');
const InputTime = document.getElementById('time-input');
const InputSelect = document.getElementById('type-reserv');


//Telefon validasyonu
document.getElementById('contact-input').addEventListener('input', function (e) {
  var x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
  InputContact.val().replace(/^0+/, '+90');
});

const popUp = document.getElementById('popup-thanks');
const popupHeader = document.getElementById('popup-header');
const popupPtag = document.getElementById('popup-p');

document.getElementById('btn-send').addEventListener('click', verifyForm);

function verifyForm(e) {
  e.preventDefault();
  //Email validasyonu
  let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (InputEmail.value.match(reg)) {
    popupHeader.innerHTML = "Rezervasyon yaptırdığınız için teşekkürler.";
    popupPtag.innerHTML = "Çok yakında görüşmek üzere";
    popUp.classList.remove('hide-popup');
  }
  else {
    popupHeader.innerHTML = "Lütfen geçerli bir e-posta adresi giriniz";
    popupPtag.innerHTML = "Teşekkür ederiz";
    popUp.classList.remove('hide-popup');
    return false
  }
  //Ad soyad validasyonu
  if (InputName.value.length < 1) {
    popupHeader.innerHTML = "Lütfen Adınız ve soyadınızı boş bırakmayın.";
    popupPtag.innerHTML = "Teşekkür ederiz";
    popUp.classList.remove('hide-popup')
    return false;
  } else {
    popupPtag.innerHTML = "Çok yakında görüşmek üzere";
    popUp.classList.remove('hide-popup');
  }

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


//Close butonuna tıklayınca kapatır. 
const closePopup = document.getElementById('close-popup');

closePopup.addEventListener('click', () => {
  popUp.classList.add('hide-popup');

});