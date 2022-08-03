// 01 - Hello World
console.log("hello world");

//  02 - String

// - Dans votre fichier, créez une variable `test`
// - Donnez lui la valeur `"My name is xxx"` avec votre nom à la place de "xxx"
// - Utilisez ensuite la fonction `console.log()` pour afficher la variable `test` dans la console
// - Lancez ensuite la commande pour exécuter le code

let test = "My name is Mahmoudou";
console.log(test);

// ## 03 - Concatenation

// - Dans votre fichier, créez une variable `name`
// - Donnez lui la valeur `"xxx"` avec votre nom à la place de "xxx"
// - Utilisez ensuite la fonction `console.log()` pour afficher le texte "Nice to meet you" + la variable `name` dans la console
// - Lancez ensuite la commande pour exécuter le code

let name = "Mahmoudou";
console.log( `Nice to meet you ${name}`);

// ## 04 - String Length

// - Dans votre fichier, créez une variable `testLength`
// - Donnez lui la valeur `"I'm very long !"`
// - Utilisez ensuite la fonction `console.log()` pour afficher la longueur de `testLength`
// - Lancez ensuite la commande pour exécuter le code

let testLength = "I'm very long !";
console.log(testLength.length);

// ## 05 - Replace

// - Dans votre fichier, créez une variable `food`
// - Donnez lui la valeur `"croissant is meh"`
// - Utilisez la méthode `.replace()` pour remplacer "meh" par "so good"
// - Utilisez ensuite la fonction `console.log()` pour afficher le résultat dans la console
// - Lancez ensuite la commande pour exécuter le code

let food = "croissant is meh";
food = food.replace("meh","so good");
console.log(food);

// ## 06 - Up and Down

// - Créez une variable `basic` contenant la valeur `"This is Cool"`
// - Créez une variable `basicUp` contenant la version en majuscules de `basic`
// - Créez une variable `basicDown` contenant la version en minuscules de `basic`
// - Faites apparaître les trois variables dans la console

let basic ="This is cool";
let basicUp = basic.toUpperCase();
let basicDown = basic.toLowerCase();
console.log(basic);
console.log(basicUp);
console.log(basicDown);

// ## 07 - Split

// - Créez une variable `word` contenant la valeur `"banana"`
// - Créez une variable `letters` contenant un tableau des lettres de `word`
// - Faites apparaître `letters` dans la console

let word = "banana";
let letters = word.split("") ;
console.log(letters);

// ## 08 - Template

// - Créez une variable `age` contenant la valeur `"xx"` en remplaçant "xx" par votre âge
// - Créez une variable `template` contenant la phrase "I'm ___ years old" en utilisant une template literal et la variable `age`
// - Faites apparaître `template` dans la console

let age = "26";
let template = `I'm ${age} years old`;
console.log(template);

