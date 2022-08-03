function multiply (nb){
    for(let i = 1; i <= 10; i++){
        let resultat = nb * i;
        console.log(i + " * " +  nb + " = " +resultat)
    }
}
function addition (nb){
    for(let i = 1; i <= 10; i++){
        let resultat = nb + i;
        console.log(i + " + " +  nb + " = " +resultat)
    }
}

module.exports = {
    multiply,
    addition
};