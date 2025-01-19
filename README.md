# Uncommon TypeScript Error: Using a Variable Before Declaration

This repository demonstrates a relatively uncommon error in TypeScript that can be tricky to debug: using a variable before it has been declared.  While TypeScript's type system helps catch many errors at compile time, this particular error can slip through if you're not careful.

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file shows the corrected version.

## How to Reproduce
1. Clone this repository.
2. Open `bug.ts` in your TypeScript compiler or IDE.
3. Try to compile and run the code.  You'll encounter a runtime error.

## Solution
The solution involves properly declaring the variable *before* using it. This ensures that the variable is allocated in memory before any attempts to access or modify it are made. 