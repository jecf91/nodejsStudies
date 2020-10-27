//observer pattern / pub/sub
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {

}

const myEmitter = new MyEmitter();
const myEvent = 'user:click';

myEmitter.on(myEvent, click => {
  console.log('a user clicked', click)
});

myEmitter.emit(myEvent, 'scrolled');

setInterval(() =>{
  myEmitter.emit(myEvent, 'click');
}, 1000);
