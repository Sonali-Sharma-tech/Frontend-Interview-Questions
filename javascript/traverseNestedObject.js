/**
 * ------ Question -----
    Write a function which can print the result object for given input object.
 * ---- input ------
   const input = {
    a: { b: { c: 2, d: 1 } },
    b: { v: { d: 4 } }
    };

 * ---- output ------
    const result = {
    "a.b.c": 2,
    "a.b.d": 1,
    "b.v.d": 4
    };
 */

const input = {
    a: { b: { c: 2, d: 1 } },
    b: { v: { d: 4 } }
    };
const getResult = (arg) => {
  let result = {};
  function recurse(arg, str) {
    Object.keys(arg).forEach(key => {
      let resultString = str;
      if(typeof arg[key] === "object") {
        resultString+=key + ".";
        recurse(arg[key], resultString)
      } else {
        resultString+=key;
        result[resultString] = arg[key]
      }
    })
  }
  recurse(arg, "")
  
  return result;
};

console.log(getResult(input)); // this will output the result object