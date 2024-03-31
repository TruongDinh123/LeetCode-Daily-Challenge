// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

export function palindrome(x: number): boolean {
    if(x < 0) return false;
    if(x < 10) return false;
    let reversed = 0;
    let temp = x;
    while(temp > 0){
        reversed = reversed * 10 + temp % 10; //reverse lan 1 = 1; lan 2: 12; lan 3:  121
        temp = Math.floor(temp/10); // temp lan 1 = 12; lan 2: 1; lân 3: 0;
    }
    return x === reversed;
}
