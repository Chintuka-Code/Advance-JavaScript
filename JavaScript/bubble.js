function bubbleSort(input) {
  let string = input.split('');
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    let swap = false;
    count++;
    for (let j = 0; j < string.length; j++) {
      if (string[j] > string[j + 1]) {
        swap = true;
        let temp = string[j];
        string[j] = string[j + 1];
        string[j + 1] = temp;
      }
    }
    if (!swap) {
      //   console.log('no swap');
      //   console.log(count);
      return string.join('');
    }
  }
  //   console.log(count);
  return string.join('');
}

console.log(bubbleSort('34512'));
