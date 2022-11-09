// // Task one - Create two variables x and y: x = 10(min), y = 15(max).
// * Create a variable named rand that will print a random result in the range from x to y


function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min; // Rather then using "x = 10 and y = 15", I've used the "min, max" parameters which allows me to change the numbers without using "const" or "let".
};
console.log(randomRange(10, 15))


// // Task Two - Create a loop with the length of the value "somePhase". "somePhase" will be a variable containing a string.
// * Iterate over "i" until it reaches the maximum value of "somePrhase" in the "for" loop

let random = "littledobermanunderatree";
for (let i = 0; i < random.length; i++) { // by using the property "length" it return the string in a number which makes the loop to seperate each letter the loop will end when it will reach to the end of the string which is "E".
  console.log(random[i]);
}


// self bounus task - Create a loop that will multiple itself by 10 until it will reach 1000 and it will stop at 1000 exactly

// in this task the multiplier starts from the number 10 and not 0, because the "i" is set to be the number 10 ("let result = multiplier * i+10;) meaning the i will start counting from 10 and not 0 because 0 + 10 = 10 
 // We are able to get in the loop to 1000 and not 100 is becasue the loop multiplies itself by 10, meaning I've set the loop to stop when the "i" is bigger then 100 but becasue it has a * sign it will show the result as 1000
const multiplier = 10;
for (let i = 0; i < 100; i++) {
    let result = multiplier * i+10; 
    console.log(result);
}

// Another method you can use is

const multiplier2 = 10;
for (let i = 0; i <= 100; i++) {
    let result = multiplier2 * i;
    console.log(result);
}

