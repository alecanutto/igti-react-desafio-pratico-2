export function formatPeriod(month, year) {
  let newMonth;
  switch (month) {
    case 1:
      newMonth = 'jan';
      break;
    case 2:
      newMonth = 'fev';
      break;
    case 3:
      newMonth = 'mar';
      break;
    case 4:
      newMonth = 'abr';
      break;
    case 5:
      newMonth = 'mai';
      break;
    case 6:
      newMonth = 'jun';
      break;
    case 7:
      newMonth = 'jul';
      break;
    case 8:
      newMonth = 'ago';
      break;
    case 9:
      newMonth = 'set';
      break;
    case 10:
      newMonth = 'out';
      break;
    case 11:
      newMonth = 'nov';
      break;
    case 12:
      newMonth = 'dez';
      break;

    default:
      break;
  }
  return `${newMonth}/${year}`;
}

export function formatValue(value) {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'never',
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

export function formatPercent(value) {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    signDisplay: 'exceptZero',
    style: 'percent',
    currency: 'BRL',
  })
    .format(value / 100)
    .replace('.', ',');
}

export function getClassColor(value) {
  return value < 0
    ? 'text-red-400'
    : value > 0
    ? 'text-green-400'
    : 'text-black-400';
}
