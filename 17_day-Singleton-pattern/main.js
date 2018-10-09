// Singleton - pattern  
// имеет одну точку входа в  модуле и ссылается на один обект


var counterModule = (function (){
    var counter = 0;
    var instance;

    var getCounter = function () {
        return console.log(counter)
    }
    var increaseCounter = function () {
        counter++;
    }
    var createInstance = function () {
        console.log('create instance');
        return {
            getCounter: getCounter,
            increaseCounter: increaseCounter
        }
    }
    return {
        getInstance: function () {
            return instance || (instance = createInstance())
        }
    }
}())

counterModule.getInstance();  // ВЫПОЛНЯЕТСЯ 1 РАЗ 
counterModule.getInstance();  // тут уже выполнение не происходит
counterModule.getInstance();  // тоже создание нового не происходит


counterModule.getInstance().getCounter();
counterModule.getInstance().increaseCounter();
counterModule.getInstance().increaseCounter();
counterModule.getInstance().increaseCounter();
counterModule.getInstance().getCounter();

var singleA = counterModule.getInstance();
var singleB = counterModule.getInstance();

console.log('singleA === singleB', singleA === singleB);





var Singleton = (function(){
    
    var instance;
    var SERVER = 'localhost'

    function Singleton(){
        if(!instance ){
            instance = this;
        } else {
            return instance;
        }
    }

    Singleton.prototype.connect = function() {
        console.log('Connect' + SERVER ) 
    }

    return Singleton;
}())


var s1 = new Singleton();
var s2 = new Singleton(); 

console.log('s1 === s2', s1 === s2);

s1.connect();
s2.connect();


