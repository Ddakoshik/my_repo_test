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
console.log('tomorrow', tomorrow)
console.log(tomorrow.toString())

OtherDate.hello()