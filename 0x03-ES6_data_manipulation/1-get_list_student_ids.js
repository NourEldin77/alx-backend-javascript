export default function getListStudentIds(arrayOfObjects) {
  if (!Array.isArray(arrayOfObjects)) {
    return ([]);
  }
  const arrayOfIds = [...arrayOfObjects].map((ele) => ele.id);
  return (arrayOfIds);
}
