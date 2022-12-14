// Read And Write Files With Node.js

// fs module is a core module, so we don't need to install it
// import { readFile, writeFile, appendFile } from 'fs';


const fs = require('fs');



// readFile is an asynchronous function
// readFile takes 3 arguments: file name, encoding, callback function
// callback function takes 2 arguments: error, data

// readFile('readme.txt', 'utf8', (err, data) => {
//     if (err){
//         console.log(err);
//     } 
//     console.log(data);
//   }
// );




// // writeFile is an asynchronous function
// // writeFile takes 3 arguments: file name, data, callback function
// // callback function takes 1 argument: error

// writeFile('writeme.txt', 'Goodbye world~', (err) => {
//     if (err){
//         console.log(err);
//     } 
//     console.log('Write operation completed');
//     }
// );


// // // appendFile is an asynchronous function
// // // appendFile takes 3 arguments: file name, data, callback function
// // // callback function takes 1 argument: error

// appendFile('writeme1.txt', '\n \t\ \t Hello World!', (err) => {
//     if (err){
//         console.log(err);
//     } 
//     console.log('Append operation completed');
//     }
// );



// Q.1: split the data from readme in to an array of substrings (words). and print it!
fs.readFile('readme.txt', `utf8`, (err, data) => {
    if (err) {
        console.log(err);
    }
    datafile = data;
    arrData()
}
);

let arrData = () => {
    let arr = datafile.split(' ')
    console.log(arr)
};


// Q.2: find the word that appeard the maximum amount of time in the text.

fs.readFile('ex1.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    repeat = data;

    // function here 
    findMostRepeatedWord()
}

);

let findMostRepeatedWord = () => {
    let words = repeat.split(' '); {
        for (let i = 0; i < words.length; i++) {
            if (i === words.length - 1) {
                console.log(words[i]);
            }
        }
    }
}
