export default function setFromArray(array) {
  const copyArray = [...array];
  return new Set(copyArray);
}
