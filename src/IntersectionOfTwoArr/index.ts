function intersect(nums1: number[], nums2: number[]): number[] {
  const arr = [];
  for (const num of nums1) {
    const numIdx = nums2.indexOf(num);
    if (numIdx !== -1) {
      arr.push(num);
      nums2[numIdx] = null;
    }
  }
  return arr;
}
// Hàm indexOf sẽ lấy ra index của num trong nums2
// nếu không có thì sẽ return -1
// nếu có thì sẽ return index của num trong nums2
