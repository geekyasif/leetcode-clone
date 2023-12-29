import React from "react";

function ProblemStatement({ problemStatement: p }) {

  return (
    <div className="p-4 pb-10">
      <p className="text-2xl font-semibold">{p.problem.title}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: p.problem.problemStatement,
        }}
      ></div>
    </div>
  );
}

export default ProblemStatement;

/* <p className="text-2xl font-semibold">Two Sum</p>
      <div className="my-3">
        <button className="mr-2 rounded px-2 py-1 bg-green-600 text-white">
          Easy
        </button>
        <button className="rounded px-2 py-1 bg-blue-600 text-white">
          Share
        </button>
      </div>

      <hr />

      <p className="my-3">
        Given an array of integers nums and an integer target, check if there
        are two numbers in the array such that they add up to target.
      </p>
      <p className="my-3">
        You may assume that each input would have exactly one solution, and you
        may not use the same element twice.
      </p>
      <p className="my-3">You should return true or false.</p>
      <div className="my-2">
        <p className="my-4 font-bold">Example 1:</p>

        <div className="bg-gray-100 p-4 rounded-sm">
          <code className="text-sm">
            Input: nums = [2,7,11,15], target = 9
            <br />
            Output: true
            <br />
            Output: Because nums[0] + nums[1] == 9, we return true.
          </code>
        </div>
      </div>

      <div className="my-2">
        <p className="my-4 font-bold">Example 2:</p>

        <div className="bg-gray-100 p-4 rounded-sm">
          <code className="text-sm">
            Input: nums = [2,7,11,15], target = 18
            <br />
            Output: true
            <br />
            Output: Because nums[1] + nums[2] == 18, we return true.
          </code>
        </div>
      </div>
      <p className="my-3">
        Follow-up : Can you come up with an algorithm that is less than O(n2)
        time complexity?
      </p> */
