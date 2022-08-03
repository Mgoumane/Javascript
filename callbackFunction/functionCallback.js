const tableau = [1,2,3];

function foo(array, callback){
    const newArray = [];
    for(i = 0; i < array.length; i++){
        newArray.push(callback(array[i]));
    }
    return newArray;
}


const resultat = foo(tableau, function(val){
    return val * 4;
});

console.log(resultat);

