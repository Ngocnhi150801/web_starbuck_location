// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           maxZoom: 19,
//           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//       }).addTo(map);

var lc = L.control
  .locate({
    position: "topright",
    strings: {
      title: "Show me where I am, yo!"
    }
  })
  .addTo(map);