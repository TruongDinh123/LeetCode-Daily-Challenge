/**
 Do not return anything, modify nums1 in-place instead.

 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, 
 and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, 
 and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 
 - Sẽ sử dụng concat để tạo ra 1 mảng mới chứa nums1 và nums2.
 - Sử dụng sort để sắp xếp thứ tự marbg mới không giảm.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    const nums1Copy = nums1.slice(0, m);
    const nums2Copy = nums2.slice(0,n);
    const newArray =nums1Copy.concat(nums2Copy).sort((a,b) => a - b);

    //ghi đè từ newArray vào nums1.
    for(let i = 0; i < newArray.length; i++) {
        nums1[i] = newArray[i];
    }
}
