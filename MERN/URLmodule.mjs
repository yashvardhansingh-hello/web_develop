import url from 'node:url';

const myUrl = new URL('https://www.google.com/');
// myUrl.hash = 'new-urlinput-base'
myUrl.search = 'hello world'
console.log(myUrl.href)