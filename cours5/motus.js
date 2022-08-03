// Vous vous souvenez de **Motus** ? Aujourd'hui on va le coder ! Petit rappel des règles :

// - Un mot mystère (ici de 5 lettres) est proposé, on ne connaît que la première lettre
// - Le joueur a six tentatives pour deviner le mot mystère, et pour chaque tentative :
//     - Les lettres qui sont à la bonne place sont en rouge
//     - Les lettres qui sont à la mauvaise place sont en jaune
//     - Les lettres qui n'existent pas dans le mot mystère restent neutres
    
// ⇒ Si le joueur propose un mot qui n'a pas le bon nombre de lettres (ici 5) alors il a perdu

// ⇒ Si le joueur propose "BOTTE" et que le mot mystère est "BRUTE" attention : un des "T" proposés doit rester neutre !

// À l'aide du package `prompt` que vous connaissez, et du package `colors` (cherchez le sur NPM et lisez la doc), tentez d'écrire un code qui peut permettre à l'utilisateur de jouer à Motus. Si vous réussissez : [bravo !](https://youtu.be/Kz4-Z-s5R9o) Sinon : [dommage...](https://youtu.be/y_sG_lPgMvk)


var colors = require('colors');
var prompt = require('prompt');
var {motMystere, motMystere} = require('../utils/motMystere');

var unMotMystere = motMystere();
console.log(unMotMystere);
var schema = {
    properties: {
        mot: {
            description: "Quel est le mot mystère ?",
            message: "Entrez un mot"
        }
    }
}
function play() {
    prompt.get(schema, (err, result) => {
        if(result.mot === unMotMystere){
            let bravo = "bravo";
            console.log(bravo.green);
        }else{
            play();
        }
    })
}
prompt.start();
play();

