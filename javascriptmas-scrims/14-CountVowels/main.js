function countVowelConsonant(str) {
  // write code here
  let vowels = ['a','e','i','o','u']
  let sum = 0
  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i])){
          sum += 1
      } else {
          sum += 2
      }
  }
  return sum
}



/**
* Test Suite 
*/
describe('countVowelConsonant()', () => {
    it('returns total of vowels(1) and consonants(2) to be added', () => {
        // arrange
        const value = 'abcde';
        
        // act
        const result = countVowelConsonant(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});