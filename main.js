let lang = prompt('Введите "ru" или "en":', 'ru').toLowerCase();
let daysRu = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресеньe'];
let daysEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let days = {
  'ru': daysRu,
  'en': daysEn
};

// Решение через if
if (lang === 'ru') {
  console.log(daysRu);
} else if (lang === 'en') {
  console.log(daysEn);
} else {
  console.log('Такого языка, к сожалению, нет в базе.');
}

// Решение через switch-case
switch (lang) {
  case 'ru':
    console.log(daysRu);
    break;
  case 'en':
    console.log(daysEn);
    break;
  default:
    console.log('Такого языка, к сожалению, нет в базе.');
}

// Решение через многомерный массив(надеюсь можно объект использовать)
console.log(days[lang]);