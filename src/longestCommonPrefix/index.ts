// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

export default function longestCommonprefix(strs: string[]): string {
    if(!strs.length) return ""
    let prefix: string = strs[0]
    for(let i = 1; i < strs.length; i++){
        const string = strs[i];
        while(!string.startsWith(prefix)){
            prefix = prefix.slice(0, prefix.length - 1);
        }
        if(prefix === '') {
            return ''
        }
    }
    return prefix
}