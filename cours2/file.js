// ## 01 - Number

// - Créez une variable `integer` et donnez lui la valeur `102`
// - Créer une variable `float` et donnez lui la valeur `13.9` (🚨on utilise le point pour les décimaux quand on code !)
// - Affichez dans la console

let integer = 102;
let float = 13.9;
console.log(integer);

// ## 02 - Convert

// - Créez une variable `basic` de valeur `34`
// - Créez une variable `stringified` qui contient la version string de `basic`
// - Affichez `stringified` dans la console
let basic = 34;
let stringified = basic.toString();
console.log(stringified);

// ## 03 - Round

// - Créez une variable `num` de valeur `1.5`
// - Créez une variable `rounded` qui contient l'arrondi de `num`
// - Affichez `rounded` dans la console
let num = 1.5;
let rounded = Math.round(num);
console.log(rounded);

// ## 04 - Arithmétique

// - Créer une variable `test` de valeur `12` et une variable `bis` de valeur `5`
// - Utilisez tous les opérateurs arithmétiques sur ces variables et affichez les résultats

let test = 12;
let bis = 5.
console.log(test % bis);

// ## 05 - Comparaison

// - Créez une variable `test` de valeur `143` et une variable `bis` de valeur `219`
// - Utilisez tous les opérateurs de comparaison avec ces variables et affichez les résultats
let test2 = 143;
let bis2 = 219;
console.log(test2 !== bis2);

// ## 06 - Condition

// - Créez une variable `limit` de valeur `50` et une variable `score` de valeur `64`
// - Créez une condition : si le score est supérieur ou égal à la limite, affichez "Ok good !", sinon affichez "Oh nooo..."
// - Changez la valeur de score pour changer le résultat
let limit = 50;
let score = 50;
if(score > limit || score === limit)
{
    console.log("Ok good")
}else{
    console.log("Oh noo")
}

// ## 07 - Condition II

// - Créez une variable `password` de valeur `"azerty"`
// - À l'aide d'une condition, affichez "The password is secure" si `password` a une longueur plus grande que 5

let password = "azeerty";
if(password.length > 5)
{
    console.log("The password is secure");
}

// ## 08 - Condition III

// - Combinez les deux conditions précedents (exercices 6 et 7)
// - Afficher "Everything is good" si les deux conditions sont vraies
// - Afficher "Something is good" si une des deux conditions est vraie
// - Afficher "Nothing is good" si aucune des deux conditions n'est vraie

if ((score > limit || score === limit) && password.length > 5)
{
    console.log("Everything is good")
}else if((score > limit || score === limit) || password.length > 5){
    console.log("Something is good")

}else {
    console.log("Nothing is good")
}

// ## Bonus

// - Créez une variable `random` qui contient une valeur aléatoire entre 1 et 6 (nombres entiers seulement)
// - À l'aide d'une condition, affichez "Yes I win !" si `random` est égal à 6, et "So close..." dans les autres cas

var max = 6;
var min = 1;
var random = Math.floor(Math.random() * (max - min + 1) + min); // number between min and max
console.log(random);

if (random === 6) {
    console.log("I win");
} else {
    console.log("Try again");
}

// ## Bonus II

// - Créez une variable `month` de valeur `"January"`
// - À l'aide d'un switch, affichez "Winter", "Spring", "Summer" ou "Fall" selon la valeur du mois
// - Changez la valeur de `month` pour changer le résultat

let month = "January";
switch (month) {
    case "January":
    case "February":
    case "March":{
        console.log("Winter");
        break;
    }
    case "April":
    case "May":
    case "June":{
        console.log("Spring");
        break;
    }
    case "July":
    case "August":
    case "September":{
        console.log("Summer");
        break;
    }
    case "October":
    case "November":
    case "December":{
        console.log("Fall");
        break;
    }
}

// ##  Bonus III

// - Créez une variable `roundedNumber` de valeur `3.6`
// - En utilisant uniquement `Math.floor()`, `Math.ceil()`, des opérations mathématiques et un `if () {} else {}` reproduisez le résultat de `Math.round()`
// - Changez la valeur de `roundedNumber` (avec 3.3, 3.8 et 12.4) pour changer le résultat

var number = 123.3;
var decimalValue = number - Math.floor(number);
var result = null;
if (decimalValue >= 0.5) {
    result = Math.ceil(number);
} else {
    result = Math.floor(number);
}

console.log(result, Math.round(number));
