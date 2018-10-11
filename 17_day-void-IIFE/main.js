// ######### Immediately Invoked Function Expressions (IIFE) + void

// ##### Создание самовызывающихсе функций
function test1(){
    console.log('test1 function work');
};
test1();

var test2 = function() {
    console.log('test2 function work');
}
test2();

(function test3(){
    console.log('test3 function work');
})();

!function(arg){ 
    console.log('test'+ arg.toString(), 'function work' )
 } (11)

+function(arg){ 
console.log('test'+ arg.toString(), 'function work' )
} (22)

void function(arg){ 
    console.log('test'+ arg.toString(), 'function work' )
    } (33)



function test1(){
    console.log('test1 function work');
};
console.log(test1())

var test2 = function() {
    console.log('test2 function work');
}
console.log(test2());

console.log((function test3(){
    console.log('test3 function work');
})());

console.log(!function(arg){ 
    console.log('test'+ arg.toString(), 'function work' )
} (11))

console.log(+function(arg){ 
    console.log('test'+ arg.toString(), 'function work' )
} (22))

console.log(void function(arg){ 
    console.log('test'+ arg.toString(), 'function work' )
} (33))


var foo = void 0;
let bar = void null;
let buz = void 'Комментарий, описывающий что это и зачем. Удобно';

console.log('foo', foo)
console.log('bar', bar)
console.log('buz', buz)

var a = 'abc';
var b = 'cde';
var c = void(c = a, a = b, b = c)
console.log(a, b, c);
// a = 'cde'
// b = 'abc'
// c = undefined


var x = void 'foo' + '!!!';
console.log(x);

// "undefined!!!" 





console.log( void 0 === undefined );
console.log( void 'послание программисту' === undefined );
console.log( 1[0] === undefined );
console.log( 0..n === undefined );
console.log( false[0] === undefined );
console.log( true[1] === undefined );
console.log( false.true === undefined );
console.log( ''.null === undefined );
console.log( 'послание'['программисту'] === undefined );
console.log( (_=>_).nop === undefined );
console.log( {}.nop === undefined );
console.log( ''[''] === undefined );
console.log( [][0] === undefined );
console.log( []._ === undefined );




// 1. Что делает этот код?
console.log(Array(3).fill(3));

// 2
console.log([1, 2, 3].fill(3));

// 3
var arr = Array(3).fill({});
arr[0][1] = 1;
console.log('arr', arr);

// обекты что лежат в массиве ето ссылки на один и тот же обект
// для исправления ситуации нужно 
var arr1 = Array(3).fill({});
arr1[0] = {1: 1};
console.log('arr1', arr1) 

// или 

var arr2 = Array(3).fill().map(() => ({}))
console.log('arr2', arr2) 




let users = [
    {name: 'Alex', experience: ['React', 'Babel']},
    {name: 'Boba', experience: ['Ember', 'jQuery']},
    {name: 'Lola', experience: ['Angular', 'TS']},
];
// Нужны только люди с такими скилами
let skills = ['Angular', 'React'];


let filtered = users.filter(x =>
x.experience.some(i => skills.includes(i))
);
console.log(filtered);



x.experience.some(i => skills.includes(i))


// const _ = require('underscore');

// let filtered = users.filter(x =>
//   _.intersection(skills, x.experience)
// );
// console.log(filtered);




// Можно улучшить:
// x.experience.some(i => skills.includes(i))

// let skillsSet = new Set(skills);
// experience.some(el=>skillsSet.has(el))