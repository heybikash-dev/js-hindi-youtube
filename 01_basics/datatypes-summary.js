// Primitive
 
// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt 



const score = 100
const scoreValue= 100.3

const isLoggedIn = false

const outsideTemp= null

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
 
console.log(id === anotherId);

const bigNumber = 2343521212464332n


// Reference (Non-Primitive)

// Array , Objects, Functions

const heros =["shaktiman","Batman","Nani"];

let myObj={
    name : "Bikash",
    age : 22,
}

// const myFunction= function(){
//     console.log("Hello World");
    
// }

// console.log(typeof heros);


//******************************************************************** */

let myYoutubename = "back2back"
let anothername = myYoutubename
anothername="527back2back"

console.log( myYoutubename);
console.log(anothername);

let userOne={
    email: "aiarchitech@gmail.com",
    upi: "user@324bl"

}
let userTwo = userOne

userTwo.email= "back2back527@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

