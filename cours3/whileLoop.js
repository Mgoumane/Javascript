// ### 01 - Comptons

// A l'aide d'une boucle while, affichez les nombres paires entre 50 et 200

var i = 50;
while (i <= 200) {
    
    if (i % 2 === 0 ) {
        //console.log(i);
    };
    i++;
}

// ### 02 - Try again

// Créez une variable `dice` valant null et une variable `count` valant 0

// Tant que `dice` ne vaut pas 6, assignez le résultat d'un lancé de dé aléatoire à dice et ajoutez 1 à `count`

// Affichez `count`, le nombre de fois qu'il vous a fallu lancer le dé pour faire un 6

let dice = null;
let count = 0;


while (dice !== 6) {
    let min = 1;
    let max = 6;
    dice = Math.floor(Math.random() * (max  - min + 1) + min);
    count++;
}
console.log(count);

// ### 03 - Course

// Créez deux variables `ussainBolt` et `tysonGay` valant 0

// Tant que l'une des deux variables n'a pas dépassé 100 

// Tirer deux nombres aléatoires entre 1 et 10 et ajouter le premier nombre à la premiere variable et le deuxieme à la deuxieme

// Afficher le vainqueur de la course (la variable ayant dépassé 100 en premier)

let ussainBolt = 0;
let tysonGay = 0;
let min = 1;
let max = 10;

while (ussainBolt < 100 || tysonGay < 100) {
    
    nb1 = Math.floor(Math.random() * (max  - min + 1) + min);
    nb2 = Math.floor(Math.random() * (max  - min + 1) + min);
    ussainBolt = ussainBolt + nb1;
    tysonGay = tysonGay + nb2;
    
}
console.log("Ussain Bolt", ussainBolt);
console.log("Tyson Gay", tysonGay);

// ### 04 - Des boites
// A l'aide d'un papier et crayon, devinez ce qu'affiche le code suivant (interdit d'executer le code !)
var box1 = 12;
var box2 = 5;
while (box1 > 0) {
    console.log(box2);
    box1 -= 10;
    console.log(box1);
}

var i = 0;
var box1 = 7;
while (i > 0) {
    i++;
    console.log(box1 + i);
}
console.log(i);
console.log(box1);