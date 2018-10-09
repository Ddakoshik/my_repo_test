// patern moduke 
// с доступными снаружи интерфейсом getCounter и increaseCounter
// counter - хранится в замыкании и из вне доступа к ней нет 
// (можно сброить  переменную но нужно создать метод)

var counterModule = (function () {
    var counter = 0;

    var increaseCounter = function () {
        counter++;
    }
    var getCounter = function () {
        return counter;
    }
    return {
        getCounter: getCounter,
        increaseCounter: increaseCounter
    }
}())



// Практика  с товароами и корзиной

var BassketModule = (function (){
    var goods = [];
    var sumCost = 0;

    var addGoods = function(item) {
        goods.push(item)
    }
    var costOfGoods = function() {
        for( var i = 0; i < goods.length; i++ ) {
            sumCost = sumCost + goods[i].price
        }
        console.log(sumCost)
    }
    var displayGoods = function() {
        for( var i = 0; i < goods.length; i++ ) {
            console.log('name -', goods[i].name, '; price -', goods[i].price)
        }
        
    }

    return{
        addGoods: addGoods,
        costOfGoods: costOfGoods,
        displayGoods: displayGoods
    }
}())

var milk = {
    name: "milk",
    price: 19
}
var bread = {
    name: "bread",
    price: 12
}

BassketModule.addGoods(milk);
BassketModule.addGoods(bread);
BassketModule.addGoods(bread);
BassketModule.addGoods(bread);
BassketModule.displayGoods();
BassketModule.costOfGoods();


