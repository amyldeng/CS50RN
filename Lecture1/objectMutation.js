const o = {
    a:'a',
    b:'b',
    obj: {
        key: 'key',
    },
}
const o2 = Object.assign({},o)
//o.a = 'new value' //gets updated
//console.log(o.obj[key])
// console.log(o.a)
//deep copy
function deepCopy(obj){
    //check if vals are objects
    const keys = Object.keys(obj)
    const newObject = {}

    for(let i = 0; i<keys.length; i++){
        const key = keys[i]
        if(typeof obj[keys[i]] === 'object') //type of obj passed in by keys, use three equal signs
        {
            newObject[key]  = deepCopy(obj[key])
        } else{
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o3 = deepCopy(o)
o.obj.key = 'new key!'
console.log(o3.obj.key)
