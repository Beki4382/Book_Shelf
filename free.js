// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     };
// };
// var me = new Person("bek ", 22);
// console.log(`hi ${name} you are ${age} old!`);
// console.log(__dirname);
const { readFile, writeFile } = require('fs');
readFile('./txts/second.txt', 'utf8', (err, result) => {
    if (err) { console.log(err) }
    console.log(result)
})

writeFile('./txts/second.txt', 'this is our first apparent!', (err, result) => {
    if (err) { console.log(err) }
    console.log(result)
})