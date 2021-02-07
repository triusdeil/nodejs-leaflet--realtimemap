const map = L.map('map-template').setView([51.505,-0.09], 13);

const socket = io();

L.tileLayer('https://a.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

map.locate({enableHighAccuracy: true});
map.on('locationfound', e =>{
    const coords = [e.latlng.lat, e.latlng.lng]
    const marker = L.marker(coords)
    marker.bindPopup('you are here!')
    map.addLayer(marker)
    socket.emit('UserCordinates', e.latlng)
})
socket.on('newUserCoordinates', (coords) =>{
    console.log('a new user connected')
    const marker = L.marker([coords.lat + 1, coords.lng + 1])
    marker.bindPopup('you are here!')
    map.addLayer(marker);
})
