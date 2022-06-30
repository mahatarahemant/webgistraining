var map = L.map('map').setView([28.200994837113992, 83.98205369710924], 13);

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(map);

var marker = L.marker([28.200994837113992, 83.98205369710924])
    .bindPopup('Pokhara Airpot<img src="https://th.bing.com/th/id/R.0e6e5ccd3a70b20e20aa337ef8769ef8?rik=fmSDLxYiTUjfAQ&riu=http%3a%2f%2fwww.airport-technology.com%2fwp-content%2fuploads%2fsites%2f14%2f2017%2f10%2fPokhara-Airport.jpg&ehk=86SWWnItbGFsikDh3MSwRTwjWkK6t7UTp04af17t8D0%3d&risl=&pid=ImgRaw&r=0" width="100px">')
    .openPopup();
    var circle = L.circle([28.200994837113992, 83.98205369710924], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    });
    //scale bar
    L.control.scale().addTo(map);
    //base layers
    var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });
     var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });
    var baseMaps = {
         "googleHybrid": googleHybrid,
        " googleSat": googleSat,
        "OpenTopoMap": OpenTopoMap
       
    };
    //overlayer 
   var overLayer = {
       "Marker":marker,
       "Circle":circle
   }
    L.control.layers(baseMaps,overLayer).addTo(map)
    //click event in leaflet
    map.on("click",onclickfun);
    //function define
    function onclickfun(e){
        console.log(e.latlng)
        alert(e.latlng)
        var lat= e.latlng.lat
        var long= e.latlng.lng
        alert(`latitude is ${lat} and longitude ${long}`)
     // console.log("hii i am clicked!!")
    };
    var osmGeocoder = new L.Control.OSMGeocoder({
        text:"search",
        placeholder:"enter the place"
    });

map.addControl(osmGeocoder);