//// Task 1


let x = 10
let y = 25
try {
    b = x + y;
    if (b < 100)
    throw "Error has occurred B is less than 100";
}catch(e) {
    console.log(e);
}

// Task 1.2

try {
    b = x + y;
    if (b == 35 || b > 100)
    throw `Error has occurred B is equal to 35`;
}catch(e) {
    console.log(e);
}

/// Task 1.3

try {
    b = 101
    if (b > 100)
    throw `Error has occurred B is greater than 100`;
}catch(err) {
    console.log(err);
}

//// Task 2

let a = "Hello world!"

try {
    a = Number(a)
    throw "String is not a number"
}catch(e) {
    console.log(`${a} is not a number`
    );
}


//// Task 3
try{
    toString(a)
    throw "Error has occurred"
}catch(e){
    console.log(`${a} is not a string`);
}