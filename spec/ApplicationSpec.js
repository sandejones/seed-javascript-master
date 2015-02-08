describe("Application", function() {
    var application = new Application();

    it("should do what I specify", function() {

      expect( null ).toBe( application.myFunction() );

    });

    it("should return the largest prime palindrome less than 1000.", function() {

      expect( 929 ).toBe( application.getLargestPrimePalindrome() );

    });

    it("should return the sum of the first 1000 prime numbers.", function() {

      expect( 3682913 ).toBe( application.getSumOfPrimes() );

    });    


    it("should return input string convertted it into lowercase.", function() {

      expect( null ).toBe( application.getLowerCase("files/lowercasetest.txt") );

    }); 

    it("should return F(n).. where n = input", function() {

      expect( null ).toBe( application.getFibonacciSeries("files/fibonacciseries.txt") );

    }); 


    it("should return grade school multiplication table upto 12*12", function() {

      expect( null ).toBe( application.MultiplicationTables() );

    }); 
    
    it("should return output the answer of the query read from file.", function() {

      expect( null ).toBe( application.QueryBoard("files/queryboard.txt") );

    });     
          
});
