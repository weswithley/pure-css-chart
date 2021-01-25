export const organizePeriodList = (start, end) => {
  let periodList = [];
  for (let i = start; i < end + 10; i += 10) {
    periodList.unshift(i);
  }
  return periodList
};

export const transformUnit = (unit) => {
  let resultUnit = null;
  switch (unit) {
    case 'temperature':
      resultUnit = '\u2103';
      break;
    case 'percentage':
      resultUnit = '%';
      break;
  }
  return resultUnit
}