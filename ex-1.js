//Задание 1
//Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
//При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.
//На этот раз оформите решение в виде функции, постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис.

let numArr = [1, 3, 6, 0, 0, 9, 'null', 'cat'];
function elCount () {
  let evenNumber = 0;
  let oddNumber = 0;
  let otherNumber = 0;
  for (let i = 0; i < numArr.length; i++){
    if ((numArr[i] === 0) || (typeof(numArr[i]) != 'number')) {
      otherNumber++;
  } else {
      if (numArr[i] % 2 === 0) {
          evenNumber++;
      } else {
          oddNumber++;
      }
  }
}

console.log(`Четных элементов: ${evenNumber}`);
console.log(`Нечетных элеметов: ${oddNumber}`);
console.log(`Других элементов: ${otherNumber}`);

for (i = 0; i < numArr.length; i++) {
  if (numArr[i] === 0) {
    console.log(`Значение с индексом ${i} равно нулю!`);
  } else {
    console.log('Значений, равных нулю не найдено.');
  }
}
}
elCount();
