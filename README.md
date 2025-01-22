# TypeScript Type Error: 'string[]' is not assignable to type 'string'

This repository demonstrates a common TypeScript type error and its solution.  The error arises when attempting to pass an array of strings (`string[]`) to a function expecting a single string (`string`).

## Bug

The `bug.ts` file contains the erroneous code.  The `greeter` function expects a single string, but an array is passed to it.  TypeScript correctly identifies this as a type mismatch.

## Solution

The `bugSolution.ts` file shows two solutions:

1. **Iterating over the array:** This method calls the `greeter` function for each string in the array.
2. **Modifying the function:** This method modifies the `greeter` function to accept an array of strings, using the spread operator.