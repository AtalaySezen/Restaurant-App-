const customerTable = document.getElementById('customer-infos');

fetch("./db.json")
  .then(response => response.json())
  .then(data => {
    //Form`dan gelen db.json dosyası alındı.
    customerTable.innerHTML = data.posts
      .map(post => `
                <tr>
                    <td>${post.Müşteri}</td>
                    <td>${post.Telefon}</td>
                    <td>${post.eposta}</td>
                    <td>${post.Tarih}</td>
                    <td>${post.Saat}</td>
                    <td>${post.Tür}</td>
                  </tr>

    `)
      .join(''); //DB.json virgüller
  })

//Müşteri arama fetch-İnput-Click
let searchInput = document.getElementById('search-input');
let searchButton = document.getElementById('search-btn');

//Button click
searchButton.addEventListener('click', function () {
  console.log("Arama başladı");
  searchScreen();
  searchFetch();
})
//Enter`a basınca click eventi
searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchButton.click();
  }
});

//Ekrana arama yapılıyor yazdırılması
function searchScreen() {
  document.getElementById('header-search').innerHTML = "Arama yapılıyor..."
}

//Fetch search edilmesi
function searchFetch() {
  searchCustomer = searchInput.value;
  fetch(`http://localhost:3000/posts?q=${searchCustomer}`)
    .then(response => response.json())
    .then(data => {
      customerTable.innerHTML = data
        .map(data =>
          `
            <tr>
                <td>${data.Müşteri}</td>
                     <td>${data.Telefon}</td>
                      <td>${data.eposta}</td>
                      <td>${data.Tarih}</td>
                      <td>${data.Saat}</td>
                      <td>${data.Tür}</td>             
        </tr
        `
        )
        .join(''); //DB.json virgüller

    })
  if (customerTable.innerHTML === "") {
    document.getElementById('header-search').innerHTML = "Arama sonucu bulunamadı.";
  } else {
    document.getElementById('header-search').innerHTML = `${searchCustomer} için bulunan arama sonuçları:`
  }

};




//Admin login kontrolü
function adminTrue() {
  let logged = localStorage.getItem("adminLogged");

  if (logged != "true") {

    window.location.href = "index.html";

  } else {
  }
}

//Çıkış yapınca localstorage temizleme
let logOut = document.getElementById('logout-btn');


logOut.addEventListener('click', () => {
  localStorage.removeItem("adminLogged");
  window.location.href = "./loginadmin.html"
})

//Sayfa yüklendiği zaman gösterir
let body = document.getElementById('body-item');

//Eğer sadece giriş yapmış ise bilgiler görünecek.
let logged = localStorage.getItem("adminLogged");

if (logged == "true") {
  body.classList.remove('hide');
}

document.getElementById('refresh-btn').addEventListener('click', () => {
  window.location.reload();
})
