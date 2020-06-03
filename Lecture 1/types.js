//Dynamic typing, no set type
const x = 42
const explicit = String(x);  // explicit === "42"
const implicit = x+"";  //implicit === "42" bc of concatenation

console.log(typeof(x))
 
console.log(typeof null)