class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const hash: { [key: number]: number } = {};

        let i = 0;

        while (true) {
            if (nums[i] === undefined) {
                return false;
            }

            if (hash[nums[i]] === undefined) {
                hash[nums[i]] = 1;
                i++;
            } else {
                return true
            }
        }
    }
}
