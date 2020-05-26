// General map JS:
mapboxgl.accessToken =
  "pk.eyJ1IjoiZWthbW9lIiwiYSI6ImNqd283d3I3bjBsd2g0OHFwMzZmMmVzdDgifQ.GMRjUJnvLt1dZ86nIvMtqw";
var map = new mapboxgl.Map({
  container: "map", // container id
  style: "mapbox://styles/ekamoe/ck9m6v5md1yho1ipk1gyvac0y", // BOTH LAYERS
  center: [-20.531, 30.719], // includes NZ
  zoom: 1.75,
  minZoom: 1.25,
  maxZoom: 16, // to navigate neighborhoods
});

/* callback function template
map.on('load', function() {
// how do i define the text inside the map-overlay?
});
*/
