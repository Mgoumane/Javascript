 // Récuperer une requete de type GET avec fetch vers le service web
fetch("https://mockbin.com/request?greetings=salut")
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
    })
    .then(function(value) {
         console.log(value.queryString.greetings) 
    })
    .catch(function(err) {
      // Une erreur est survenue
    });
  kmkml,ml