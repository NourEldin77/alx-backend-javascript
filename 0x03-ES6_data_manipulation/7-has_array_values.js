export default function hasValuesFromArray(set, array) {
  const copyArray = [...array];
  const copySet = [...set];
  return copyArray.every((ele) => copySet.includes(ele));
}
