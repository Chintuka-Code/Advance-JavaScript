function reverseString(str) {
  var newString = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  console.log(newString);
  return newString;
}

function ple(input) {
  const reverseString = reverseString(input);

  if (input === reverseString) {
    console.log('pal');
  } else {
    console.log('not a pa');
  }
}

// ple('sabb');s

function count(string) {
  let alp = [{ string: '', count: 0 }];

  for (let i = 0; i < string.length; i++) {
    let count = 0;

    for (let j = 0; j < string.length; j++) {
      if (string[i] == string[j]) {
        count++;
        string.substr(string[i]);
      }
    }

    alp.push({ string: string[i], count });
  }
}

count('sabban');
