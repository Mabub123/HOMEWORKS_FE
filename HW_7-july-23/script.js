const a = prompt('enter number')
console.log(a/100*10)


const number = prompt('enter number ')
const number2 = prompt('enter number2')
if (number2 < number){
   console.log('small this: '+ number);
}
else{
    console.log( 'small this: '+ number2);
}

const myNumber = prompt('enter your number')

if(myNumber > 100) {
    console.log('its more than 100')
 } else if(myNumber == 100) {
    console.log('it is equal')
 } else {
    console.log('its less than 100')
}

const name = prompt('Enter your name ')
const age = prompt('enter your age')
if (age <= 18){
    console.log('Hi '+ name);
}
else{
    console.log( 'Hello: '+ name);
}


const myName = 'Mia'
const myAge = 37
const myCity = 'New York'
const myCat = 'Jack' 
const myLastName = 'Erinov'


console.log( `Hello, my name is ${myName}, my LastName ${myLastName}, my age is ${myAge}, I live in ${myCity}, I have an animal named ${myCat} `)

