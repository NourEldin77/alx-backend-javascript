export default function getStudentsByLocation(listOfStudents, city) {
  if (!Array.isArray(listOfStudents) || typeof (city) !== 'string') {
    return ([]);
  }
  const filteredArray = [...listOfStudents].filter((ele) => ele.location === city);
  return (filteredArray);
}
