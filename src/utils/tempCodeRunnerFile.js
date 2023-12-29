function twoSum(nums,target){
    // Write your code here
    const result = []
    for(let i = 0; i < nums.length; i++){
        for(let j = i; j < nums.length - 1; j++){
            if(i !== j && nums[j] + nums[j + 1] === target){
                result.push(j)
                result.push(j+1)
            }
        }
    }

    console.log(result)

    return result
  };