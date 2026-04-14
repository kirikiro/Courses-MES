'use strict';

// Напишите функцию, которая принимает массив и значение, и возвращает true, если
// это значение присутствует в массиве, и false, если нет. Используйте строгий режим.

// встроенные функции
const arrBuiltInFunctions = (a, b) => {
    return a.includes(b);
}

console.log(arrBuiltInFunctions([1, 2, 4, 5, 6], 1));

// через цикл

const arrAlgoritms = (a, b) => {
    let found = false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] === b) {
            found = true;
            break;
        }
    }
    return found;
}

console.log(arrAlgoritms([1, 2, 4, 5, 6], 76));