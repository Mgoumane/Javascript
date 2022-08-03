// ## 02 - Table

// - Créez une fonction `multiply` qui recevra un paramètre (un nombre entier)
// - Faites en sorte que la fonction affiche la table de multiplication de ce nombre dans la console (de 1 à 10) ligne par ligne
// - Vous devrez donner l'argument dans le terminal en appelant le programme
    
//     ⇒ Si vous ne donnez pas d'argument, le programme doit afficher "error" dans la console

function multiply (nb){
    for(let i = 1; i <= 10; i++){
        let resultat = nb * i;
        console.log(i + " * " +  nb + " = " +resultat)
    }
}
if(process.argv[2] == null){
    console.log("error");
}else{
    multiply(process.argv[2]);
}