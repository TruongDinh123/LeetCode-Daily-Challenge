/* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

*/

function containDuplicate(nums: number[]): boolean {
    const set = new Set<number>; // lưu từng phần tử được duyệt trong mảng.
    for(const num of nums) {
        if(set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}

//solution 1: ở hàm trên khi gặp case nếu 1 mảng nums chứa vô số các số trong mảng đấy. Khi sử dụng vòng 2 vòng lập for tức là O(n^2) cho thời gian xử lí và nếu gặp case nums như solution 1 thì sẽ bị lỗi "The time limit exceed"
function containsDuplicate1(nums: number[]): boolean {
    for(let i = 0; i < nums.length; i++) {
        const element = nums[i];
        for(let j = i + 1; j < nums.length; j++) {
            if(element === nums[j])
                return true;
        }
    }
    return false;
};

// giải pháp: chuyển O(n^2) xuống thành O(n) bằng cách sử dụng 1 vòng lập for duyệt qua từng phần tử trong mảng đấy containsDuplicate1.
 
//- Sử dụng vòng Set để thực hiện lưu các phần tử đã duyệt qua mảng.

 /*
    Set: Thích hợp khi chỉ cần lưu trữ giá trị duy nhất và kiểm tra sự tồn tại của nó.
    Map: Thích hợp khi cần lưu trữ cặp key-value, mặc dù trong trường hợp này chỉ cần giá trị là true. (ví dụ ở bài twoSum)
    Object: Có thể dùng như một map đơn giản, nhưng có thể phức tạp hơn khi xử lý các key không phải là chuỗi.
 */