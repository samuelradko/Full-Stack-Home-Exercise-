// // Task one - Create two variables x and y: x = 10(min), y = 15(max).
// * Create a variable named rand that will print a random result in the range from x to y


function randomRange(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
};
console.log(randomRange(10, 15))


// // Task Two - Create a loop with the length of the value "somePhase". "somePhase" will be a variable containing a string.
// * Iterate over "i" until it reaches the maximum value of "somePrhase" in the "for" loop

let random = "littledobermanunderatree";
for (let i = 0; i < random.length; i++) {
  console.log(random[i]);
}


// self bounus task - Create a loop that will multiple itself by 2 until it will reach 1000 and it will stop at 1000 exactly

const multiplier = 10;
for (let i = 0; i < 100; i++) {
    let result = multiplier * i+10;
    console.log(result);
}

