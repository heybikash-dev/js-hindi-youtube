const name= "Bikash"
const repoCOunt = 50

// console.log(name + repoCOunt + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCOunt}`);


//ANOTHER WAY TO DECLARE THE VARIABLE

const gameName= new String('Bikash-vr-46')

console.log(gameName [0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('a'));

const newString= gameName.substring(0,3)
console.log(newString);

const anotherString= gameName.slice (-7, 2)
console.log(anotherString); 

const newStringOne= "    Bikash    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://bikash.com/bikash%20shah"
console.log(url.replace('%20','-'));

console.log(url.includes('bikash'));
console.log(gameName.split('-'));
