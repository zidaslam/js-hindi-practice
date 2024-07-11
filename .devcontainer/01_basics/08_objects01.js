//Object literals

//method "symbol"
// const mysym=Symbol("key1")


const jsUser={
    name:'Hitesh',
    // [mysym]:"key1",
    age:19,
    location:'jaipur',
    email:'hitesh@google.com',
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
    
}
// // console.log(jsUser)
// // console.log(jsUser[mysym])

// jsUser.greeting= function(){
//     console.log("Hello Good Morning")
// }

// jsUser.greetingTwo= function(){
//     console.log('Hello Good Morning, ${this.name}');
// }
// console.log(jsUser.greetingTwo())

// Object singleterm

// const tinderUser=new Object()
// const tinderUsers=new {}

// const obj1={1:"a", 2:"b"}
// const obj2={3:"c", 4:"d"}
// const obj3={...obj1,...obj2}
// console.log(obj3);
// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
// object de-structure

const course= {
       coursename:'Js in hindi',
       price:10000,
       courseinstructor:'hitesh'

}

const {courseinstructor:instructor}=course
console.log(instructor);