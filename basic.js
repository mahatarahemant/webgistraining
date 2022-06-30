

var map = L.map('mapidd').setView([28.2137, 83.9877], 14);



var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
// this is the code for adding geojson file in webmapping
// $.getJSON("airpot_area.geojson", function (data) {
//     L.geoJson(data).addTo(map);
// })

$.getJSON("point.geojson", function (data) {
    L.geoJson(data).addTo(map);
})
// $.getJSON("line.geojson", function (data) {
//     L.geoJson(data).addTo(map);
// })

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent(" " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

// var point = turf.point([83.981638, 28.201137]);
// var buffered = turf.buffer(point, 500, { units: 'meters' });
// L.geoJson(buffered).addTo(map);


// first convert shapefile into geojson file then use in  turf again output geojson file is shown in map 
$.getJSON("point.geojson", function (data) {
    var data1 = L.geoJson(data);
    var features = data1.toGeoJSON();
    var buffered = turf.buffer(features, 500, { units: 'meters' });
    L.geoJson(buffered).addTo(map);
});
// bearing of two points 
var point1 = turf.point([83.986557, 28.206422]);
var point2 = turf.point([83.981643, 28.201156]);

var bearing = turf.bearing(point1, point2);
L.geoJson(bearing).addTo(map);