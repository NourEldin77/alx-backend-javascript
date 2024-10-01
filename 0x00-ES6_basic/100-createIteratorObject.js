export default function createIteratorObject(report) {
  const array = [];
  const values = Object.values(report.allEmployees);
  for (const value of values) {
    array.push(...value);
  }
  return array;
}
