function maxSubArray(nums: number[]): number {
  let result = nums[0];
  let curr = 0;

  for (const num of nums) {
    curr = Math.max(curr + num, num);
    result = Math.max(result, curr);
  }
  return result;
}

/*
    - Hàm Math.max sử dụng trong Sử Dụng Trong Kadane's Algorithm
    - Kadane's Algorithm: là một thuật toán để tìm một dãy con liên tiếp có tổng lớn nhất trong một mảng số nguyên.
    - Để giải quyết bài toán này, chng ta sử dụng một vòng lập for duyệt qua từng phần tử trong mảng đấy.
    - Vòng lập for này sẽ duyệt qua từng phần tử trong mảng đấy và cố gắng tìm dãy con liên tiếp có tổng lớn nhất.
    - Để lấy tổng hiện tại, chng ta sử dụng biến curr và cho nó là Math.max(curr + num, num).
    - Hàm Math.max sẽ trả về giá trị lớn nhất giữa 2 giá trị được truyền vào nó.
    - Biến result sẽ lưu trữ giá trị tối đa hiện tại.
    - Kết quả cuối cng sẽ là tổng lớn nhất của tất cả các dãy con liên tiếp có tổng lớn nhất trong mảng đấy.
*/

const nums = [5, 4, -1, 7, 8];
console.log(maxSubArray(nums));