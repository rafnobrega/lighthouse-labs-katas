// We will receive a normal string of words separated with spaces as the input. Our job is to convert these strings into camel cased strings.

const camelCase = function(input) {
  let element = '';  // this will work as a new string.
  for(let i = 0; i < input.length; i++) {
      
    if(input[i] === ' ') {
      element = element + input[i + 1].toUpperCase(); // runs whenever the string find a space " ".
      i = i + 1;    // this "i + 1" increment is needed to avoid the repetition of the same character.
    }else {
      element = element + input[i]; 
    }    
  }return element;
};



console.log(camelCase("this is a string")); // Expected Output: thisIsAString
console.log(camelCase("loopy lighthouse")); // Expected Output: loopyLighthouse
console.log(camelCase("supercalifragalisticexpialidocious")); // Expected Output: supercalifragalisticexpialidocious

