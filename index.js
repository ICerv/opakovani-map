const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];

const capitalizedWeekdays = weekdays.map(day => day.toUpperCase());
console.log(capitalizedWeekdays)

const abbreviatedWeekdays = weekdays.map(day => day.slice(0, 2))
console.log(abbreviatedWeekdays)

//substring(0, 2) alternativa slice(0, 2)



const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];

//pole pocty dni v mesici
const daysInMonths = months.map(month => month.days)
console.log(daysInMonths)

//pole prvnich dni v kazdem mesici v roce 2020
const firstDaysIn2020 = months.map((month) => `1. ${month.name} 2020`);
console.log(firstDaysIn2020);
