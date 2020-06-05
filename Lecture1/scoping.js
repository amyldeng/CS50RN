const thisisAConst = 50
// ^ can't change

const constObj = {}
constObj.a = 'a'
//Ok because just mutated reference 

let thisIsALet = 51
thisIsALet = 50
//let thisIsALet = 51 would be errors

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'new value'
//not same protection as let and const

console.log(thisIsAVar)

function thisIsHoisted(){
    console.log('this is a function declared at the bottom')
}
//hoisting, something declared at bottom like ^ can work when called at top

const thisIsNotHoisted = function(){
    console.log('should this be hoisted')
} //this cannot be changed, const not available for use until declared


