export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  if (!Array.isArray(listOfStudents) || typeof (city) !== 'string') {
    return ([]);
  }
  return [...listOfStudents].filter((ele) => ele.location === city).map((ele) => {
    const newStudent = { ...ele };
    const [gradeObject] = [...newGrades].filter((grade) => grade.studentId === ele.id);
    newStudent.grade = gradeObject ? gradeObject.grade : 'N/A';
    return (newStudent);
  });
}
