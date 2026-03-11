/**
 * Represents a person.
 * @class
 */
class Person {

  /**
   * Create a person.
   * @param {string} name - The name of the person
   * @param {number} age - The age of the person
   */
  constructor(name, age) {

    /** @type {string} */
    this.name = name;

    /** @type {number} */
    this.age = age;
  }

  /**
   * Prints a greeting message.
   * @returns {void}
   */
  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
  }
}

// Example
const person1 = new Person("Jaheer Hussain", 25);
person1.greet();