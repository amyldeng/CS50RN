/*
Storing by reference, reference memory location. 
Primitives = immutable
 */

const o = new Object()
o.firstName = "Amy"
o.lastName = 'Deng'
o.isTeaching = true
o.greet = function(){console.log('hi!')}
const o2 = {} // new object
o.firstName = "Amy"
o['lastName'] = 'Deng'
const key = "isTeaching"
o[key] = true
o['greet'] = function(){
console.log('hi!')
}

const o3 = {
    firstName: 'Amy',
    lastName: 'Deng',
    isTeaching: true,
    greet: function(){
        console.log('hi!')
        },
    address:{
        street: 'Main st',
        number: 123,
    }
}
const key = "number"
o3.address[key] //when you don't know what you are looking for but know type
//can't set key ro number

