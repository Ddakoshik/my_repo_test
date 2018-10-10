class EventObserver {
    constructor () {
        this.observers = []
    }

    subscribe(fn) {
        this.observers.push(fn)
    }
    unsubscribe(fn) {
        this.observers = this.observers.filter(
            subscriber => this.subscriber !== fn
        )
    }

    brodcast (data) {
        this.observers.forEach(subscriber => subscriber(data))
    }
}



const observer = new EventObserver()

observer.subscribe(data => {
    console.log('subscribe was fired', data)
})

observer.brodcast({someData: 'hello'})


const blogObserver = new EventObserver()

const textField = document.querySelector('.textFild');
const countField = document.querySelector('.countFild');

blogObserver.subscribe(text => {
    console.log('brodcast catcged', text)
})

textField.addEventListener('keyup', () => {
    blogObserver.brodcast(textField.value)
})

