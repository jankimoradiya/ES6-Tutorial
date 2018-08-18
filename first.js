
/************************************   1. LET    **************************************************/

let a = 50;
let b = 100;
if (true) {
  let a = 60;
  var c = 10;
  console.log(a / c); // 6
  console.log(b / c); // 10
}
console.log(c); // 10
console.log(a); // 50

/*************************************************************************************************/


/************************************  2. Const    **************************************************/

const a = 50;
a = 60; // shows error. You cannot change the value of const.
const b = "Constant variable";
b = "Assigning new value"; // shows error.
//Consider another example.
const LANGUAGES = ['Js', 'Ruby', 'Python', 'Go'];
LANGUAGES = "Javascript"; // shows error. 
LANGUAGES.push('Java'); // Works fine.
console.log(LANGUAGES); // ['Js', 'Ruby', 'Python', 'Go', 'Java']

/*************************************************************************************************/




/************************************  3. Arrow Function  **************************************************/
// Old Syntax
function oldOne() {
    console.log("Hello World..!");
   }
   // New Syntax
   var newOne = () => {
    console.log("Hello World..!");
   }

   let NewOneWithParameters = (a, b) => {
    console.log(a+b); // 30
   }
   NewOneWithParameters(10, 20);


   //Default Parameters:
   let Func = (a, b = 10) => {
    return a + b; 
   }
   Func(20); // 20 + 10 = 30

   Func(20, 50); // 20 + 50 = 70

   let NotWorkingFunction = (a = 10, b) => {
    return a + b;
   }
   NotWorkingFunction(20); // NAN. Not gonna work.
/*************************************************************************************************/




/************************************  4.  For of loop   ****************************************/

let arr = [2,3,4,1];
for (let value of arr) {
 console.log(value);
}

let string = "Javascript";
for (let char of string) {
 console.log(char);
}

/*************************************************************************************************/






/************************************  5.   Spread attributes  **************************************/
let SumElements = (arr) => {
    console.log(arr); // [10, 20, 40, 60, 90]
    let sum = 0;
    for (let element of arr) {
     sum += element;
    }
    console.log(sum); // 220. 
   }
   SumElements([10, 20, 40, 60, 90]); 


   let SumElements = (...arr) => {
    console.log(arr); // [10, 20, 40, 60, 90]
   let sum = 0;
    for (let element of arr) {
     sum += element;
    }
    console.log(sum); // 220. 
   }
   SumElements(10, 20, 40, 60, 90); // Note we are not passing array here. Instead we are passing the elements as arguments. 


    Math.max(10, 20, 60, 100, 50, 200); // returns 200.
    let arr = [10, 20, 60];
    Math.max(arr); // Shows error. Doesn't accept an array.
    let arr = [10, 20, 60];
    Math.max(...arr); // 60 
/*************************************************************************************************/




/************************************  6.  Maps   **************************************************/
//
var NewMap = new Map();
NewMap.set('name', 'John'); 
NewMap.set('id', 2345796);
NewMap.set('interest', ['js', 'ruby', 'python']);
NewMap.get('name'); // John
NewMap.get('id'); // 2345796
NewMap.get('interest'); // ['js', 'ruby', 'python']

//
var map = new Map();
map.set('name', 'John');
map.set('name', 'Andy');
map.set(1, 'number one');
map.set(NaN, 'No value');
map.get('name'); // Andy. Note John is replaced by Andy.
map.get(1); // number one
map.get(NaN); // No value

//Other useful methods used in Map:
var map = new Map();
map.set('name', 'John');
map.set('id', 10);
map.size; // 2. Returns the size of the map.
map.keys(); // outputs only the keys. 
map.values(); // outputs only the values.
for (let key of map.keys()) {
 console.log(key);
}

//
var map = new Map();
for (let element of map) {
 console.log(element);
}

//
var map = new Map();
for (let [key, value] of map) {
 console.log(key+" - "+value);
}

/*************************************************************************************************/




/************************************  7.  Sets   **************************************************/
//
var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a'); // We are adding duplicate value.
for (let element of sets) {
 console.log(element);
}

//
var sets = New Set([1,5,6,8,9]);
sets.size; // returns 5. Size of the size.
sets.has(1); // returns true. 
sets.has(10); // returns false.
/*************************************************************************************************/



/************************************  8.  Static methods   **************************************************/
//
class Example {
    static Callme() {
    console.log("Static method");
    }
   }
   Example.Callme();
   

/*************************************************************************************************/


/************************************  9.  Getters and Setters   **************************************************/
//
    class People {
        constructor(name) {
          this.name = name;
        }
        getName() {
          return this.name;
        }
        setName(name) {
          this.name = name;
        }
    }
    let person = new People("Jon Snow");
    console.log(person.getName());
    person.setName("Dany");
    console.log(person.getName());

    //
    class People {
        constructor(name) {
            this.name = name;
        }
        get Name() {
            return this.name;
        }
        set Name(name) {
            this.name = name;
        }
   }
    let person = new People("Jon Snow");
    console.log(person.Name);
    person.Name = "Dany";
    console.log(person.Name);
/*************************************************************************************************/