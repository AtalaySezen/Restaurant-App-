const customerTable = document.getElementById('customer-infos');


fetch("./db.json")
    .then(response => response.json())
    .then(data => {
        console.log(data); 
        //Form`dan gelen db.json dosyası alındı.
        customerTable.innerHTML = data.posts
            .map(post => `
    <tbody>
    <tr>
    <th scope="col">Müşteri</th>
    <th scope="col">Telefon Numarası</th>
    <th scope="col">Email</th>
    <th scope="col">Tarih</th>
    <th scope="col">Saat</th>
    <th scope="col">Tür</th>

  </tr>
                  <tr>
                    <td>${post.Müşteri}</td>
                    <td>${post.Telefon}</td>
                    <td>${post.eposta}</td>
                    <td>${post.Tarih}</td>
                    <td>${post.Saat}</td>
                    <td>${post.Tür}</td>

                  </tr>

                </tbody>
    `)
            .join(''); //DB.json virgüller
    })



//Search 
fetch("./db.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })