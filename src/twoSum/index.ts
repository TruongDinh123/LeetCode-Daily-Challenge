// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

export function twoSum(nums: number[], target: number): number[] {
    let map = new Map(); // khởi tạo 1 mảng mới để chứa giá trị
    //sử dụng vòng lập for để duyệt qua từng phần tử của mảng
    for (let i = 0; i < nums.length; i++) {
        //lấy target trừ đi phần tử hiện tại là nums[i]
        let complement = target - nums[i];
        //kiểm tra xem phần tử hiện tại có trong mảng không
        if (map.has(complement)) {
            //nếu có thì trả về vị trí của phần tử đó và vị trí hiện tại
            return [map.get(complement), i];
        }
        //nếu không có thì thêm phần tử hiện tại vào mảng
        map.set(nums[i], i);
    }
    //nếu không tìm thấy thì trả về mảng rỗng
    return [];
}

// Time complexity: O(n)