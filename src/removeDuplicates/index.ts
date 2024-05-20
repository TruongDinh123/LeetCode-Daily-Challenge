const nums = [1, 1, 2, 3, 3]

function removeDuplicates(nums: number[]): number {
    if(nums.length === 0) return 0;

    let total = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i] !== nums[i-1]) {
            nums[total] = nums[i];
            total++;
        }
    }
    return total;
};