

var map = L.map('map').setView([28.2137, 83.9877], 14);



var OpenStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var drawControl = new L.Control.Draw({
    edit: {
        featureGroup: editableLayers, //REQUIRED!!
        // remove: false
    },
    draw: {
        rectangle: false
    }
});
map.addControl(drawControl);

map.on('draw:created', function (e) {
    console.log(e)
    map.addLayer(e.layer)
    // console.log("hi draw finish")
})
