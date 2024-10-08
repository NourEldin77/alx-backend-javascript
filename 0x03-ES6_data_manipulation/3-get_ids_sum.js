export default function getStudentIdsSum(listOfStudents) {
  if (!Array.isArray(listOfStudents)) {
    return ([]);
  }
  const sumOfIds = [...listOfStudents].map((ele) => ele.id).reduce((acc, crr) => acc + crr);
  return (sumOfIds);
}
