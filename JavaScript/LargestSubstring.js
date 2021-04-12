const lengthOfLongestSubstring = function (s) {
  let largestString;
  let prevlargestString = '';
  let i = 1;
  while (i < s.length) {
    if (!largestString) {
      largestString = s[i];
    } else {
      largestString += s[i];
    }
    const indexOf = largestString.indexOf(s[i]);
    console.log(s[i], indexOf);
    if (indexOf > -1) {
      prevlargestString = largestString.slice(indexOf + 1, -1);
      largestString = s[i];
    }
    i++;
  }

  console.log(largestString);
  console.log(prevlargestString);
};

lengthOfLongestSubstring('dvdf');

//  for (let i = 0; i < s.length; i++) {
//     if (!largestString) {
//       largestString = s[i];
//     }

//     const indexOF = largestString.indexOf(s[i]);
//     console.log(s[i]);
//     console.log(largestString);
//     console.log(indexOF);
//     if (indexOF > 0) {
//       prevlargestString = largestString.slice(indexOF + 1, -1);
//       largestString = s[i];
//     } else {
//       largestString += s[i];
//     }
//   }
