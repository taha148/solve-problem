
// First Example
const firsrExample = ["hello world", "this is a test", "this is an example"];

const getCommonChars = (arrString = []) => {
  // Write your code here
  let JoinWord = "";
  arrString.forEach((word) => (JoinWord += `${word} `));
  return [...JoinWord.trim()];
};

console.log(getCommonChars(firsrExample));


//second Example 
const secondExample = [
  [0, 0, 1, 1, 0, 0],
  [0, 1, 1, 1, 0, 0],
  [0, 1, 0, 0, 0, 1],
  [0, 1, 0, 0, 1, 1],
  [1, 0, 0, 1, 1, 1]
];

const countForest = (arr) => {
  // Write your code here
  return arr.reduce((total, insideArr) => {
    insideArr.forEach((item, index) => {
    
 if (index > 0 && index < insideArr.length) {
        if (
          insideArr[index - 1] == 1 &&
          insideArr[index] == 1 &&
          insideArr[index + 1] == 1
        ) {
          total += 1;
        }
      }
    });
    return total;
  }, 0);
};

console.log(countForest(secondExample));

