function getPrimes(max) {
    var sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

function isPrime(num) {
    // Check if it's an even number
    if (num % 2 === 0) return false;

    // Loop through all odd numbers that might divide
    for (var x = 3; x <= Math.round(num/2); x += 2)
        // Check if it divides cleanly
        if (num % x === 0)
            return false
    // Otherwise, it is a prime
    return true
}

function paddString(str,pad){
  var paddedString = "";
  paddedString = str;
  paddedString = paddedString.trim();

  while (paddedString.length <= pad){
    paddedString = paddedString.concat(" ");
  }
  return paddedString;
}

function checkPalindrom(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function fibonacciSequence (seed) {
  var i;
  var fib = []; //Initialize array!
  var fibSum = 0;

  fib[0] = 0;
  fib[1] = 1;
  for(i=2; i<=seed; i++)
  {
      // Next fibonacci number = previous + one before previous
      // Translated to JavaScript:
      fib[i] = fib[i-2] + fib[i-1];
      //alert(fib[i]);
      fibSum += fib[i];
  }
  return fib[fib.length-1];
}

function SetRow(inputArray,i,x){
  var actionArray = new Object();
  actionArray = inputArray;
  for (var y = 0; y < 256; y++) {
    actionArray[i][y] = x;
  };
  
  return actionArray;
}

function SetCol(inputArray,j,x){
  var actionArray = new Object();
  actionArray = inputArray;
  
  for (var z = 0; z < 256; z++) {
    actionArray[z][j] = x;
  };

  return actionArray;
}

function QueryRow(inputArray,i){
  var actionArray = new Object();
  var rowSum = 0;
  actionArray = inputArray;
  for (var y = 0; y < 256; y++) {
    rowSum =+ actionArray[i][y];
  };

  return rowSum;
}

function QueryCol(inputArray,j){
  var actionArray = new Object();
  var colSum = 0;
  actionArray = inputArray;
  
  for (var z = 0; z < 256; z++) {
    colSum =+ actionArray[z][j];
  };

  return colSum;
}

function Application() {
}

Application.prototype.myFunction = function() {
  
  	//this will fail because null does not equal undefined
  	//return;

  	//this will pass!
   	return null;
  
};

Application.prototype.getLargestPrimePalindrome = function() {

  // get all prime number less then 1000;
  var primeRoot = getPrimes(1000),
      primeNumber = "";
      palindromResult = "";
      ResultString = "";

  // start consuming the primeRoot array from the end backwords and check
  // if it is a palindrom    
  for (var i = primeRoot.length - 1; i >= 0; i--) {
    primeNumber = primeRoot[i];

    // check if the primeNumber is a 
    palindromResult = checkPalindrom(primeNumber.toString());
    if(palindromResult)
    {
      //" is a prime palindrom "
      break;
    }
  };
  //return the first prime number that is a palindrom
  return primeNumber;
   
}

Application.prototype.getSumOfPrimes = function() {

  var currentPrime = 2,
      sumOfPrimes = 0,
      primeRoot = [],
      primeSeed = currentPrime;

  primeRoot = getPrimes(currentPrime);
  while (primeRoot.length < 1000)
  {
    currentPrime = primeRoot[primeRoot.length - 1];
    primeRoot = getPrimes(primeSeed);
    primeSeed = primeSeed + 1;
  }

  for (var i = primeRoot.length - 1; i >= 0; i--) {
    sumOfPrimes = sumOfPrimes + primeRoot[i]
  };
  
  return sumOfPrimes;
}

Application.prototype.getLowerCase = function(file) {

  var txtFile = new XMLHttpRequest();
  var lines = [];
  var returnArray = new Array();

  txtFile.open("GET", file, true);
  txtFile.onreadystatechange = function()
  {
    if (txtFile.readyState === 4) {  // document is ready to parse.
      if (txtFile.status === 200) {  // file is found
        //allText = txtFile.responseText; 
        lines = txtFile.responseText.split("\n");      
        returnArray = lines.slice(0);
        for (var i = returnArray.length - 1; i >= 0; i--) {
          outputString = returnArray[i];
          outputString = outputString.toLowerCase();
          console.log(outputString);
        };

      }
    }
  }
  txtFile.send(null);

  

 	return null;  
}


Application.prototype.getFibonacciSeries = function(file) {

  var txtFile = new XMLHttpRequest();
  var lines = [];
  var returnArray = new Array();

  txtFile.open("GET", file, true);
  txtFile.onreadystatechange = function()
  {
    if (txtFile.readyState === 4) {  // document is ready to parse.
      if (txtFile.status === 200) {  // file is found
        //allText = txtFile.responseText; 
        lines = txtFile.responseText.split("\n");      
        returnArray = lines.slice(0);
        for (var i = returnArray.length - 1; i >= 0; i--) {
          sequenceValue = fibonacciSequence(returnArray[i]);
          
          console.log(sequenceValue);
        };

      }
    }
  }
  txtFile.send(null);
  
  return null;  
}

Application.prototype.MultiplicationTables = function() {

  var boardX = 12;
  var boardY = 12;
  var matrixArray = [];
  var arrayIndex = 0;
  var multiplicationResult = 0;
  var rowString = "";

    for (var i = 0; i < boardX; i++) {

      rowString = "";
      matrixArray[i] = [];

      for (var j = 0; j < boardY; j++) {
          multiplicationResult = (i+1)*(j+1);
          matrixArray[i][j] =  paddString(multiplicationResult.toString(),4);
          
          //console.log(matrixArray[i][j]);
          rowString = rowString.concat(matrixArray[i][j]);
          //document.write(matrixArray[i][j]);
      }
      //document.write("<br>");
      console.log(rowString.trim());
      
 }

  return null;
  
}


Application.prototype.QueryBoard = function(file) {

	var boardX = 256;
	var boardY = 256;
  var QueryBoard = [];
  var txtFile = new XMLHttpRequest();
  var lines = [];
  var returnArray = new Array();
  var valuesArray = [];

  // create the zeroed matrix
    for (var i = 0; i < boardX; i++) {
      QueryBoard[i] = [];

      for (var j = 0; j < boardY; j++) {          
          QueryBoard[i][j] = 0;
      }    
    }

  // read external file
  txtFile.open("GET", file, true);
  txtFile.onreadystatechange = function()
  {
    if (txtFile.readyState === 4) {  // document is ready to parse.
      if (txtFile.status === 200) {  // file is found
        //allText = txtFile.responseText; 
        lines = txtFile.responseText.split("\n");
          for (var i = lines.length - 1; i >= 0; i--) {
            //alert(lines[i]);
            lineItems = lines[i].split(" ");
            if(lines[i].match("QueryCol") != null)   
              {
                QueryValue = QueryCol(QueryBoard,parseInt(lineItems[1]));
                console.log("QUERYCOL: " + lines[i] + " = " + QueryValue); 
              }
            else if(lines[i].match("QueryRow") != null)   
              {                
                QueryValue = QueryRow(QueryBoard,parseInt(lineItems[1]));
                console.log("QUERYROW: " + lines[i] + " = " + QueryValue);
              }
            else if (lines[i].match("SetRow") != null) 
              {
                QueryBoard = SetRow(QueryBoard,parseInt(lineItems[1]),parseInt(lineItems[2]));
                console.log("SETROW: " + lines[i]);
              }
            else if (lines[i].match("SetCol") != null) 
              {
                QueryBoard = SetCol(QueryBoard,parseInt(lineItems[1]),parseInt(lineItems[2]));
                console.log("SETCOL: " + lines[i]);
              };
            
          };
        };

      }
    }



  txtFile.send(null);
  
  return;  

  
}