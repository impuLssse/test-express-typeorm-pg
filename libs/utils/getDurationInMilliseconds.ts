export const getDurationInMilliseconds = (start: [number, number]) => {
  const perSecond = 1e9;
  const perMillisecond = 1e6;
  const diff = process.hrtime(start);

  return (diff[0] * perSecond + diff[1]) / perMillisecond;
};
