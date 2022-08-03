// À l'aide de l'api suivante (lisez bien la documentation) : [https://api.chucknorris.io/](https://api.chucknorris.io/)

// - Créez une fonction asynchrone `getFact` qui récupèrera une blague Chuck Norris aléatoire à chaque fois que la fonction est lancée, et qui l'affichera dans la console

var request = require('request');
function getFact() {
    request.get("https://api.chucknorris.io/jokes/random", function(error, response, body) {
        var resultat = JSON.parse(body);

        console.log(resultat.value)
    });

}
getFact();
