import { twoSum } from '../twoSum/index';

describe('twoSum Function', () => {
  it('should find indices of two numbers such that they add up to a specific target', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });

  it('should return an empty array if no two numbers add up to the target', () => {
    expect(twoSum([1, 2, 3], 7)).toEqual([]);
  });

  it('should handle negative numbers correctly', () => {
    expect(twoSum([-1, -2, -3, -4], -6)).toEqual([1, 3]);
  });

  it('should handle cases where the target is zero', () => {
    expect(twoSum([-1, 1], 0)).toEqual([0, 1]);
  });
});