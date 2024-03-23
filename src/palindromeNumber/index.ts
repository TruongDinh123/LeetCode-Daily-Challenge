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

export function isPalindrome(x: number): boolean {
    if( x < 0) return false;
    if( x < 10 ) return true;
    let reversed = 0;
    let temp = x;
    while(temp > 0){
        reversed = reversed * 10 + temp % 10; // 121 % 10 = 12.1 (temp % 10 là phép chia lấy dư) => reversed = ?;
        temp = Math.floor(temp / 10); // hàm Math.floor lấy chữ số trước dấu phẩy => temp = ?
    }
    return x === reversed;
}