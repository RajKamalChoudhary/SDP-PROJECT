const arrayContainer = document.getElementById('arrayContainer');
const newArrayBtn = document.getElementById('newArrayBtn');
const bubbleSortBtn = document.getElementById('bubbleSortBtn');
const selectionSortBtn = document.getElementById('selectionSortBtn');
const insertionSortBtn = document.getElementById('insertionSortBtn');

let array = [];

function generateArray() {
  array = [];
  for (let i = 1; i < 50; i++) {
    array.push(Math.floor(Math.random() * 200));
  }
  displayArray();
}

function displayArray() {
  arrayContainer.innerHTML = '';
  for (let i = 0; i < array.length; i++) {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = array[i] + 'px';
    arrayContainer.appendChild(bar);
  }
}

async function bubbleSort() {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      const bar1 = arrayContainer.childNodes[j];
      const bar2 = arrayContainer.childNodes[j + 1];
      bar1.classList.add('current');
      bar2.classList.add('current');
      await new Promise(resolve => setTimeout(resolve, 100));
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
        displayArray();
      }
      bar1.classList.remove('current');
      bar2.classList.remove('current');
    }
    const bar = arrayContainer.childNodes[array.length - i - 1];
    bar.classList.add('sorted');
  }
}

async function selectionSort() {
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      const bar1 = arrayContainer.childNodes[j];
      const bar2 = arrayContainer.childNodes[minIndex];
      bar1.classList.add('current');
      bar2.classList.add('current');
      await new Promise(resolve => setTimeout(resolve, 100));
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
      bar1.classList.remove('current');
      bar2.classList.remove('current');
    }
    if (minIndex != i) {
      let tmp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = tmp;
      displayArray();
      const bar1 = arrayContainer.childNodes[i];
      const bar2 = arrayContainer.childNodes[minIndex];
      bar1.classList.add('swapped');
      bar2.classList.add('swapped');
  await new Promise(resolve => setTimeout(resolve, 100));
  bar1.classList.remove('swapped');
  bar2.classList.remove('swapped');
}
const bar = arrayContainer.childNodes[array.length - i - 1];
bar.classList.add('sorted');
}
const bar = arrayContainer.childNodes[0];
bar.classList.add('sorted');
}

async function insertionSort() {
for (let i = 1; i < array.length; i++) {
let j = i - 1;
const current = array[i];
const bar1 = arrayContainer.childNodes[i];
bar1.classList.add('current');
await new Promise(resolve => setTimeout(resolve, 100));
while (j >= 0 && array[j] > current) {
array[j + 1] = array[j];
displayArray();
const bar2 = arrayContainer.childNodes[j];
bar2.classList.add('swapped');
await new Promise(resolve => setTimeout(resolve, 100));
bar2.classList.remove('swapped');
j--;
}
array[j + 1] = current;
displayArray();
bar1.classList.remove('current');
const bar2 = arrayContainer.childNodes[j + 1];
bar2.classList.add('sorted');
await new Promise(resolve => setTimeout(resolve, 100));
bar2.classList.remove('sorted');
}
const bar = arrayContainer.childNodes[array.length - 1];
bar.classList.add('sorted');
}

newArrayBtn.addEventListener('click', generateArray);
bubbleSortBtn.addEventListener('click', bubbleSort);
selectionSortBtn.addEventListener('click', selectionSort);
insertionSortBtn.addEventListener('click', insertionSort);

generateArray();