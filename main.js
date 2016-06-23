/**
 * Set-up
 */

if (typeof window === 'undefined') {
    global.whatsThis = whatsThis;
} else {
    global = window;
}

var obj = {
    id: 'object',
    whatsThis: whatsThis,
    inner: {
        id: 'inner-object',
        whatsThis: whatsThis
    }
};

var tricky = {
    id: 'tricky'
};

var location = {
    state: 'Alaska',
    city: 'Anchorage'
};

function whatsThis() {
    console.log('This is...', this);
    return this;
}

function Ctor() {
    this.id = 'constructor';
    whatsThis.call(this);
}

Ctor.whatsThis = whatsThis;

Ctor.prototype.whatsThis = whatsThis;



/**
 * Exercises
 */

var ex;

// Exercise 1

ex = whatsThis(); 

// The assignment statement will return -- >global
// It will log out global b/c there is not an object before the function

console.assert(ex === global);



// Exercise 2

ex = global.whatsThis(); 

// The assignment statement will return -- > global
// It is global b/c global is being call before the whatsThis() function.

console.assert(ex === global);
 
// global.whatsThis()


// Exercise 3

ex = obj.whatsThis(); 

// The assignment statement will return
// --> 'object'
// The statement returns 'object' because the object obj is where the whatsThis() function is being called upon. Therefore, ex.id equates to the first object under obj.

console.assert(ex.id === 'object');

// Exercise 4

ex = obj.inner.whatsThis();

// The assignment statement will return
// --> 'inner-object'
// The statement returns 'inner-object' because the object obj.inner is where the whatsThis() function is being called upon. Therefore, ex.id equates to the first object under the obj.inner object.

console.assert(ex.id === 'inner-object');

// Exercise 5

ex = whatsThis.call(null);

// The assignment statement will return
// --> global
// The statement returns global because the whatsThis.call(null) function is calling a value of null which is nothing. Therefore, ex equates to the global since there is nothing (null) to call.

console.assert(ex === global);

// Exercise 6

ex = whatsThis.call(location);

// The assignment statement will return --> location
// The statement returns location because the whatsThis.call(location) function's first and only argument is location. Therefore, ex equates to the location. 

console.assert(ex === location);

// Exercise 7

ex = whatsThis.apply(tricky);

// The assignment statement will return --> 'tricky'
// The statement returns location because the whatsThis.apply(tricky) function's first and only argument is location. Therefore, ex.id equates to 'tricky'. 

console.assert(ex.id === 'tricky');


// Exercise 8

// Not testable because you are not calling anything
ex = Ctor();


// Exercise 9

ex = Ctor.prototype.whatsThis();

// The assignment statement will return --> whatsThis
// The statement returns whatsThis because the whatsThis() is attached at the end of the Ctor.prototype object constructor. Therefore, ex.whatsThis is equal to whatsThis.

console.assert(ex.whatsThis === whatsThis);


// Exercise 10

var newObject = ex = new Ctor();

// The assignment statement will return --> 'constructor'
// The statement returns 'constructor' because the newObject is equal to the new Ctor (), and under the Ctor() constructor object, the this.id is 'constructor'.

console.assert(ex.id === 'constructor');

// Exercise 11

ex = newObject.whatsThis();

// The statement will return --> whatsThis
// Since, newObject was created using the Ctor() constructor then it inherits the traits from teh Ctor() constructor. Therefore, ex.whatsThis is equal to whatsThis.

console.assert(ex.whatsThis === whatsThis);

// Exercise 12

ex = obj.whatsThis.call(tricky);

// The statement will return --> 'tricky'
// Since you are calling 'tricky' in the obj.whatsThis.call(tricky)the statement will return what's being called which is 'tricky'.

console.assert(ex.id === 'tricky');


// Exercise 13

ex = whatsThis.bind(obj.inner).call(location);

// The statement will return --> 'inner-object'

console.assert(ex.id === 'inner-object');





