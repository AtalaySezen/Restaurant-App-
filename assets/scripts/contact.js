const map = L.map('map').setView([41.08707688014269, 29.037257760639466], 15);//Burada bulunan 13 zoom oranını temsil eder.

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '© OpenStreetMap'
}).addTo(map);

//Kordinatlar için
var marker = L.marker([41.08707688014269, 29.037257760639466]).addTo(map);


//Harita üzerinde bulunan icon
var circle = L.circle([41.08707688014269, 29.037257760639466], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [41.08707688014269, 29.037257760639466],
    [41.08707688014269, 29.037257760639466],
    [41.08707688014269, 29.037257760639466]
]).addTo(map);

//Lokasyon üzerine yazı gelmesi için
marker.bindPopup("<b>En yakın zamanda görüşmek üzere<b>").openPopup();

var popup = L.popup()
    .setLatLng([41.08707688014269, 29.037257760639466])
    .setContent("İstanbul,Türkiye")
    .openOn(map);