var user = {
    firstName: "Василий",
    lastName: "Петров",
    surname: "Петров",
    patronym: "Иванович"
  };
  

function showFullName1() {
    console.log( this.firstName + " " + this.lastName );
  }
// функция вызовется с this=user
showFullName1.call(user) // "Василий Петров"








function showFullName2(firstPart, lastPart) {
console.log( this[firstPart] + " " + this[lastPart] );
}
// f.call(контекст, аргумент1, аргумент2, ...)
showFullName2.call(user, 'firstName', 'surname') // "Василий Петров"
showFullName2.call(user, 'firstName', 'patronym') // "Василий Иванович"


showFullName2.call(user, 'firstName', 'surname');     // call
showFullName2.apply(user, ['firstName', 'surname']);  // apply



var arr = [];
arr.push(1);
arr.push(5);
arr.push(2);

// получить максимум из элементов arr
console.log( Math.max.apply(null, arr) ); // 5

console.log(Math.max.apply(Math, [1,2,3])); // 3



function sumArgs() {
    var sum = 0;
    for (var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum
  }
  
  console.log( 'sumArgs', sumArgs(1, 2, 3, 8, 10) ); // 6, аргументы переданы через запятую, без массива