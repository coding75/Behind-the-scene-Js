'use strict';

function calAge(birthYear) {
  // function scope
  // this function is define global scope as this function is declare at the top level code
  // this function also create it's own scope which is equivalent to the variable environment of it's  execution context
  const age = 2037 - birthYear;
  //console.log(firstName) // this value while be avilable to the function because of scope chain

  function printAge() {
    // function scope
    const output = `You are ${age},born is ${birthYear} `;
    console.log(output);

    if (birthYear >= 2005 && birthYear <= 2010) {
      // block scope
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str) // now going to work because let and const are bock scope
  }
  printAge();
  return age;
}

const firstName = 'Mayank'; // Global scope
calAge(2005);
