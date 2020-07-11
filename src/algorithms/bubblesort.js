export default function bubbleSort(array, i, j) {
  const sortedArray = [...array];

  if (sortedArray[j] > sortedArray[j + 1]) {
    let temp = sortedArray[j];
    sortedArray[j] = sortedArray[j + 1];
    sortedArray[j + 1] = temp;
  }

  return sortedArray;
}

export function bubbleSortAnimation(array, i, j) {
  if (i < array.length) {
    if (j < array.length - 1 - i) {
      j++;
    } else {
      j = 0;
      i++;
    }
  }

  return { i, j };
}
