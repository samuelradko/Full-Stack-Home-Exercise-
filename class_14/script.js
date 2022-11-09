// Tasks from lesson 23

// Task 1

function age(x) {
    if (x >= 95) {
        return console.log(`Most Valubale Grandpa!`) // 5 - If the age is over 95, print: "Most Valuable Grandpa!"
    } else if (x >= 60) {
        return console.log(`Please call me sir!`) // 4 - If the age is over 60 print: "Please, call me sir".
    } else if (x == 50) {
        return console.log(`GOLDEN!`) // 6 - Create a statement that says only if age is 50 print: “GOLDEN”.
    } else if (x >= 30) {
        return console.log(`Aging like a fine wine arent't you?`) // 3 - If the age is over 30, print: "Aging like a fine wine aren't you?".
    } else if (x >= 18) {
        return console.log(`You may enter the site`) // 2 - If the age is equal to or over 18 print: "You are still young but good to go".
    } else (x < 18) 
        return console.log(`Sorry I can't let you pass`) // 1 - "Create a statement that says if age is less than 18 print: "Not valid"."
    };
age(17)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Tasks from lesson 24

// Task 1 - Create a case swtich that gets today's day and record what day it is.

const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("It's Sunday, time to relax!");
        break;
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    default:
        console.log("Something went horribly wrong...");
};


// Task 2 - Print all even numbers from 0 to 100 where 100 is greater than 0.

for (let i = 100; i > 0; i-=2) {   
    console.log(i)
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Task from lesson 25

// Task 1 - Create a string variable with random words and display the length.

const random = ("Onethingonethong", "Tuesday", "LorenEpuisim", "JesusChrist", "CallOfDutyMordenWarfareTwo")
console.log(random.length)


// Task 2 - Create another variable containing the following string: "Fruits, Meat, Vegetables".

const arr = ["Fruit", "Meat", "Vegtables"]
console.log(arr.pop(0, 1)) // Task 3 - Use the method that will "delete" all sentences except "Vegetables" and print.

// Task 4 - Create a variable with only uppercase letters and convert them all to lowercase.

const funny = "MID GAME NIGHT SUMMER VIBE MATE";
console.log(funny.toLocaleLowerCase())

// Task 5 - Create a variable with only lowercase letters and convert them all to uppercase.

const funny2 = "small case under a roof"
console.log(funny2.toLocaleUpperCase())
 

// Task 6 - Replace "Meat" from the string with "Tree".

const arr2 = "Fruit Meat Vegtables"
let change = arr2.replace("Meat", "Tree");
console.log(change)

