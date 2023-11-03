var position = [37.678841, -97.317239];
position.reverse();
console.log(position);

const map = new mapboxgl.Map({
   container: 'map',
   style: json,
   center: position, //Longitude, Latitude
   zoom: 19.5
});