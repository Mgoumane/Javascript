// ## 02 - Age

// - Créez une fonction `calculateAge` qui reçoit en paramètre une date au format string (qui sert de date de naissance)
// - La fonction doit calculer l'âge de la personne (en années) née a ce moment là, en fonction de la date d'aujourd'hui
// - Appelez la fonction et affichez son résultat dans la console

function calculateAge(birthday) {
    var date = new Date(birthday);
    var age = new Date(new Date() - date);
    return age.getFullYear() - 1970;
  }
  
  console.log(calculateAge("1996-07-25"));

  