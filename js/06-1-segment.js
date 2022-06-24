// Напиши скрипт, который проверяет вхождение числа в отрезок обозначенный х1 и х2.
// - До х1
// - После х2
// - От х1 до х2
// - До х1 или после х2

const x1 = 10;
const x2 = 30;
const number = 50;

console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);

// number > x1 && number < x2
// 50 > 10 && 50 < 30
// true && false
// false

// 5 > 10 && 5 < 30
// false && true
// false

// 15 > 10 && 15 < 30
// true && true
// true (последнее)
console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}? `, number > x1 && number < x2);

// 150 < 10 || 150 > 30
// false || true
// true

// 25 < 10 || 25 > 30
// false || false
// false (последнее)
console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}? `, number < x1 || number > x2);
