// 1. Conversion
let score=33
console.log(typeof score);
let value='33abc'
console.log(typeof value);
let valueInNumber=Number(value)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // NaN means Not a Number
let isLoggIn="aslam"
let booleanIsLoggedIn=Boolean(isLoggIn)
console.log(booleanIsLoggedIn);

//1=> true
//0=>false
// ""=> false
// "aslam" => true

// 2. Operation
let str1="hello"
let str2=" Zaid"
let str3= str1+str2
console.log(str3);
console.log(1+2+"2"+2+2);
console.log("1"+2+2+2+2);
console.log(1+2+2+2+"2");
console.log(+true);
let gameCounter=100
gameCounter++;
console.log(gameCounter);

// 3. Data types summary

//primitive => 7 categories => 
    // 1. string,2. Number, 3.Boolean,4. null , 5. undefined, 6. Symbol, 7.BigInt

//symbol example---
const id = Symbol('123')
const anotherId= Symbol('123')
console.log(id==anotherId);

//bigInt example----- represent n at the last 
const bigNumber= 12172355151547154757n

//Non primitive (Reference)
// 1.Array , 2. objects, 3. Functions 
// Array example----
const heros=["shaktiman","krish","dogo"];
// Object examples--
let myobj={
    name:"zaid",
    age:22,

}

//Function examples----
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);


// memories
// stack(primitive), Heap(Non-primitive)

let userOne= {
    name:'nitish',
    email:'user@google.com',
    upi:'user@ybl'
}
let userTwo=userOne
userTwo.email = 'nitish@google.com'
console.log(userOne.email);
console.log(userTwo.email);