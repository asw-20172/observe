class Person {
    constructor() {
        
        if (typeof Person.instance === 'object') {
            return Person.instance;
        }
        Person.instance = this;
        return this;
    }
}

//let _singleton = null

class Singleton {
    
    constructor (data) {
        if(!Singleton._singleton) {
            this.data = data
            Singleton._singleton = this
        }
        else
            return Singleton._singleton
        console.log("Singleton class created")
    }

    SingletonOperation () {
        console.log('SingletonOperation')
    }

    GetSingletonData () {
        return this.data
    }
}


export default (Person, Singleton)
