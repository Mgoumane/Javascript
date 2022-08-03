// ## 01 - Countries

// À l'aide de l'url suivante : "[https://restcountries.eu/rest/v1/all](https://restcountries.eu/rest/v1/all)" :

// - Créez un array vide `countriesNames`
// - Créez une fonction asynchrone `getCountries` pour récupérer les pays et stocker leurs noms dans l'array
// - Afficher les noms des pays récupérés dans la console, séparés par un tiret

var request = require('request');
function getCountries() {
    request.get("https://restcountries.com/v2/all", function(error, response, body) {
        var countries = JSON.parse(body);
    
        var countriesNames = countries.map(function(element){
            return element.name;
        });
        
        console.log(countriesNames.join("-"))
    });

}
getCountries();