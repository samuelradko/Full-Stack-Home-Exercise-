// Lesson 26

// Task 1 - Create a variable which is equal to some decimal number and convert it to a string.

let x = 26.54884
let xn = x.toString()
console.log(xn)
console.log(typeof(xn))

// Task 2 - Create a variable that is equal to some decimal number and round it to the nearest number.

let v = 293.384
let va = v.toFixed()
console.log(va)

// Task 3 - Convert x to a string only if x is a number, and correct the value (if the given value was decimal).

function num(xv){
    if (Number(xv)){
    return xv= xv.toString()
}else {
    console.log("This is not a number")
}
};
console.log(num(666))
console.log(typeof(num(666)))
