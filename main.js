let strForTest = 'Далеко-далеко за словесными горами в стране гласных.';

const formatString = (str) => {
  if (typeof str !== 'string') {
    console.log('Введена не строка!');
    return;
  }

  str = str.trim();

  if (str.length > 30) {
    str = str.slice(0, 31) + '...';
  }
  return str;
};

console.log(`Строка до форматирования:\n\n${strForTest}`);
console.log(`Строка после форматирования:\n\n${formatString(strForTest)}`);
