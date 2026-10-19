class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let hash: { [key: string]: number } = {};

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0, n = s.length; i < n; i++) {
            const char = s[i];

            if (hash[char] === undefined) {
                hash[char] = 0;
            }

            hash[char] += 1;
        }

        for (let i = 0, n = t.length; i < n; i++) {
            const char = t[i];

            if (hash[char] === undefined || hash[char] === 0) {
                return false;
            }

            hash[char] -= 1;
        }

        return true;
    }
}
