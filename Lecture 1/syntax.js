const firstName = "Jordan";
const lastName = 'Hayashi';

const val = 13;

const arr = [
    'string',
    42,
    function() {console.log('hi')}
]

arr[2]() //prints hi

console.log(2) //prints 2
for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}
console.log(typeof null) //object