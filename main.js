let days = [];
days.push('понедельник');
days.push('вторник');
days.push('среда');
days.push('четверг');
days.push('пятница');
days.push('суббота');
days.push('воскресенье');

const now = new Date();
let todayDayOfWeek = now.getDay();
todayDayOfWeek = new Intl.DateTimeFormat('ru-RU', { weekday: 'long' }).format(now);

for (let day of days) {
  if (day === 'cуббота' || day === 'воскресенье') {
    console.log(`%c${day}`, "font-style: italic;");
    continue;
  }
  else if (day === todayDayOfWeek) {
    console.log(`%c${day}`, "font-weight: bold;");
    continue;
  }
  console.log(day);
}