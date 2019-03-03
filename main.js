
let string1 = 'some test string';

// Получить первую и последнюю буквы строки
let firstLetter = string1.substring(0, 1);
console.log(firstLetter);


let secondLetter = string1.substr(-1);
console.log(secondLetter);

// Сделать первую и последнюю буквы в верхнем регистре
let thirdLetter = string1.substr(0, 1).toLocaleUpperCase();
console.log(thirdLetter);

let fourthLetter = string1.substr(-1).toLocaleUpperCase();
console.log(fourthLetter);

// Найти положение слова ‘string’ в строке
console.log('Индекс вхождения «string» с начала строки равен ' + string1.indexOf('string'));

// Найти положение второго пробела 
let lastSpace = string1.lastIndexOf('\s')-1;
console.log('Индекс вхождения «второго пробела» с начала строки равен ' + lastSpace);  

// Получить строку с 5-го символа длиной 4 буквы
let fifthLetter = string1.substr(4, 4);
console.log(fifthLetter);

// Получить строку с 5-го по 9-й символы
let sixthLetter = string1.slice(4, 10);
console.log(sixthLetter);

// Получить новую строку из исходной путем удаления последних 6-и символов
let seventhLetter = string1.substring(0, string1.length-6);
console.log(seventhLetter);

// Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”
let a = 20;
let b = 16;
let str20 = a.toString();
let str16 = b.toString();
let str2016 = str20 + str16;
console.log(str2016);

// Получить число pi из Math и округлить его до 2-х знаков после точки
let number = Math.PI.toFixed(2);
console.log(number);

// Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51
let numbermax = Math.max(15, 11, 16, 12, 51, 12, 13, 51);  
console.log(numbermax);

let numbermin = Math.min(15, 11, 16, 12, 51, 12, 13, 51);  
console.log(numbermin);

// Работа с Math.random:
// a. Получить случайное число и округлить его до двух цифр после запятой
// b. Получить случайное целое число от 0 до X. X - любое произвольное число. 


let number_one = Math.floor(Math.random() * 10); 
console.log(number_one);
let number_two = Math.random();
let number_three = number_two.toFixed(2);
console.log(number_three);


// Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?
let numberone = 0.6;
let numbertwo = 0.7;
let numberthree = numberone + numbertwo;
let numberfour = numberthree.toFixed(2);
console.log(numberfour);

// Получить число из строки ‘100$’
let dollar = "100$";
let hundred = dollar.substring(0, dollar.length - 1);
let res = parseInt(hundred);
console.log("parse 100$ in number:", res);


