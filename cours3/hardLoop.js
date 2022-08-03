// ### 01 - Sum

// Créez un tableau vide `numbers`

// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 0 et 100 dans votre tableau

// à l'aide d'une autre boucle for, calculez la somme des éléments de votre tableau

let numbers = [];
let min = 0;
let max = 100;
for (let i = 0; i < 50; i++) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    numbers.push(random);
}
somme = 0;
for (let index = 0; index < numbers.length; index++) {
    
    somme = somme + numbers[index];
}

// console.log(somme);

// ### 02 - Max

// Créez un tableau vide `numbers`
// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau
// à l'aide d'une autre boucle for, trouvez le maximum des éléments de votre tableau (sans utiliser la fonction)

let numbers2 = [];
min = 50;
max = 200;
for (let i = 0; i < 50; i++) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    numbers2.push(random);
}

sum = numbers2[0];
for (let index = 0; index < numbers2.length; index++) {
    sum = numbers2[index] ;
    if(index > sum) {
        sum = index;
    }
}
// console.log(sum);

// ### 03 - Unique

// Créez un tableau vide `numbers`

// à l'aide d'une boucle for, ajouter 50 éléments aléatoire entre 50 et 200 dans votre tableau

// à l'aide d'une boucle while affichez le premier élément de votre tableau superieur ou égal à 75 et inferieur ou égal à 100

let numbers3 = [];
min = 50;
max = 200;
for (let i = 0; i < 50; i++) {
    random = Math.floor(Math.random() * (max - min + 1) + min);
    numbers3.push(random);
}
let result = numbers3[0];
let x = 0;
while (result < 75 || result > 100) {
    x++;
    result = numbers3[x];
    
}
// console.log(result);

// ### 04 - Nested Loop

// Créez un tableau `words` avec les mots suivants

// ```jsx
// var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
// ```

// A l'aide d'une boucle for, utilisez la méthode split pour créer un tableau contenant les lettres de chaque mot.

// A l'aide d'une deuxieme boucle for (à l'interieur de la première), comptez le nombre de "o" de chaque mot.

// Retournez le nombre total de "o"

// Résultat attendu: 8

var words = ["hello", "goodbye", "yes", "no", "stop", "go go go"];
var total = 0
for (let i = 0; i < words.length; i++) {
    let x = words[i].split("");
    let nombreO = 0;
    for (let y = 0; y <= x.length; y++ ){
        if(x[y] === "o"){
            nombreO = nombreO + 1;
        }
    }
    console.log(nombreO);
    total = total + nombreO;
}
console.log(total);
