export default function hasValuesFromArray(set, array) {
  const copyArray = [...array];
  const copySet = [...set];
  // we could've used has
  return copyArray.every((ele) => copySet.includes(ele));
}
