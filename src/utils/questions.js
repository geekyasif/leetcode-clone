export const Questions = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "easy",
    category: "arrays",
    description:
      "Given an array of integers, find two numbers such that they add up to a specific target number.",
    examples: [
      {
        input: [2, 7, 11, 15],
        target: 9,
        output: [0, 1],
      },
    ],
    constraints: "The array contains at least two elements.",
    source: "LeetCode",
  },
  {
    id: 2,
    title: "Reverse String",
    difficulty: "easy",
    category: "strings",
    description:
      "Write a function that reverses a string. The input string is given as an array of characters.",
    examples: [
      {
        input: ["h", "e", "l", "l", "o"],
        output: ["o", "l", "l", "e", "h"],
      },
    ],
    constraints: "The input array is not empty.",
    hints: [
      "Try swapping characters from the beginning and end.",
      "Use two pointers approach.",
    ],
    source: "LeetCode",
  },
  {
    id: 3,
    title: "Binary Tree Inorder Traversal",
    difficulty: "medium",
    category: "trees",
    description:
      "Given a binary tree, return the inorder traversal of its nodes' values.",
    examples: [
      {
        input: {
          val: 1,
          left: null,
          right: {
            val: 2,
            left: {
              val: 3,
              left: null,
              right: null,
            },
            right: null,
          },
        },
        output: [1, 3, 2],
      },
    ],
    source: "LeetCode",
  },
  {
    id: 4,
    title: "Add Two Numbers",
    difficulty: "medium",
    category: "linked lists",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.",
    examples: [
      {
        input: {
          l1: [2, 4, 3],
          l2: [5, 6, 4],
        },
        output: [7, 0, 8],
      },
    ],
    source: "LeetCode",
  },
  {
    id: 5,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    category: "strings",
    description:
      "Given a string, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: "abcabcbb",
        output: 3,
      },
      {
        input: "bbbbb",
        output: 1,
      },
    ],
    source: "LeetCode",
  },
  {
    id: 6,
    title: "Merge Intervals",
    difficulty: "medium",
    category: "arrays",
    description:
      "Given a collection of intervals, merge any overlapping intervals.",
    examples: [
      {
        input: [
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ],
        output: [
          [1, 6],
          [8, 10],
          [15, 18],
        ],
      },
    ],
    source: "LeetCode",
  },
  {
    id: 4,
    title: "Add Two Numbers",
    difficulty: "medium",
    category: "linked lists",
    description:
      "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contains a single digit. Add the two numbers and return it as a linked list.",
    examples: [
      {
        input: {
          l1: [2, 4, 3],
          l2: [5, 6, 4],
        },
        output: [7, 0, 8],
      },
    ],
    source: "LeetCode",
  },
  {
    id: 5,
    title: "Longest Substring Without Repeating Characters",
    difficulty: "medium",
    category: "strings",
    description:
      "Given a string, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: "abcabcbb",
        output: 3,
      },
      {
        input: "bbbbb",
        output: 1,
      },
    ],
    source: "LeetCode",
  },
  {
    id: 6,
    title: "Merge Intervals",
    difficulty: "medium",
    category: "arrays",
    description:
      "Given a collection of intervals, merge any overlapping intervals.",
    examples: [
      {
        input: [
          [1, 3],
          [2, 6],
          [8, 10],
          [15, 18],
        ],
        output: [
          [1, 6],
          [8, 10],
          [15, 18],
        ],
      },
    ],
    source: "LeetCode",
  },
  {
    id: 10,
    title: "Valid Parentheses",
    difficulty: "easy",
    category: "stacks",
    description:
      "Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.",
    examples: [
      {
        input: "()",
        output: true,
      },
      {
        input: "()[]{}",
        output: true,
      },
      {
        input: "(]",
        output: false,
      },
    ],
    source: "LeetCode",
  },
  {
    id: 11,
    title: "Search in Rotated Sorted Array",
    difficulty: "medium",
    category: "arrays",
    description:
      "Suppose an array of length n is rotated at some pivot unknown to you beforehand. You are given a target value to search for. If found in the array, return its index, otherwise return -1.",
    examples: [
      {
        input: [4, 5, 6, 7, 0, 1, 2],
        target: 0,
        output: 4,
      },
      {
        input: [4, 5, 6, 7, 0, 1, 2],
        target: 3,
        output: -1,
      },
    ],
    source: "LeetCode",
  },
  {
    id: 12,
    title: "Top K Frequent Elements",
    difficulty: "medium",
    category: "arrays",
    description:
      "Given a non-empty array of integers, return the k most frequent elements.",
    examples: [
      {
        input: [1, 1, 1, 2, 2, 3],
        k: 2,
        output: [1, 2],
      },
      {
        input: [1],
        k: 1,
        output: [1],
      },
    ],
    source: "LeetCode",
  },
  {
    id: 13,
    title: "Longest Palindromic Substring",
    difficulty: "medium",
    category: "strings",
    description:
      "Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.",
    examples: [
      {
        input: "babad",
        output: "bab",
      },
      {
        input: "cbbd",
        output: "bb",
      },
    ],
    source: "LeetCode",
  },
  {
    id: 14,
    title: "Maximum Subarray",
    difficulty: "easy",
    category: "arrays",
    description:
      "Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    examples: [
      {
        input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
        output: 6,
      },
      {
        input: [1],
        output: 1,
      },
    ],
    source: "LeetCode",
  },
  {
    id: 15,
    title: "Implement strStr()",
    difficulty: "easy",
    category: "strings",
    description:
      "Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.",
    examples: [
      {
        input: "hello",
        needle: "ll",
        output: 2,
      },
      {
        input: "aaaaa",
        needle: "bba",
        output: -1,
      },
    ],
    source: "LeetCode",
  },
  {
    id: 16,
    title: "Valid Sudoku",
    difficulty: "medium",
    category: "hash tables",
    description:
      "Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules.",
    examples: [
      {
        input: [
          ["5", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
        output: true,
      },
      {
        input: [
          ["8", "3", ".", ".", "7", ".", ".", ".", "."],
          ["6", ".", ".", "1", "9", "5", ".", ".", "."],
          [".", "9", "8", ".", ".", ".", ".", "6", "."],
          ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
          ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
          ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
          [".", "6", ".", ".", ".", ".", "2", "8", "."],
          [".", ".", ".", "4", "1", "9", ".", ".", "5"],
          [".", ".", ".", ".", "8", ".", ".", "7", "9"],
        ],
        output: false,
      },
    ],
    source: "LeetCode",
  },
  {
    id: 17,
    title: "Product of Array Except Self",
    difficulty: "medium",
    category: "arrays",
    description:
      "Given an array nums of n integers, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].",
    examples: [
      {
        input: [1, 2, 3, 4],
        output: [24, 12, 8, 6],
      },
    ],
    source: "LeetCode",
  },
  {
    id: 18,
    title: "Word Search",
    difficulty: "medium",
    category: "backtracking",
    description:
      "Given a 2D board and a word, find if the word exists in the grid. The word can be constructed from letters of sequentially adjacent cells, where 'adjacent' cells are horizontally or vertically neighboring.",
    examples: [
      {
        input: [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        word: "ABCCED",
        output: true,
      },
      {
        input: [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        word: "SEE",
        output: true,
      },
      {
        input: [
          ["A", "B", "C", "E"],
          ["S", "F", "C", "S"],
          ["A", "D", "E", "E"],
        ],
        word: "ABCB",
        output: false,
      },
    ],
    source: "LeetCode",
  },
];
