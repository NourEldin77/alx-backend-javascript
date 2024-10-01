export default function iterateThroughObject(reportWithIterator) {
  const copyArr = [...reportWithIterator];
  const fullString = copyArr.reduce((acc, crr) => (acc ? `${acc} | ${crr}` : crr), '');
  return fullString;
}
