export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    if (!Array.isArray(students) || !students.every((element) => typeof element === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._length = length; // eslint-disable-line no-underscore-dangle
    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('name must be a string');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('length must be a number');
    }
    this._length = length; // eslint-disable-line no-underscore-dangle
  }

  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(students) {
    if (!Array.isArray(students) || !students.every((element) => typeof element === 'string')) {
      throw new TypeError('students must be an array of strings');
    }
    this._students = students; // eslint-disable-line no-underscore-dangle
  }
}
