function plen(array) {
  for (let i = 0; i < Math.ceil(array.length) / 2; i++) {
    return array[i] != array[array.length - 1 - i] ? false : true;
  }
}

console.log(plen('aba'));
