// ## 04 - Guess

// - Installez et importez le package `prompt` (n'oubliez pas d'initialiser !) et lancez les méthodes de `prompt`
// - Créez une variable `mysteryNum` contenant une valeur aléatoire (un nombre entier entre 1 et 100)
// - Créez une fonction `play` qui demande au joueur "Quel est le nombre mystère ?" puis :
//     - si le joueur donne une valeur incorrecte (pas un nombre) on affiche "error" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop petit, on affiche "C'est plus !" et on relance la fonction `play`
//     - si le joueur donne un chiffre trop grand, on affiche "C'est moins !" et on relance la fonction `play`
//     - si le joueur donne le bon nombre, on affiche "Bravo !!"
// - Appelez la fonction
// - Testez le jeu

var prompt = require("prompt");
var {dice} = require("../utils/dice");

var mysteryNum = dice(1,100);
console.log(mysteryNum);

var schema = {
    properties: {
        number: {
            description: "Quel est le nombre mystère ?",
            pattern: /^\d{1,3}$/,
            required: true,
            message: "Entrez un nombre entre 1 et 100"
        }
    }
}
function guess() {
    prompt.get(schema, (err, result) => {
        var number = parseInt(result.number);
        if (number === mysteryNum) {
            console.log("Bravo");
        } else if (number > mysteryNum) {
            console.log("C'est moins");
            guess();
        } else {
            console.log("C'est plus");
            guess();
        }
    })
}
prompt.start();
guess();

