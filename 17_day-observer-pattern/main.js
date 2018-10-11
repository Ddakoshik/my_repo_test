// ##### Создание примитивного Наблюдателя(Observer) через класс


// class EventObserver {
//     constructor () {
//         this.observers = []
//     }

//     subscribe(fn) {
//         this.observers.push(fn)
//     }
//     unsubscribe(fn) {
//         this.observers = this.observers.filter(
//             subscriber => this.subscriber !== fn
//         )
//     }

//     brodcast (data) {
//         this.observers.forEach(subscriber => subscriber(data))
//     }
// }


// ##### Создание примитивного Наблюдателя(Observer) функцию класса

function EventObserver() {
    this.observers = [];
}

EventObserver.prototype.subscribe = function(fn) {
    this.observers.push(fn)
}
EventObserver.prototype.unsubscribe = function(fn) {
    this.observers = this.observers.filter(
        subscriber => this.subscriber !== fn
    )
}
EventObserver.prototype.brodcast = function(data) {
    this.observers.forEach(subscriber => subscriber(data))
}



const observer = new EventObserver()

observer.subscribe(data => {
    console.log('subscribe was fired', data)
})

observer.brodcast({someData: 'hello'})


const blogObserver = new EventObserver()

const textField = document.querySelector('.textFild');
const countField = document.querySelector('.countFild');

const getWordsCount = text => 
    text ? text.trim().split(/\s+/).length : 0

blogObserver.subscribe(text => {
    countField.innerHTML = getWordsCount(text);
})

textField.addEventListener('keyup', () => {
    blogObserver.brodcast(textField.value)
})


function Publisher() {
    this.subscribers = [];
}

Publisher.prototype.deliver = function(data) {

    this.subscribers.forEach(
        function(fn) {
        fn(data);
        }
    );
    return this;
};

Function.prototype.subscribe = function(publisher) {
    publisher.subscribers.push(this); 
    return this; 
};

var Microsoft = new Publisher;
var Google = new Publisher;
var Apple = new Publisher;



var Ann = function(from) {
    console.log('Delivery from '+from+' to Ann');
   };
var Vasya = function(from) {
    console.log('Delivery from '+from+' to Vasya');
};
var Maria = function(from) {
    console.log('Delivery from '+from+' to Maria ');
};
   

Ann.subscribe(Microsoft).subscribe(Google).subscribe(Apple);
Vasya.subscribe(Google).subscribe(Apple);
Maria.subscribe(Microsoft);


Microsoft.deliver('news 1').deliver('news 2');
Google.deliver('googlenews 1').deliver('googlenews 2');



function Observable(){
    var observers = [];
    this.sendMessage = function(msg){
        for(var i = 0, len = observers.length; i < len; i++){
            observers[i].notify(msg);
        }
    };
    this.addObserver = function(observer) {
        observers.push (observer);
    }
}

function Observer(behavior) {
    this.notify = function (msg) {
        behavior(msg);
    }
}



var observable = new Observable();
var obs1 = new Observer(function(msg){console.log(msg);});
var obs2 = new Observer(function(msg){alert(msg);});

observable.addObserver(obs1);
observable.addObserver(obs2);

setTimeout(function(){observable.sendMessage('Текущее время - ' + new Date());}, 3000);


