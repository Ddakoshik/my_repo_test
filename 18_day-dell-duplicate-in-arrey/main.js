const a = [1, 2, 3, 4, 5, 5, 6, 1, 8, 2, 3, 3]

let way1 = (function(){
    let b = [];
    for(let item of a){
        if(!b.some(i => i === item)){
            b.push(item);
        }
    }
    console.log('way1', b);
})()

let way2 = (function(){
    let b = [];
    let len = a.length;
    for(let i = 0; i < len; i++){
        if(b.indexOf(a[i]) === -1){
            b.push(a[i]);
        }
    }
    console.log('way2', b);
})()

let way3 = (function(){
    let b = [];
    let len = a.length;
    let _temp;
    a.sort();
    for(let i = 0; i < len; i++){
        if(a[i] !== _temp){
            b.push(a[i]);
            _temp = a[i];
        }
    }
    console.log('way3', b);
})()

let way4 = (function(){
    let b = [];
    obj = {};
    for(let i of a){
        obj[i] = true;
    }
    b = Object.keys(obj);
    console.log('way4', b);
})()

let way5 = (function(){
    let b = [... new Set(a)];    
    console.log('way5', b);
})()

console.log('arr', a);