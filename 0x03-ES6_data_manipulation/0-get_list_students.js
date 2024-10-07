export default function getListStudents() {
  const makeObj = (id, firstName, location) => ({ id, firstName, location });
  const arrayOfStudents = [];
  arrayOfStudents.push(makeObj(1, 'Guillaume', 'San Francisco'), makeObj(2, 'James', 'Columbia'), makeObj(5, 'Serena', 'San Francisco'));
  return arrayOfStudents;
}
