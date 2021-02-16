let discription = `
<div>
  <p>Hello this is my First</p>
  <h3 class="h3">Second</h3>
  <p>This is my second</p>
  <h4 class="h4">Third</h4>
  <p>THis is my Third</p>
</div>`;

let index = [];

async function countNumberOfPTag() {
  // Find how many p tag inside any string
  // var regex = /((<\/)\p+(>))/g;
  var regex = /<p>/gi;
  let result;
  while ((result = regex.exec(discription))) {
    index.push(result.index);
  }
  console.log(index);

  //   Call insert Function to insert data
  index.forEach((element, i) => {
    const data = insert(
      discription,
      element,
      `<h1>Heading <span>${i}</span></h1>`
    );
    discription = data;
  });
  document.querySelector('body').innerHTML = discription.join('');
}

// create Division between array and then put data inside it
const insert = (arr, index, newItem) => [
  // part of the array before the specified index
  ...arr.slice(0, index),
  // inserted item
  newItem,
  // part of the array after the specified index
  ...arr.slice(index),
];

countNumberOfPTag();
