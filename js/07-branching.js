// Оператор ветвления if
// Если if - false, то тело if не выполняется. Если if - true, то тело if будет выполнено.
if(5 > 30) {
    // тело
    console.log('fuhwui');
}
console.log('dgsdg');

// Оператор ветвления if...else
if (5 > 30) {
    console.log('x > y');
} else {
    console.log('x < y');
}

// Оператор ветвления else...if
const salary = 5000;

if (salary <= 500) {
    console.log('Уровень 1');
} else if (salary > 500 && salary <= 1500) {
    console.log('Уровень 2');
} else if (salary > 1500 && salary <= 3000) {
    console.log('Уровень 3');
} else {
    console.log('Уровень 4');
}

// Тернарный оператор
const balance = 1000;
// let message;

// if (balance >= 0) {
//     message = 'Позитивный баланс';
// } else {
//     message = 'Негативный баланс';
// }

// const message = условие ? выражение1 : выражение2;
const message = balance >= 0 ? 'Позитивный баланс' : 'Негативный баланс';

console.log(message);

// Блочная область видимости переменных
const b = 10; // глобальная область видимости

if (true) { // в теле - это блочная область видимости
    console.log(b);
    const a = 5;

    console.log(a);
}

console.log(b);