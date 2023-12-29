// const assert = require("assert");

const userCode = `function twoSum(nums, target) {
  // Write your code here
  const result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        result.push(i)
        result.push(j)
        return result
      }
    }
  }


  return result;
}`

const handler = (fn) => {
  // fn is the callback that user's code is passed into
  try {
    const nums = [
      [2, 7, 11, 15],
      [3, 2, 4],
      [3, 3],
    ];

    const targets = [9, 6, 6];
    const answers = [
      [0, 1],
      [1, 2],
      [0, 1],
    ];

    // loop all tests to check if the user's code is correct
    for (let i = 0; i < nums.length; i++) {
      // result is the output of the user's function and answer is the expected output
      const result = fn(nums[i], targets[i]);
    //   console.log(result, answers[i]);
    //   assert.deepStrictEqual(result, answers[i]);
    }
    return true;
  } catch (error) {
    console.log("twoSum handler function error");
    console.log(error);
    throw new Error(error);
  }
};

// const cb = eval(`(${userCode})`)
// const cb = new Function(`${userCode}`)
// const success = handler(cb);
// console.log(success);

// let p = JSON.stringify(handler)
// let c = JSON.parse(p)
// console.log()
