export default function cleanSet(set, startString) {
  if (!(set instanceof Set) || typeof startString !== 'string' || !startString) {
    return '';
  }
  const copySet = [...set];
  const stringArr = [];
  for (const element of copySet) {
    if (typeof element === 'string') {
      if (element.startsWith(startString)) {
        stringArr.push(element.substring(startString.length));
      }
    }
  }
  return stringArr.reduce((acc, crr) => (acc ? `${acc}-${crr}` : crr), '');
}
