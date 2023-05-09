# algorithm-js

algorithm interview practice


## Memoization recipe

1. Make it work (brute force)
    - visualize the problem as a tree
    - implement the tree using recursion
    - test it
1. Make it efficient
    - add a memo object (keys are the arguments and values are the result)
    - pass memo to the function calls
    - add a base case to return memo values if present
    - store return values into the memo, return the recently memoized value