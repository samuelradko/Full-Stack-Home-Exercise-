// 1
const info = {
    firstName:"Samuel",
    lastName:"Radko",
    age: 24,
    carName:"Mazda",
    fullName(){return this.firstName + " " + this.lastName;}
        
};
info.fullName()
console.log(info.fullName())

// 1(p2)

let date = new Date(1996, 0, 26)
console.log(date)

// 2 
const info2 = {
    firstName:"Samuel",
    lastName:"Radko",
    age: 24,
    carName:"Mazda",
    date,
    fullName(){return this.firstName + " " + this.lastName + " " + this.date + " " +this.age + " " + this.carName;}
        
};
info2.fullName()
console.log(info2.fullName())


// 3 

const question = new Date(1998, 0, 32)
console.log(question)
const question2 = new Date(1998, 0, 33)
console.log(question2)


// // Answer for 3 //
// Question // - The date remains as I wrote it in the code 
// Question2 // - The date changes to a new month, in the code (0, 32) - Need to be Januray, but because there is only 31 days in Januray, placing a number higher then 31 
// // will change the month and the days, so if I will place (0, 33) the code will give me back "Feb 01" and not "Jan 33".
// Note! - JavaScript starting to count from 0 and not 1, so if we will place "new Date(1998, 0, 32)" the outcome will be "1998-01-31"