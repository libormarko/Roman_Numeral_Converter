function convertToRoman(num) {
    let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    let roman = '';
    for (let i in lookup) {  	      // Loop through the key/value pairs in the lookup object
      while ( num >= lookup[i] ) {  // While the condition is met do following >>>
        roman += i;   			  // Add the current i key to the variable roman
        num -= lookup[i];     	  // Decrease the num number by the current i value
      }
    }
    return roman;
  };