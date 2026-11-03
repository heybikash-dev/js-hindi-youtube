// Date

let myDate = new Date()
console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());

// console.log(typeof myDate);

// let myCreatedDate = new Date (2026, 10, 4)

// let myCreatedDate = new Date (2026, 10, 4, 9, 21)

// let myCreatedDate = new Date ("2026-10-04")

let myCreatedDate = new Date ("10-04-2026")
// console.log(myCreatedDate.toLocaleString());

    let myTimeStamp = Date.now()
    // console.log(myTimeStamp);
    // console.log(myCreatedDate.getTime());
    // console.log(Math.floor(Date.now()/1000));

    const newDate= new Date()
    console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());


newDate.toLocaleString('default',{
    weekday: "long"
})

    
    










