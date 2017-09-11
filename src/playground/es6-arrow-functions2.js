// arguments object - no longer bound with arrow functions

const add = function(a, b) {
    console.log(arguments);
    return a + b;
};

console.log(add(55, 1, 1001));

const addArrow = (a , b) => {
    // console.log(arguments); // arguments is not defined
    return a + b;
};

// this keyword - no longer bound

const user = {
    name: 'c',
    cities: ['Ankara' , 'Antalya', 'Valencia'],
    printPlacesLived() { // new method syntax
        return  this.cities.map((city) =>  this.name + ' has lived in ' + city + '!' ); // map is btter then forEach return array
     

        // *** important use this pattern
        const that = this;
        // we can use this converting regular func. exp. to arrow func.
        // this.cities.forEach((city) => {
        //     // this.name is not accesible 
        //     console.log(that.name + ' has lived in ' + city);
        // });
    } // cannot convert to arrow , we can use this version rather than regular func. exp.
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [1, 2, 3],
    multiplyBy: 3,
    multiply(){ return this.numbers.map((number) => number * this.multiplyBy); }
};

console.log(multiplier.multiply());