// General map JS
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWthbW9lIiwiYSI6ImNqd283d3I3bjBsd2g0OHFwMzZmMmVzdDgifQ.GMRjUJnvLt1dZ86nIvMtqw";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/ekamoe/ck9m6v5md1yho1ipk1gyvac0y", // begins with zoom switch style
  center: [-20, 35], // includes Hawaii
  zoom: 1.75,
  minZoom: 1.25,
  maxZoom: 16, // to navigate neighborhoods
});

// Upon map load...
map.on("load", function () {
  // Mapbox code for zoom and rotation controls
  map.addControl(new mapboxgl.NavigationControl());

  // upper left popup
  var popupText =
    "<b>" +
    "This map visualizes data for the week of July 6, 2018, as modeled by the " +
    "<a href='https://www.birds.cornell.edu/home'>" +
    "Cornell Lab of Ornithology " +
    "</a>" +
    "<br>" +
    "for " +
    "<a href='https://ebird.org/science/status-and-trends'>" +
    "eBird Status and Trends" +
    "</a>" +
    "." +
    "</b>" +
    "<li>" +
    "The first layer shows a relative measure of " +
    "<b>" +
    "data sufficiency " +
    "</b>" +
    "to build abundance models." +
    "<li>" +
    "As you zoom closer, the map will switch to reveal the " +
    "<b>" +
    "probability layer" +
    "</b>" +
    ", which shows the probability of receiving an eBird checklist from a givel pixel during one week." +
    "<li>" +
    "Please use caution when birding in new locations. Not all areas will be accessible.";
  new mapboxgl.Popup({
    closeOnClick: false,
    anchor: top,
  })
    .setLngLat([-20, 35]) // CENTER OF MAP
    .setHTML(popupText)
    .setMaxWidth("650px")
    .addTo(map);
  // Mapbox code for legend overlays no longer working, but is not as important as the infoWindow & nav control
  // gcc layer
  var layers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  var colors = [
    "#fde725",
    "#fde725",
    "#b5de2c",
    "#6cce59",
    "#35b779",
    "#1e9e89",
    "#25838e",
    "#31688e",
    "#3e4a89",
    "#472878",
    "#440154",
  ];
  // ssp layer
  var secondLayers = ["0-0.13", "0.14-0.28", "0.29-0.42", "0.43-1"];
  var secondColors = ["#f0f921", "#ef7b51", "#99149f", "#0d0887"];

  // loop to populate legends
  for (i = 0; i < layers.length; i++) {
    var layer = layers[i];
    var color = colors[i];
    var item = document.createElement("div");
    var key = document.createElement("span");
    key.className = "legend-key";
    key.style.backgroundColor = color;

    var value = document.createElement("span");
    value.innerHTML = layer;
    item.appendChild(key);
    item.appendChild(value);
    legend.appendChild(item);
  }
  for (i = 0; i < secondLayers.length; i++) {
    var secondLayer = secondLayers[i];
    var secondColor = secondColors[i];
    var item = document.createElement("div");
    var key = document.createElement("span");
    key.className = "legend-second-key";
    key.style.backgroundColor = secondColor;

    var value = document.createElement("span");
    value.innerHTML = secondLayer;
    item.appendChild(key);
    item.appendChild(value);
    secondLegend.appendChild(item);
  }
});

/* //  Display lat-lng on mouse click
map.on("click", function (e) {
  document.getElementById("info").innerHTML =
    // e.lngLat is the longitude, latitude geographical position of the event
    JSON.stringify(e.lngLat.toArray());
});

map.on("mousemove", function (e) {
  var features = map.queryRenderedFeatures(e.point);

  // Limit the number of properties we're displaying for
  // legibility and performance
  var displayProperties = [
    "type",
    "properties",
    "id",
    "layer",
    "source",
    "sourceLayer",
    "state",
  ];

  var displayFeatures = features.map(function (feat) {
    var displayFeat = {};
    displayProperties.forEach(function (prop) {
      displayFeat[prop] = feat[prop];
    });
    return displayFeat;
  });

  document.getElementById("features").innerHTML = JSON.stringify(
    displayFeatures,
    null,
    2
  );
});
 */
