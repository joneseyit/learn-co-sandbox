// function sayHello () {
//   console.log("hello")
// }

// sayHello ()

// function sayHelloToIsabel () {
//   console.log("Hello! Isabel!")
// }

// sayHelloToIsabel ()

// function sayHelloTo(firstName) {
//   console.log(`Hello, ${firstName}!`)
// }

// sayHelloTo("Isabel")
// sayHelloTo("Jane")
// sayHelloTo("1")

// function say(greeting, name){
//   return (`${greeting}, ${name}!`)
  
// }

// say("howdy", "dude")
// say("peace", "brotha")

// function add(a, b){
 
//   return "hola"
// }

// add(3, 5)

function outerFunction(){
  
  var innerVariable = "I'm sort of a secret."
  
  return function innerScope(){
    inaccessible = "Nothing can touch me."
    return innerVariable
  }
  