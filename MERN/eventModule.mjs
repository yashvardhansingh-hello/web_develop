import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');
  setTimeout(() => {
    console.log('another event has occured')
  }, 3000);
});
console.log('Processing syntax')
myEmitter.emit('event');
console.log('still Processing syntax')