// main.js
import { Dog, Wolf } from './zoo/zoo';
import { Cat } from './zoo/cat';


var myDog = new Dog('Sherlock', 'beagle');
document.getElementById('content').innerHTML += myDog.bark();

var myWolf = new Wolf('Direwolf');
document.getElementById('content').innerHTML += `<br/>${myWolf.bark()}`;

document.getElementById('loadCat').addEventListener('click', e => {
    require.ensure([], () => {


        //var Cat = require('./cat');

        var myCat = new Cat('Bugsy');
        document.getElementById('content').innerHTML += `<br/>${myCat.meow()}`;
    });
});

//https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/


function sendNotify(id) {
    console.log(`Usuario ${id} notificado`);
}

function loadUser() {
    
    let min = 12345;
    let max = 23456;
    let id = Math.floor(Math.random() * (max - min)) + min;
    console.log('Leyendo nuevo usuario '+id);
    return id
    
}
let uid = loadUser()
sendNotify(uid)
