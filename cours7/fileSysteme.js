// ## 01 - File System

// - Créez un fichier `jour07.txt` contenant le code suivant :
// à l'aide du module fs, affichez le contenu de jour07.txt dans la console

var fs = require('fs'); 
console.log("C'est parti pour la recherche :");
fs.readFile("./jour07.txt", function (err, data) {
    if (err) {
       console.error(err);
       return;
    }

    console.log("Lecture en différé : " + data.toString());
 });
