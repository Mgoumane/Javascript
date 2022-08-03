// ## 01 - Object

// - Créez une variable `cat` contenant les clés suivantes : `name` de valeur `"Garfield"`, `age` de valeur `3` et `isCute` de valeur `true`
// - Affichez `cat` dans la console
// - Affichez la valeur de `age` dans la console
// - À l'aide d'une condition, affichez "So cute !" si la valeur de `isCute` est `true`

var cat = {
    name : "Garfield",
    age : 3,
    isCute : true,
};
console.log(cat);
console.log(cat.age);
if(cat.isCute = true){
    console.log("So cute");
};

// ## 02 - Combine
// - Créez une variable `cat2` qui reprend la structure de cat : mettez d'autres valeurs pour chaque clé
// - Créez une variable `cats` qui contient un tableau contenant les variables `cat` et `cat2`
// - Affichez la valeur de `age` de `cat` dans la console
// - Affichez la valeur de `isCute` de `cat2` dans la console

var cat2 = {
    name : "Grosminet",
    age : 3,
    isCute : false,
};

cats = [cat,cat2]
console.table(cats);
console.log(cat.age);
console.log(cat2.isCute);

// ## 03 - Even

// - Créez une fonction `checkIfEven` qui reçoit un paramètre `num`
// - Dans la fonction, à l'aide d'une condition, affichez "even" si `num` est pair, "odd" si il est impair
// - Appelez votre fonction plusieurs fois avec des chiffres différents comme argument pour vérifier les résultats

function checkIfEven(num) {
    if (num % 2 === 0) {
        console.log("even")
    }else{
        console.log("odd")
    }
}
checkIfEven(1);
checkIfEven(2);
checkIfEven(3);

// ## 04 - Compare
// - Créez une fonction `compare` qui reçoit deux paramètres `num1` et `num2`
// - Dans la fonction, à l'aide d'une condition, affichez selon les cas :
//     - "`num1` is bigger" si `num1` est plus grand
//     - "`num2` is bigger" si `num2` est plus grand
//     - "both are the same" si ils sont égaux
// - Appelez votre fonction plusieurs fois avec des chiffres différents pour vérifier les résultats

function compare(num1,num2) {
    if (num1 > num2) {
        console.log("num1 is bigger");
    }else if (num2 > num1){
        console.log("num2 is bigger");
    }else{
        console.log("both are the same");
    }
}
compare(2,2);

// ## 05 - Add Up

// - Créez une fonction `addUp` qui reçoit un paramètre `num`
// - À l'aide d'une boucle, ajouter les chiffres de 1 à `num`
// - Appelez votre fonction avec le chiffre 12 et vérifiez que vous obtenez 78

function addUp(num) {
    depart = 0;
    for (let i = 0; i <= num; i++) {
        depart = depart + i;
    }
    return depart;
}

console.log(addUp(12));

// ## 06 - Time

// - Créez une fonction `format` qui reçoit un paramètre `num` qui représente des secondes
// - Faites en sorte que la fonction retourne un format `heures : minutes : secondes`
// - Appelez votre fonction avec l'argument `3700` et vérifiez que vous obtenez `1:1:40`

function format(num){
    var hours = Math.floor(num / 3600);
    var restHours = num % 3600;
    var minutes = Math.floor(restHours / 60);
    var secondes = restHours % 60;
    console.log(`${hours} : ${minutes} : ${secondes}`);
}
format(3700);

// - Créez une fonction `generatePassword` qui reçoit un paramètre `num`
// - La fonction génère un mot de passe aléatoire, avec autant de lettres que la valeur de `num`
// - Le mot de passe contiendra uniquement des lettres majuscules
// - Si `num` est plus petit que 6 et plus grand que 15, la fonction retourne "error"

function generatePassword(num) {
    var max = 122;
    var min = 48;
    var password = "";
    for (var i = 0; i < num; i++) {
        var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        while (randomIndex >= 58 && randomIndex <= 64) {
            randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
        }
        var letter = String.fromCharCode(randomIndex);
        password += letter;
    }

    console.log(password);
}
generatePassword(10);

// ## Bonus II

// - Créez une fonction `launchDice` qui reçoit un paramètre `numberOfDice`
// - La fonction va lancer aléatoirement `numberOfDice` dés et retourner leur somme
// - Appelez la fonction deux fois avec pour parametre 5, une fois pour le `joueur1` et `joueur2`
// - Afficher le joueur gagnant (celui ayant le plus grand score)

var max = 1;
var min = 6;

function launchDice(numberOfDice){
    somme = 0;
    for (var i = 0; i < numberOfDice; i++){
        var dice = Math.floor(Math.random() * (max - min + 1) + min);
        somme = somme + dice;
    }
    return somme;
}
console.log(launchDice(5));
console.log(launchDice(5));