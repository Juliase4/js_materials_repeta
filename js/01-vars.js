// const a = "Переменная в script-1";
// console.log(a);

// --- числовой литерал и camelCase --- //
const age = 10;
const totalPrice = 200.74;
// --- строка --- //
const userName = 'Chelsy';
const message = 'Добро пожаловать!';
// --- буль --- //
const isOpen = true;
const shouldConfirm = false;

console.log('Цена', totalPrice);

// --- оператор typeof --- //
const type = typeof 5;
console.log(type);

const type1 = typeof 'sfkdmfks';
console.log(type1);

const type2 = typeof true;
console.log(type2);

const type3 = typeof isOpen;
console.log(type3);

// --- Как window.alert блокирует интерпритацию --- //
console.log('До');
alert('Hello');
console.log('После');