export default function updateUniqueItems(listMap) {
  if (!(listMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  listMap.forEach((value, key) => {
    if (value === 1) {
      listMap.set(key, 100);
    }
  });

  return listMap;
}
