var tilesOpenStreetMaps = 'https://{s}.tile.openstreetmap.de/{z}/{x}/{y}.png';
var myMap = L.map('myMap').setView([41.38702, 2.17005], 17);

L.tileLayer(tilesOpenStreetMaps, {
    maxZoom: 20,
}).addTo(myMap);

let marker = L.marker([41.3868561, 2.1661102]).addTo(myMap);



var popup = L.popup();

function onMapClick(e) {
    popup
    marker.bindPopup("<h3>Restaurant CentFocs</h3><p>Restaurante mediterráneo</p>Carrer Balmes, 16, 08007 Barcelona").openPopup()
}

myMap.on('click', onMapClick);