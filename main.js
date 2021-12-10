const getRightDate = (dateString) => {
  // Делим дату на две части: первое время, второе собственно дата
  let allDateParts = dateString.split(' ');

  // Делим уже время на составляющие
  let partsTime = allDateParts[0].split(':');

  // Делим дату на составляющие
  let partsDate = allDateParts[1].split('.');

  // Закидываем все в один массив
  allDateParts = partsTime.concat(partsDate);

  // Перебираем все части даты, и там где длина составляющей равна 1, добавляем 0
  allDateParts.forEach((part, index) => {
    if (part.length === 1) {
      allDateParts[index] = '0' + part;
    }
  });

  // Снова аккуратно все собираем
  partsTime = allDateParts.slice(0, 3).join(':');
  partsDate = allDateParts.slice(3, 6).join('.');
  dateString = partsTime + ' ' + partsDate;

  return dateString;
};

const declOfNum = (n, textForms) => {
  n = Math.abs(n) % 100;
  var n1 = n % 10;
  if (n > 10 && n < 20) { return textForms[2]; }
  if (n1 > 1 && n1 < 5) { return textForms[1]; }
  if (n1 == 1) { return textForms[0]; }
  return textForms[2];
};

const getDateLong = () => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayOfWeek;

  hours = hours + ' ' + declOfNum(hours, ['час', 'часа', 'часов']);
  minutes = minutes + ' ' + declOfNum(minutes, ['минута', 'минуты', 'минут']);
  seconds = seconds + ' ' + declOfNum(seconds, ['секунда', 'секунды', 'секунд']);

  let formattedDate = new Intl.DateTimeFormat('Ru-ru', options).format(date);

  formattedDate = formattedDate.split(', ');
  dayOfWeek = formattedDate[0];
  dayOfWeek = dayOfWeek[0].toUpperCase() + dayOfWeek.slice(1, dayOfWeek.length);
  date = formattedDate.slice(1, 2);
  formattedDate = "Сегодня " + dayOfWeek + ', ' + date + ', ' + [hours, minutes, seconds].join(' ');
  formattedDate = formattedDate.replace('г.', 'года');

  console.log(formattedDate);
};

let now = new Date();
let badDate = '9:5:3 1.6.2019';
let rightDate = getRightDate(badDate);

now = now.toLocaleString().split(', ').join(' - ');
console.log(now);

console.log('Дата до обработки функцией:', badDate);
console.log('Дата после обработки функцией:', rightDate);

setInterval(getDateLong, 1000);
