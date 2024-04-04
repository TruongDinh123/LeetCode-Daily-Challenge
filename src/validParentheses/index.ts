// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

function isMatchingPair(opening: string, closing: string): boolean {
    return(
        (opening === '(' && closing === ')') ||
        (opening === '{' && closing === '}') ||
        (opening === '[' && closing === ']')
    )
}

export default function isValid(s: string): boolean {
    const statck: string[] = []; //tạo 1 hằng số tên stack và mảng này được khởi tạo rỗng ban đầu
    for(const char of s) {
        if(char === '(' || char === '{' || char === '[') {
            statck.push(char) //nếu char là 1 trong 3 kí tự này thì push vào mảng stack
        } else if (char === ')' || char === '}' || char === ']') {
            if(!statck.length || !isMatchingPair(statck[statck.length - 1], char)){
                //nếu mảng stack rỗng hoặc không phải là 1 cặp ngoặc mở đóng thì trả về false
                return false;
            }
            statck.pop(); //nếu không thì pop ra khỏi mảng stack
        }
    }
    return statck.length === 0; //nếu mảng stack rỗng thì trả về true
};

