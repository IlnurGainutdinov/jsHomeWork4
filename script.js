// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(i + ' - это ноль');
//     } else if (i % 2 !== 0){
//         console.log(i + ' - это нечетное число');
//     } else {
//         console.log(i + ' - это четное число');
//     }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

// const array = [1, 2, 3, 4, 5, 6, 7];
// const array2 = array.splice(4,1);
// console.log(array);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
 

const array = [];
for (let i = 0; i < 5; i++) {
    array.push(Math.floor(Math.random() * (9 - 0) + 0));
}
console.log(array);

// 1. Рассчитать сумму элементов этого массива
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     sum += array[i]
// }
// console.log(sum);

// 2. Найти минимальное число
// let min = 9;
// for (let i = 0; i < array.length; i++) {
//     if (array[i] < min){
//         min = array[i];
//     } 
    
// }
// console.log(min);

// 3.Найти есть ли в этом массиве число 3
for (let i = 0; i < array.length; i++) {
    if (array[i] === 3) {
        console.log('Есть в этом массиве число 3');
        break;
    } 
    if (array[array.length-1] !== 3){
        console.log('Нет');
    }
}



// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

// for (let i = 0; i < 20; i++) {
//     let x = 'x'
//     console.log(x.repeat(i+1));
// }                                                      