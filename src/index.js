module.exports = function check(str, bracketsConfig) {
  // your solution

  let bracketsOpen = [];
  let bracketsPairs = {};
  let bracketsReversed = [];
  let bracketsConfigCopy = [];
  bracketsConfigCopy = JSON.parse(JSON.stringify(bracketsConfig));

  for (let i = 0; i < bracketsConfigCopy.length; i++) {
    bracketsOpen.push(bracketsConfigCopy[i][0]);

    bracketsReversed.push(bracketsConfigCopy[i].reverse());

    bracketsPairs = Object.fromEntries(bracketsReversed);

  }
  console.log(bracketsOpen);
  console.log(bracketsConfig);
  console.log(bracketsConfigCopy);
  console.log(bracketsPairs);

  let bracketsStack = [];

  for (let j = 0 ; j < str.length ; j++) {
    let currentElement = str[j];
    console.log(j);

    if (bracketsOpen.includes(currentElement) && (bracketsStack[bracketsStack.length - 1] !== Object.keys(bracketsPairs).find(key => bracketsPairs[key] === currentElement))) {
      bracketsStack.push(currentElement);
      console.log(bracketsStack);
    } else {
      if (bracketsStack.length === 0) {
        console.log(bracketsStack.length);  
        return false; 
      }
    let lastElement = bracketsStack[bracketsStack.length - 1];
    console.log(lastElement);

    if (bracketsPairs[currentElement] === lastElement) {
      bracketsStack.pop();
      console.log(bracketsStack);
    } else {
      console.log(bracketsStack.length);
      return false;
    }
  }
}
console.log(bracketsStack.length);
return bracketsStack.length === 0;
}

