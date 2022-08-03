function motMystere () {
    const dictionnaire = [
        "bonjour",
        "salut",
        "france",
        "monsieur",
        "madame"
    ];
    var max = 0;
    var min = dictionnaire.length - 1;
    var randomIndex = Math.floor(Math.random() * (max - min + 1) + min);
    resultat = dictionnaire[randomIndex];
    return resultat;
}

module.exports = {
    motMystere,
};
