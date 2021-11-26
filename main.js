// Определяем переменную
let num = 266219;
// Переводим Number в итерируемый тип для перебора
num = String(num);
// Создаем переменную для накапливания результата
let multNum = 1;
for (let i = 0; i < num.length; i++) {
  multNum *= Number(num[i]);
}
// Выводим результат перемножения цифр числа
console.log(`Произведение цифр числа ${num} = ${multNum}`);

// Возведение числа в 3 степень с помощью оператора **
let multNumDeg = multNum ** 3;
console.log(`Степень 3 числа ${multNum} = ${multNumDeg}`);

// Вывод первых двух символов multNumDeg
multNumDeg = String(multNumDeg);
console.log("Первые два символа:", multNumDeg.substr(0, 2));