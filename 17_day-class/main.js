class SimpleDate {
    constructor (year, month, day){
        this.year = year;
        this.month = month;
        this.day = day;
    }
    toString(){
        return `${this.day}/${this.month}/${this.year}`
    }
}


const today = new SimpleDate(2018, 10, 15);
console.log('today', today);
console.log(today.toString());

class OtherDate extends SimpleDate {
    constructor(year, month, day) {
        super(year, month, day);
    }

    static hello(){
        console.log('hello OtherDate')
    }

    toString(){
        return `${this.day}*.${this.month}*.${this.year}`
    }
}
const tomorrow = new OtherDate(2018, 10, 16);
const obj = {id:1 ,id:2 ,id:3 ,id:4}
const arr = [1 ,2 ,3 ,4]
console.log('tomorrow', tomorrow)
console.log(tomorrow.toString())
console.log(tomorrow instanceof SimpleDate );
console.log(tomorrow instanceof OtherDate );
console.log(tomorrow instanceof Array );
console.log(toString.call(tomorrow) );
console.log(toString.call(obj) );
console.log(toString.call(arr) );
console.log('arr is arr', Array.isArray(arr) );
console.log(toString.call(123) );
console.log(toString.call('123') );
console.log(String.fromCharCode(48, 47, 46, 50))

OtherDate.hello()