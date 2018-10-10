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




function sumArgs1() {
    var sum = 0;
    for (var i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum
}
// 6, аргументы переданы через запятую, без массива
console.log( 'sumArgs1', sumArgs1(1, 2, 3, 8, 10) ); // 24




function sumArgs2() {
    // скопируем reduce из массива
    arguments.reduce = [].reduce;
    return arguments.reduce(
        function(a,b) {
            return a + b;
    });
}
console.log( 'sumArgs2', sumArgs2(4, 5, 6, 10, 10) ); // 35


function sumArgs3() {
    // запустим reduce из массива напрямую
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  console.log( 'sumArgs3', sumArgs3(4, 5, 6) ); // 15








  var sum = function () {
    return [].reduce.call(arguments, function(a, b) {
      return a + b;
    });
  }
  
  var mul = function () {
    return [].reduce.call(arguments, function(a, b) {
      return a * b;
    });
  }
  function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
  }

  console.log(applyAll(sum, 1, 3, 4, 5));
  console.log(applyAll(mul, 1, 2, 3, 4, 5));
  console.log(applyAll(sum, 5, 5));
