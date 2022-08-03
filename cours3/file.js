// ## 01 - Array

// - Créez une variable `fruits` qui contiendra un tableau avec les valeurs `"mango"`, `"lemon"` et `"blueberry"`
// - Affichez `fruits` dans la console
// - Bonus: essayez `console.table(fruits)`
let fruits = ['mango','lemon', 'blueberry'];
console.table(fruits);

// ## 02 - Access

// - Créez une variable `ingredients` qui contiendra un tableau avec les valeurs `"eggs"`, `"milk"` et `"butter"`
// - Faites apparaître `"milk"` dans la console
// - Faites apparaître l'index de `"butter"` dans la console

let ingredients = ["eggs", "milk", "butter"];
console.log(ingredients[1]);
console.log(ingredients.indexOf("butter"));

// ## 03 - Add and Remove

// - Créez une variable `objects` qui contiendra un tableau avec les valeurs `"pen"`, `"book"` et `"lamp"`
// - Ajoutez `"chair"` au début du tableau puis affichez le résultat
// - Enlevez `"lamp"` puis affichez le résultat
// - Ajoutez `"laptop"` à la fin du tableau puis affichez le résultat
// - Enlevez `"chair"` puis affichez le résultat

let objects = ["pen","book","lamp"];
objects.unshift("chair");
objects.pop();
objects.push("laptop");
objects.shift("chair");
console.log(objects);

// ## 04 - Order

// - Créez une variable `numbers` qui contiendra un tableau avec les valeurs `4`, `10`, `8`, `12` et `6`
// - Inversez l'ordre des éléments de `numbers` puis affichez le résultat
// - Rangez les éléments de `numbers` dans l'ordre croissant puis affichez le résultat
let numbers = [4,10,8,12,6];
console.log(numbers.reverse());
console.log(numbers.sort((a, b) => a - b));

// ## 05 - Boucle

// - Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
// - À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
// - Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10
let total = 0;
let limit = 10;
for(let i = 0; i <= limit; i++){
    total = total + i;
    console.log(total);
}

// ## 06 - Reverse

// - Créez une variable `sentence` valant "Hello Konexio !"
// - A l'aide d'une boucle for et sans utilisez la fonction .reverse(), faites en sorte d'afficher l'inverse de votre variable `sentence` ("! oixenoK olleH")
var string = "Hello Konexio !";
var splitted = string.split("");
var reversed = [];
for (i = 0; i <= splitted.length; i++) {
  reversed.unshift(splitted[i]);

}
var result = reversed.join("");
console.log(result);

// ## BONUS 2

// - Créez une variable `total` de valeur `0` et une variable `limit` de valeur `10`
// - À l'aide d'une boucle for allant de`0` à `limit`, augmentez la valeur de `total` en lui ajoutant la valeur de `i` (i est l'index de votre boucle)
// - Affichez la valeur de `total` après votre boucle, total doit valoir 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

var n = 0;
var x = 10;
var i = 0
while (i <= x) {
 
  n = n + i;
  i++;
  console.log(n);
}

// - Créez une boucle qui part de 0 et s'arrête à 100
// - À chaque itération :
//     - Si `i` est un multiple de 3 ⇒ affichez "fizz"
//     - Si `i` est un multiple de 5 ⇒ affichez "buzz"
//     - Si `i` est un multiple de 3 et 5 ⇒ affichez "fizzbuzz"
//     - Si `i` est un multilple de 7 ⇒ ne l'affichez pas
//     - Sinon, affichez la valeur de i

for (let i =0; i <=100 ; i++){
    if(i % 3 === 0){
        console.log("fizz")
    }
    else if(i % 5 === 0){
        console.log("buzz")
    }
    else if(i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }
    else if(i % 7 === 0){
        console.log("fizzbuzz")
    }else{
        console.log(i);
    }
}

// ## Bonus III

// - Créez un tableau avec le nom de chacun de vos camarades de promo
// - Affichez aléatoirement le nom de la personne tiré au sort
let promo= ["Mamoudou","Baptiste", "Marzouck", "Alain", "Jerry"];
const randomElement = promo[Math.floor(Math.random() * promo.length)];
console.log(randomElement);

// ## ⭐⭐ Bonus IV

// - Creez un tableau vide
// - Avec une boucle for, ajoutez 20 entiers aléatoires entre 0 et 100
// - Affichez ce tableau
// - Avec une deuxième boucle for, trouvez l'entier le plus grand de votre tableau (pas le droit d'utiliser Math.max)

var tab = [];
var min = 0;
var max = 100;

for(let i =0; i <=20; i++){
    var random = Math.floor(Math.random() * (max - min + 1));
    tab.push(random);
}
console.log(tab);
let tabMax = tab[0];
for(let i =0; i <=tab.length; i++){
    if(tab[i] > tabMax){
        tabMax = tab[i];
    }
}
console.log(tabMax);