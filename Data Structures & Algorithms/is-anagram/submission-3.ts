class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map();

        if (s.length !== t.length) {
            return false;
        }

        for (let i = 0; i < s.length; i++) {
            const char = s[i];

            if (!map.has(char)) {
                map.set(char, 0);
            }

            map.set(char, map.get(char) + 1);
        }

        for (let i = 0; i < t.length; i++) {
            const char = t[i];

            if (!map.has(char) || map.get(char) === 0) {
                return false;
            }

            map.set(char, map.get(char) - 1);
        }

        return true;
    }
}
