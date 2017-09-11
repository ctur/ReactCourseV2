var nameVar = 'asd';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
 // let nameLet = 'a'; -> duplicate declaration error
 // cannot define let again
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'c'; -> duplicate declaration error
// cannot define const again & cannot reassign
console.log('nameConst', nameConst);

function getPetName() {
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
// var , let , const are all function scoped
console.log(petName); // pet name is not defined

// Block scoping
// const and let are block scoped , var is not block scoped 
// if statement below is a block

const fullName = 'c tur';
let firstName;

if(fullName){
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

// console.log(firstName); -> will be firstName is not declared because const is block scoped
// use this pattern for let to console declare it before if statement
console.log(firstName);