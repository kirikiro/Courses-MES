'use strict';


// Напишите функцию для расчета факториала числа. Функция должна принимать число
// в ачестве аргумента и возвращать его факториал. Учтите использование строгого режима
const factorial = (number) => {
    return (number !== 1) ? number * factorial(number - 1) : 1;
}

console.log(factorial(10));