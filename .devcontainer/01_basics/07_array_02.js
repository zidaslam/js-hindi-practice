const marvel_heros=["thor","Ironman","spiderman"]
 const dc_heros=["superman","flash","batman"]

// marvel_heros.push(dc_heros);
// console.log(marvel_heros)
// console.log(marvel_heros[3][2])
//method=> concat
// const new_heros=marvel_heros.concat(dc_heros);
// console.log(new_heros)
//method-> spread
const allHeros=[...marvel_heros,...dc_heros]
console.log(allHeros)

const x=[1,2,3,[4,5,6],[7,8,9],10,[11,12,[4,6]]]
const y=x.flat(Infinity)
console.log(y)
//method=> "isArray","from","of"
console.log(Array.isArray(y))// is this array or not check
//convert into array
console.log(Array.from("zaid"))

let score1=200
let score2=300
let score3=400

console.log(Array.of(score1,score2,score3))