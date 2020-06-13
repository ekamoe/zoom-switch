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

// Upon map load, add nav control and descriptive pop-up
map.on("load", function () {
  // zoom and rotation controls on upper right
  map.addControl(new mapboxgl.NavigationControl());

  // descriptive popup on upper left
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
    "<br>" +
    "The first layer shows a relative measure of " +
    "<b>" +
    "data sufficiency " +
    "</b>" +
    "to build abundance models." +
    "<br>" +
    "As you zoom closer, the map will switch to reveal the " +
    "<b>" +
    "probability layer" +
    "</b>" +
    ", which shows the probability of receiving an eBird checklist from a givel pixel during one week." +
    "<br>" +
    "Please use caution when birding in new locations. Not all areas will be accessible.";
  new mapboxgl.Popup({
    closeOnClick: false,
    anchor: top,
  })
    .setLngLat([-20, 35]) // CENTER OF MAP
    .setHTML(popupText)
    .setMaxWidth("650px")
    .addTo(map);
});
