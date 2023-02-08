// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

let pickupPoint = document.querySelector('#pickup_point');
let dropPoint = document.querySelector('#drop_point');

let pickupAutoComplete = new google.maps.places.Autocomplete(pickupPoint, {
    fields: ["address_components", "geometry"],
    types: ["address"],
});
pickupAutoComplete.addListener("place_changed", function(){
    let place = autocomplete.getPlace();
});

let dropPointAutoComplete = new google.maps.places.Autocomplete(dropPoint, {
    fields: ["address_components", "geometry"],
    types: ["address"],
});
dropPointAutoComplete.addListener("place_changed", function(){
    let place = autocomplete.getPlace();
});