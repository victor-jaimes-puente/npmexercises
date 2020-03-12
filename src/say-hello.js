'use strict';


// REQUIRE.TEST

// var test1 ={
//     sayHello : document.write('HelloFromRequire')
// };
// module.exports = test1;

// IMPORT.TEST

   var sayHello = document.write('HolaFromImport ');
   var sayBye = document.write('ByeFromImport');
export default {
    sayHello, sayBye
};
