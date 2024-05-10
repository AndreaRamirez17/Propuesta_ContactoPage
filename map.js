var map;
function loadMapScenario() {
    map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
        credentials: 'AprNHB9lZdQGNTrSN7NKqxDXKdZ7fsuSVvL8iu3bd2MG9qILw3Yi4s5kSKftnC1x'
    });

    var empresaLocation = new Microsoft.Maps.Location(19.432605564119942, -99.13334082939002); // localización
    var pin = new Microsoft.Maps.Pushpin(empresaLocation);
    map.entities.push(pin);
}