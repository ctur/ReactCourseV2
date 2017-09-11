const square = function(x){
    return x * x;
};

// arrow function with verbose syntax
// value explicitly returning
// const squareArrow = (x) => {
//     return x * x;
// }; // all arrow functions are anonymous

// arrow function with expression(shorthand) syntax
// value implicitly returning
const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(4));

// const getFirstName = (fullname) => {
//     return fullname.split(' ')[0];
// };

const getFirstName = (fullName) => fullName.split(' ')[0];
const getLastName = (fullName) => fullName.split(' ')[1];

console.log(getFirstName('Deniz Bozkurt'));
console.log(getLastName('Deniz Bozkurt'));



