const $ = require('jquery');
const testRequire = require('./public/say-hello.js');
console.log('sayHello');
document.write('testingForVic');
document.write(' How else should we test this?');

// addingHTML

$('body').append('<h1>Hello Vic</h1><h2> hello</h2>');
$('h1').css('background', 'red');
$('h2').css('background', 'red');

testRequire.sayHello;