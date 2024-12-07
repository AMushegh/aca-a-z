// __ Implicit type conversion to NUMBER __ via Number(), +, -
// Number('4782379') ---> 4782379 (number)
// Number("dahjwdkja") ---> NaN (number)
// Number(true) ---> 1
// Number(false) ---> 0
// Number(null) ---> 0
// Number(undefined) ---> NaN
// Number(238490) ---> 238490


// __ Implicit type conversion to Boolean __
// falsy values --> {0, -0, null, NaN, undefined, '', false}
// all other values are true

// __ Implicit type conversion to String __
// String(4239283409)
// String(true)
// String(NaN)
// String(undefined)
// everything converts to string
// corner case String(-0) ---> '0'


// __ Implicit Type Conversion to Strings __
// + in some operand is string
console.log('7' + 9) // '79'



// __ Implicit Type Conversion to Boolean __
// during Logical operators
// during conditional statements

// for all other cases Implicit conversion converts to Number
