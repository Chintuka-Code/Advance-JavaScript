const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const number = randomIntFromInterval(2, 8);
console.log(number);
