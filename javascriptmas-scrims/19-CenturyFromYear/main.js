function centuryFromYear(num) {
    //from 1 to 100, round down to the nearest 100
    var century
    if (Math.abs(num) >= 1000){
        if (num % 100 != 0) {
            century = (Math.floor(num/100)+1)
        } else {
            century = Math.floor(num/100)
        }
    } else if (Math.abs(num) >= 0 && Math.abs(num) < 1000) {
        century = 1
    }
    
    if (century < 0){
        return Math.abs(century-1) + " BC"
    } else {
        return century
    }
}



/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });     
});