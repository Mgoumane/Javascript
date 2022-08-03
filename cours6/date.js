// ## 01 - Format

// - Créez une fonction `formatDate` qui reçoit en paramètre une string (au format aaaa-mm-jj)
// - La fonction doit renvoyer la date au format jj/mm/aaaa
// - Appelez la fonction et affichez son résultat dans la console

function formatDate(stringDate) {
    var date = new Date(stringDate);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}
  
console.log(formatDate("2020-12-11"));
