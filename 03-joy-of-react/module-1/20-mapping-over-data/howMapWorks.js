const nums = [1,2,3];
const doubled = nums.map(n => n * 2);

/*
 1. looks over an array `nums`
 2. runs a function on each item in the array
 3. returns a new array of the results (while `nums` is unchanged)
*/

const multiplyPls = (number) => number * 2;
const doubledBetter = nums.map(multiplyPls);

/* 
   `.map` gets the function `multiplyPls`, and it calls that function for each item in the 
     array, passing that item itself

    1st ITERATION
     `map` calls `multiplyPls(1, 0, nums)`
        - `1` is the current item (the first element of `nums` array)
        - `0` is the current index of that item (sits at index 0 in the array)
        - `nums` is the whole array `[1,2,3]`
           `maps` always passes all three, even if we use them or not
           our function declares only one parameter, so it only uses the current element
           `0` and `nums` gets passed in, but there is no parameter to receive them,
            so they get ignored
     `multiplyPls` returns `2` (1 * 2 = 2), and `.map` maps it into new array `doubledBetter`
        - now we have new array with `[2]` inside it
    
    2nd ITERATION
     `map` calls `multiplyPls(2, 1, nums)`
        - now it calls the second element, index of that element, and again the whole array
     `multiplyPls` returns `4`, and `.map` maps it into new array
        - now we have new array with `[2,4]` inside it

        etc.

        Important thing is:
         1. `map` loops over an array 
         2. runs a function on each item
         3. returns a new array of the results, while the original array is unchanged
*/
