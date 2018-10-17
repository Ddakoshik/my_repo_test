// ***************************************
// Карирование - функцыональное програмирование 
// Для передачи функции в кари, будет ждать заданого количества аргумет=нтов а потом выполнятся
  
  var curry =  function (fn) {
      var arity = fn.length
    console.log('arity', arity);
    
    return function f1(...args) {
        console.log('f1 args', args)
      if (args.length >= arity) {
          console.log('enough arguments')
        return fn(...args)
      } else {
          console.log('need more arguments')
        return function f2(...moreArgs) {
            console.log('f2', moreArgs)
          var newArgs = args.concat(moreArgs)
          return f1(...newArgs)
        }
      }
    }
  }
  

  var add = function (a, b ,c) {
      return a + b + c;
  }
  var curriedAdd = curry(add);

  
  var f;
  setTimeout(function(){
    return f = 5;
  },500);

  var e = setTimeout(function(){
    return 4;
  },1500);

  var d = setTimeout(function(){
    return 10;
  },3500);


  var result = curriedAdd(f)(e)(d)


  
  console.log('result', result)