let i = 0;
let j = 0;

export default function bubbleSort(array) {
  const sortedArray = [...array];

  if (sortedArray[j] > sortedArray[j + 1]) {
    let temp = sortedArray[j];
    sortedArray[j] = sortedArray[j + 1];
    sortedArray[j + 1] = temp;
  }
  animateBubbleSort(sortedArray);

  return sortedArray;
}

function animateBubbleSort(array) {
  if (j < array.length - 1 - i) {
    j++;
  } else {
    j = 0;
    i++;
  }
}
