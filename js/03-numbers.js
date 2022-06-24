// --- Парс числа с Number.parseInt() & Number.parseFloat() ---
let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth); // 50 - это число, а не строка

let elementHight = '200.74px';
// elementHight = Number.parseFloat(elementHight);
// console.log('elementHight: ', elementHight);

// --- Метод число.toFixed(digits) --- (отсекает, а НЕ округляет)
// * - Матрешки на примере console.log(Number(число.toFixed(didgits)))

let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);

// или:
// salary = Number(salary.toFixed(2));

// console.log(salary);

// // или:
// console.log(Number(salary.toFixed(2)));

// --- Приведение (преобразование) к числу с Number(value)
// * - Значение NaN (Not a Number) и метод Number.isNan(value)
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';

// console.log(Number(quantity)); // выведено число
// console.log(Number(value)); // выведен NaN

// --- Объект Math --- (для работы с датами / математикой)
// * - Возведение в степень
// const base = 2;
// const power = 5;

// const result = Math.pow(base, power);

// console.log(result);
// * - Exponent operator
// console.log(base ** power); // ** - оператор экспонент, возведение в степень, аналог Math.pow

// ** Напиши скрипт, который просит пользователя ввести число и степень,
// возводит число в эту степень и выводит результат в консоль **

// 1. Попросить ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);

// console.log(base);
// 2. Попросить ввести степень и сохранить в переменную
// let power = prompt('Давай степень');
// power = Number(power);

// console.log(power);
// 3. Возвести введенные данные в степень и вывести
// const result = base ** power;

// console.log(result);

// Генерим псевдослучайные числа
// * - Math.random()
// * - Math.raund()

// const max = 80;
// const min = 10;
// Math.random() * (max - min) + min (запомнить формулу)
// const result = Math.round(Math.random() * (max - min) + min);

// console.log(result);

// Пример с цветами (ради интересва :))
// const colors = ['tomato', 'teal', 'orange', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;


