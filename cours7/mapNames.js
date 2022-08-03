// ## 03 - Map Names

// - Créez une variable `longNames` contenant la valeur suivante :
var longNames = [
	{
		firstName: "Jane",
		lastName: "Doe"
	},
	{
		firstName: "John",
		lastName: "Smith"
	}
];

// - Créez une variable `shortNames` qui appellera la méthode `.map()` pour contenir une version compacte de `longNames` :
var shortNames = longNames.map(element =>  element.firstName +"  " +element.lastName  );
console.log(shortNames)
