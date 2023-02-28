// L’idée est la suivante : nous allons définir une fonction dont le rôle est d’effectuer une opération asynchrone et cette fonction va, lors de son exécution, créer et renvoyer un objet Promesse.

// Au final, on fait une « promesse » au navigateur ou au programme exécutant notre code : on l’informe qu’on n’a pas encore le résultat de telle opération car celle-ci ne s’est pas déroulée mais que dès que l’opération sera terminée, son résultat sera disponible dans la promesse et qu’il devra alors exécuter tel ou tel code selon le résultat contenu dans cette promesse.

// Le code à exécuter après la consommation d’une promesse va être passé sous la forme de fonction de rappel qu’on va attacher à la promesse en question.

const  promesse = new Promise((resolve, reject)=>{
    // Tâche asynchrone à réaliser;
    // Appel de resolve() si la promesse est résolue
    // ou appel de reject si elle est rejetée
});


// async function test() {
//     console.log('Ready');
//     let example = await fetch('http://httpbin.org/get');
//     console.log('I will print second');
//   }
  
//   test();
//   console.log('I will print first');
  
//   function test() {
//     console.log('Ready');
//     let example = fetch('http://httpbin.org/get').then((res) => {
//       console.log('This is inside the then() block');
//     });
//     console.log('This is after the fetch statement where we are now executing other code that is not async');
  
//   }
  
//   test();
//   console.log('this is after the entire function');


