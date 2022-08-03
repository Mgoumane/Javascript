// À l'aide de la superbe [PokeAPI](https://pokeapi.co/) (bien lire la documentation) :

// - Créez une fonction asynchrone `catchPokemon` qui recevra un nombre en paramètre (il correspondra à l'id d'un pokemon) et qui récupèrera le pokemon correspondant à cet id. Elle affichera ensuite dans la console :
var request = require('request');

function catchPokemon(id) {
    request.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`, function(error, response, body) {
        var pokemons = JSON.parse(body);
        console.log(pokemons.name);
    });

}
catchPokemon(7);