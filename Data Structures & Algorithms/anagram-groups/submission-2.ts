class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        // loop through each string
        for (let i = 0; i < strs.length; i++) {
            // create a frequency array of 26 numbers
            const frequency = new Array(26).fill(0);

            // loop through each character update its frequency
            for (let j = 0; j < strs[i].length; j++) {
                frequency[strs[i][j].charCodeAt(0) - 97]  += 1;
            }

            // convert the frequency array into string as key
            const key = frequency.join();

            // if the key exists in the map
            if (map.has(key)) {
                // add the string to the map value
                map.get(key).push(strs[i]);
            } else {
                // else add it as new key in map
                map.set(key, [strs[i]])
            }
        }
        // return all the groups stored in the map as an array of arrays
        return Array.from(map.values());
    }
}